# Nxus Asana

[![Build Status](https://travis-ci.org/seabourne/nxus-asana.svg?branch=master)](https://travis-ci.org/seabourne/nxus-asana)

A Nxus module for interacting with the Asana API. Built on top of the Asana API module.

## Installation

    > npm install nxus-asana --save

## Usage

The module exposes the API client through a series of Nxus responders.  First, you'll need to enter your personal access token in the package.json config:

    'config': {
      'asana-api': {
        'token': 'your token goes here'
      }
    }

or using an env variable `ASANA_PERSONAL_TOKEN`.

Once the token is present, you can access any of the API endpoints using the corresponding provider:

    app.get('asana-api').users().then((Users) => {Users.findbyId(...)})

For how to use the API, and which methods are provided by each endpoint, take a look at the [Asana API docs](https://asana.com/developers/api-reference/attachments) or the [Asana NPM Module](https://www.npmjs.com/package/asana).

## API

### Module

[src/index.js:39-144](https://github.com/seabourne/nxus-asana/blob/670c13c5d2782ed88e32e2d018f43915c03a6f23/src/index.js#L39-L144 "Source code on GitHub")

A Nxus module for interacting with the Asana API. Built on top of the Asana API module.

#### Configuration

The module exposes the API client through a series of Nxus responders.  First, you'll need to enter your personal access token in the package.json config:

    'config': {
      'asana-api': {
        'token': 'your token goes here'
      }
    }

or using an env variable `ASANA_PERSONAL_TOKEN`.

**Examples**

```javascript
app.get('asana-api').users().then(...)
```

#### attachments

[src/index.js:136-138](https://github.com/seabourne/nxus-asana/blob/670c13c5d2782ed88e32e2d018f43915c03a6f23/src/index.js#L136-L138 "Source code on GitHub")

Returns the attachments endpoint

Returns **[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** A wrapper for the Asana API Attachments endpoint.

#### events

[src/index.js:96-98](https://github.com/seabourne/nxus-asana/blob/670c13c5d2782ed88e32e2d018f43915c03a6f23/src/index.js#L96-L98 "Source code on GitHub")

Returns the events endpoint

Returns **[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** A wrapper for the Asana API Events endpoint.

#### me

[src/index.js:88-90](https://github.com/seabourne/nxus-asana/blob/670c13c5d2782ed88e32e2d018f43915c03a6f23/src/index.js#L88-L90 "Source code on GitHub")

Returns the current Asana user

Returns **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** The current user's object.

#### projects

[src/index.js:64-66](https://github.com/seabourne/nxus-asana/blob/670c13c5d2782ed88e32e2d018f43915c03a6f23/src/index.js#L64-L66 "Source code on GitHub")

Returns the projects endpoint

Returns **[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** A wrapper for the Asana API Projects endpoint.

#### stories

[src/index.js:128-130](https://github.com/seabourne/nxus-asana/blob/670c13c5d2782ed88e32e2d018f43915c03a6f23/src/index.js#L128-L130 "Source code on GitHub")

Returns the stories endpoint

Returns **[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** A wrapper for the Asana API Stories endpoint.

#### tags

[src/index.js:120-122](https://github.com/seabourne/nxus-asana/blob/670c13c5d2782ed88e32e2d018f43915c03a6f23/src/index.js#L120-L122 "Source code on GitHub")

Returns the tags endpoint

Returns **[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** A wrapper for the Asana API Tags endpoint.

#### tasks

[src/index.js:72-74](https://github.com/seabourne/nxus-asana/blob/670c13c5d2782ed88e32e2d018f43915c03a6f23/src/index.js#L72-L74 "Source code on GitHub")

Returns the tasks endpoint

Returns **[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** A wrapper for the Asana API Tasks endpoint.

#### teams

[src/index.js:104-106](https://github.com/seabourne/nxus-asana/blob/670c13c5d2782ed88e32e2d018f43915c03a6f23/src/index.js#L104-L106 "Source code on GitHub")

Returns the teams endpoint

Returns **[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** A wrapper for the Asana API Teams endpoint.

#### users

[src/index.js:80-82](https://github.com/seabourne/nxus-asana/blob/670c13c5d2782ed88e32e2d018f43915c03a6f23/src/index.js#L80-L82 "Source code on GitHub")

Returns the users endpoint

Returns **[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** A wrapper for the Asana API Users endpoint.

#### workspaces

[src/index.js:112-114](https://github.com/seabourne/nxus-asana/blob/670c13c5d2782ed88e32e2d018f43915c03a6f23/src/index.js#L112-L114 "Source code on GitHub")

Returns the workspaces endpoint

Returns **[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** A wrapper for the Asana API Workspaces endpoint.
