# This repository is scheduled to be deprecated. After October 31, 2024, the contents of this repo will no longer be available on GitHub. See [developers.squarespace.com/tools](https://developers.squarespace.com/tools) for more details

# eslint-config-squarespace

Provides the [eslint](https://github.com/eslint) configuration for linting [Squarespace](https://www.squarespace.com) publicly available projects.

## Installation

````sh
$ npm install --save-dev eslint-config-squarespace
````

Then:

add `"extends": "eslint-config-squarespace"` to your `.eslintrc`

### Example .eslintrc
````json
{
  "extends": "eslint-config-squarespace",
  "env": {
    "browser": true,
    "jest": true,
    "node": true
  }
}
````

## License

Apache-2 copyright Squarespace
