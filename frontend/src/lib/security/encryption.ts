import CryptoJS from 'crypto-js';

const ENCRYPTION_KEY = process.env.NEXT_PUBLIC_ENCRYPTION_KEY || 'default-key-32bytes';
const IV_LENGTH = 16;

export class EncryptionService {
  static encrypt(data: any): string {
    try {
      const jsonString = JSON.stringify(data);
      const iv = CryptoJS.lib.WordArray.random(IV_LENGTH);
      const encrypted = CryptoJS.AES.encrypt(jsonString, ENCRYPTION_KEY, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
      });
      
      const encryptedString = encrypted.toString();
      const ivString = iv.toString(CryptoJS.enc.Hex);
      
      return JSON.stringify({
        iv: ivString,
        data: encryptedString,
      });
    } catch (error) {
      console.error('Encryption failed:', error);
      throw new Error('Data encryption failed');
    }
  }

  static decrypt(encryptedData: string): any {
    try {
      const parsed = JSON.parse(encryptedData);
      const iv = CryptoJS.enc.Hex.parse(parsed.iv);
      const decrypted = CryptoJS.AES.decrypt(parsed.data, ENCRYPTION_KEY, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
      });
      
      const jsonString = decrypted.toString(CryptoJS.enc.Utf8);
      return JSON.parse(jsonString);
    } catch (error) {
      console.error('Decryption failed:', error);
      throw new Error('Data decryption failed');
    }
  }

  static hashPassword(password: string): string {
    return CryptoJS.SHA256(password + ENCRYPTION_KEY).toString();
  }

  static generateToken(): string {
    return CryptoJS.lib.WordArray.random(32).toString(CryptoJS.enc.Hex);
  }

  static maskSensitiveData(data: any, sensitiveFields: string[]): any {
    const masked = { ...data };
    sensitiveFields.forEach(field => {
      if (masked[field]) {
        const value = masked[field];
        if (typeof value === 'string') {
          masked[field] = value.substring(0, 2) + '*'.repeat(value.length - 4) + value.substring(value.length - 2);
        }
      }
    });
    return masked;
  }
}