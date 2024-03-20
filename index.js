const sanitizeHtml = require('sanitize-html');
const xss = require('xss');

class CosmicDustSanitizer {
  constructor(options) {
    this.options = options || {};
  }

  // Method to sanitize HTML using sanitize-html library
  sanitizeWithSanitizeHtml(html) {
    return sanitizeHtml(html, this.options);
  }

  // Method to sanitize HTML using xss library
  sanitizeWithXss(html) {
    return xss(html, this.options);
  }
}

module.exports = CosmicDustSanitizer;
