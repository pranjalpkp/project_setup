interface FileValidationConfig {
  maxSize: number;
  allowedTypes: string[];
  maxFiles: number;
  allowedExtensions: string[];
}

export class FileValidator {
  private static readonly DEFAULT_CONFIG: FileValidationConfig = {
    maxSize: parseInt(process.env.NEXT_PUBLIC_MAX_FILE_SIZE || '5242880'),
    allowedTypes: (process.env.NEXT_PUBLIC_ALLOWED_FILE_TYPES || 'image/jpeg,image/png,application/pdf').split(','),
    maxFiles: 5,
    allowedExtensions: (process.env.NEXT_PUBLIC_ALLOWED_EXTENSIONS || '.jpg,.jpeg,.png,.pdf').split(','),
  };

  static async validate(
    file: File, 
    config: FileValidationConfig = this.DEFAULT_CONFIG
  ): Promise<{ isValid: boolean; errors: string[] }> {
    const errors: string[] = [];

    // Check file size
    if (file.size > config.maxSize) {
      errors.push(`File size exceeds ${this.formatFileSize(config.maxSize)} limit`);
    }

    // Check MIME type
    if (!config.allowedTypes.includes(file.type)) {
      errors.push(`File type ${file.type} is not allowed`);
    }

    // Check file extension
    const extension = '.' + file.name.split('.').pop()?.toLowerCase();
    if (!config.allowedExtensions.includes(extension)) {
      errors.push(`File extension ${extension} is not allowed`);
    }

    // Check for double extensions (e.g., file.jpg.exe)
    const extensions = file.name.split('.');
    if (extensions.length > 2) {
      errors.push('File contains multiple extensions');
    }

    // Check filename for malicious characters
    const sanitizedName = file.name.replace(/[^a-zA-Z0-9._-]/g, '');
    if (sanitizedName !== file.name) {
      errors.push('Filename contains invalid characters');
    }

    // Additional validation for images
    if (file.type.startsWith('image/')) {
      return await this.validateImage(file, errors);
    }

    return {
      isValid: errors.length === 0,
      errors,
    };
  }

  private static validateImage(file: File, errors: string[]): Promise<{ isValid: boolean; errors: string[] }> {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          // Check for image bombing (too large dimensions)
          if (img.width > 8000 || img.height > 8000) {
            errors.push('Image dimensions too large (max 8000x8000)');
          }
          
          // Check for extremely large files that might cause memory issues
          if (file.size > 10 * 1024 * 1024) {
            errors.push('Image file too large (max 10MB)');
          }
          
          resolve({
            isValid: errors.length === 0,
            errors,
          });
        };
        img.onerror = () => {
          errors.push('Invalid image file or corrupted image');
          resolve({
            isValid: false,
            errors,
          });
        };
        img.src = e.target?.result as string;
      };
      reader.readAsDataURL(file);
    });
  }

  static formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }
}