<!-- Title -->
<h1 align="center">
  aes-encryption
</h1>

<!-- Description -->
<h4 align="center">
  Encrypting and decrypting strings with <code>aes-256-gcm</code>.
</h4>

<!-- Badges -->
<p align="center">
  <a href="https://www.npmjs.com/package/@devoxa/aes-encryption">
    <img
      src="https://img.shields.io/npm/v/@devoxa/aes-encryption?style=flat-square"
      alt="Package Version"
    />
  </a>

  <a href="https://github.com/devoxa/aes-encryption/actions?query=branch%3Amaster+workflow%3A%22Continuous+Integration%22">
    <img
      src="https://img.shields.io/github/workflow/status/devoxa/aes-encryption/Continuous%20Integration?style=flat-square"
      alt="Build Status"
    />
  </a>

  <a href="https://codecov.io/github/devoxa/aes-encryption">
    <img
      src="https://img.shields.io/codecov/c/github/devoxa/aes-encryption/master?style=flat-square"
      alt="Code Coverage"
    />
  </a>
</p>

<!-- Quicklinks -->
<p align="center">
  <a href="#installation">Installation</a> •
  <a href="#usage">Usage</a> •
  <a href="#contributors">Contributors</a> •
  <a href="#license">License</a>
</p>

<br>

## Installation

```bash
yarn add @devoxa/aes-encryption
```

## Usage

**Under no circumstances use this for passwords. You should be using hashing instead.
[Read more](https://stackoverflow.com/a/477578)**

```ts
import { encrypt, decrypt } from '@devoxa/aes-encryption'

// The 32 character encryption key
const key = 'ZtdDl3Ex7ycFfgdbAC3uTLNk8eLVDcEd'

const encrypted = encrypt(key, 'My secret text')
// -> 'j2G63AgcRSkiFeE4jonB8I/GZYp6Uc40ItdwSappAWi75ItbDzzoOzo7EuaMaA=='

const decrypted = decrypt(key, encrypted)
// -> 'My secret text'
```

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://www.david-reess.de"><img src="https://avatars3.githubusercontent.com/u/4615516?v=4" width="75px;" alt=""/><br /><sub><b>David Reeß</b></sub></a><br /><a href="https://github.com/devoxa/aes-encryption/commits?author=queicherius" title="Code">💻</a> <a href="https://github.com/devoxa/aes-encryption/commits?author=queicherius" title="Documentation">📖</a> <a href="https://github.com/devoxa/aes-encryption/commits?author=queicherius" title="Tests">⚠️</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors)
specification. Contributions of any kind welcome!

## License

MIT
