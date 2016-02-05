# module-template
A template for Nxus modules. Just fork and you're ready to build.

## How to build

1. Fork the repository
1. Edit `package.json` to use your module name and GitHub repo addresses
1. Add your module code to files in the `./src` folder

## How to use

When you are ready, run `npm run compile` to compile the ES6 code into Javascript.

Any time you run `npm install`, `npm link` or other similar commands, `npm run compile` will be run automatically. 

## How to publish

Simply run `npm publish` and everything will be handled for you.