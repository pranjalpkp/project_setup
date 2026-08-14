import DOMPurify from 'dompurify';
import sanitizeHtml from 'sanitize-html';

export class XSSProtection {
  static sanitize(input: string): string {
    if (!input) return '';
    return DOMPurify.sanitize(input, {
      ALLOWED_TAGS: [],
      ALLOWED_ATTR: [],
      FORBID_TAGS: ['script', 'style', 'iframe', 'object', 'embed', 'form'],
      FORBID_ATTR: ['onerror', 'onload', 'onclick', 'onmouseover', 'onfocus'],
      USE_PROFILES: { html: false },
    }).trim();
  }

  static sanitizeRichText(input: string): string {
    return sanitizeHtml(input, {
      allowedTags: [
        'b', 'i', 'u', 'p', 'br', 'strong', 'em', 
        'ul', 'li', 'ol', 'span', 'div', 'a'
      ],
      allowedAttributes: {
        a: ['href', 'target'],
        span: ['style'],
      },
      allowedStyles: {
        span: {
          'color': [/^#(0x)?[0-9a-f]+$/i, /^rgb\(/],
          'font-weight': [/^bold$/],
          'font-style': [/^italic$/],
        }
      },
      disallowedTagsMode: 'discard',
      enforceHtmlBoundary: true,
    });
  }

  static escapeHtml(text: string): string {
    const htmlEscapes: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#x27;',
      '/': '&#x2F;',
    };
    return text.replace(/[&<>"'/]/g, (char) => htmlEscapes[char] || char);
  }

  static validateURL(url: string): boolean {
    try {
      const parsed = new URL(url);
      return ['http:', 'https:'].includes(parsed.protocol);
    } catch {
      return false;
    }
  }
}