# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 0.3.x   | :white_check_mark: |
| < 0.3   | :x:                |

## Reporting a Vulnerability

We take security seriously. If you discover a security vulnerability, please report it responsibly.

### How to Report

**DO NOT** open a public GitHub issue for security vulnerabilities.

Instead, please email us at: **security@scentplanet.app**

Include the following information:
- Type of vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if any)

### What to Expect

1. **Acknowledgment**: We will acknowledge receipt within 48 hours
2. **Investigation**: We will investigate and keep you informed of progress
3. **Fix**: We will work on a fix and coordinate disclosure timing with you
4. **Credit**: With your permission, we will credit you in our release notes

### Scope

The following are in scope:
- ScentPlanet desktop application
- Our official download channels
- API endpoints

The following are out of scope:
- Third-party dependencies (report to their maintainers)
- Social engineering attacks
- Physical attacks

## Security Best Practices for Users

1. **Download from official sources only**
   - GitHub Releases: https://github.com/ScentPlanet/scentplanet/releases
   - Official website: https://scentplanet.app

2. **Keep the app updated**
   - Enable auto-updates for the latest security patches

3. **Protect your API keys**
   - Never share your OpenRouter API key
   - The app stores it securely in your local system

## Secure Development

Our development practices include:
- Code signing for all releases
- Dependency vulnerability scanning
- Regular security reviews
