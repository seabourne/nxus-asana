# Nxus Asana

[![Build Status](https://travis-ci.org/seabourne/nxus-asana.svg?branch=master)](https://travis-ci.org/seabourne/nxus-asana)

A Nxus module for interacting with the Asana API. Built on top of the Asana API module.

## Installation

    > npm install nxus-asana --save

## Usage

The module exposes the API client through a series of Nxus responders.  First, you'll need to enter your personal access token in the package.json config:

```
'config': {
  'asana-api': {
    'token': 'your token goes here'
  }
}
```

or using an env variable `ASANA_PERSONAL_TOKEN`.

Once the token is present, you can access any of the API endpoints using the corresponding provider:

```
app.get('asana-api').users().then(...)
```

For how to use the API, and which methods are provided by each endpoint, take a look at the [Asana API docs](https://asana.com/developers/api-reference/attachments) or the [Asana NPM Module](https://www.npmjs.com/package/asana).

## API

### Module

[src/index.js:12-16](https://github.com/nxus/module-template/blob/b84a1e5ed9b5267ef537ea2235cb9af75d44a3d8/src/index.js#L12-L16 "Source code on GitHub")

The Base Nxus Module