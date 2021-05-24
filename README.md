# Commodity Data: Forestry Prices

Simple application showing forestry-related data.

# Development

For full development information, please see [DEVELOPMENT.md](DEVELOPMENT.md).

## Quick Start

To avoid CORS errors, be sure to run as a local domain. Do not attempt to open locally as `localhost:3000`. You can do this several ways and if you're on macOS or Linux you can edit `/etc/hosts` and put in a temporary rule:

```
127.0.0.1 forestry-prices.test
```

Now you can view/run the application locally by opening <http://forestry-prices.test:3000>.

```
# Install dependencies
npm install

# Run locally (view at http://forestry-prices.test:3000)
npm run start

# Run tests
npm test

# Build
npm run build

# Deploy
# TODO: Netlify deploy
```

# License

[MIT](LICENSE)
