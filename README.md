# cosmic-dust-sanitizer

`cosmic-dust-sanitizer` is a JavaScript library for sanitizing HTML content using popular sanitization libraries like `sanitize-html` and `xss`.

## Installation

```bash
npm install cosmic-dust-sanitizer
```

## Usage

```javascript
const CosmicDustSanitizer = require('cosmic-dust-sanitizer');

// Create an instance of CosmicDustSanitizer
const sanitizer = new CosmicDustSanitizer();

// Sanitize HTML using sanitize-html library
const sanitizedHtmlWithSanitizeHtml = sanitizer.sanitizeWithSanitizeHtml('<p>Hello <script>alert("world")</script></p>');

// Sanitize HTML using xss library
const sanitizedHtmlWithXss = sanitizer.sanitizeWithXss('<p>Hello <script>alert("world")</script></p>');
```

## API

### new CosmicDustSanitizer(options)

Creates a new instance of CosmicDustSanitizer with optional `options` object.

- `options` (Object): Optional configuration options.

### sanitizeWithSanitizeHtml(html)

Sanitizes HTML content using the `sanitize-html` library.

- `html` (String): The HTML content to be sanitized.

Returns the sanitized HTML.

### sanitizeWithXss(html)

Sanitizes HTML content using the `xss` library.

- `html` (String): The HTML content to be sanitized.

Returns the sanitized HTML.

## Example

```javascript
const CosmicDustSanitizer = require('cosmic-dust-sanitizer');

// Create an instance of CosmicDustSanitizer with options
const sanitizer = new CosmicDustSanitizer({
allowedTags: ['p', 'a', 'b', 'i']
});

// Sanitize HTML using sanitize-html library
const sanitizedHtmlWithSanitizeHtml = sanitizer.sanitizeWithSanitizeHtml('<p>Hello <script>alert("world")</script></p>');

// Sanitize HTML using xss library
const sanitizedHtmlWithXss = sanitizer.sanitizeWithXss('<p>Hello <script>alert("world")</script></p>');
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
