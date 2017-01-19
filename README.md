# eslint-config-squarespace

Provides the universal configuration for [eslint](https://github.com/eslint) at [Squarespace](https://www.squarespace.com).

## Installation

### Without React

````sh
$ npm install --save-dev eslint-config-squarespace babel-eslint
````

Then:

add "extends": "eslint-config-squarespace" to your .eslintrc

#### Example .eslintrc
````json
{
  "extends": "eslint-config-squarespace/vanilla",
  "env": {
    "browser": true,
    "mocha": true,
    "node": true
  }
}
````

### With React
````sh
$ npm install --save-dev eslint-config-squarespace babel-eslint eslint-plugin-react
````

#### Example .eslintrc

````json
{
  "extends": "squarespace",
  "env": {
    "browser": true,
    "mocha": true,
    "node": true
  },
  "plugins": [
    "react"
  ]
}
````

### Integrating with Webpack

You may add eslint config to a webpack build process by using a preloader and
some eslint config. There should be no need to reference this config file provided
the .eslintrc 'extends' property is set.

````sh
$ npm install --save eslint-loader
````

````js
// webpack.config.js
module: {
  eslint: {
    configFile: path.join(pathsToESlint, '.eslintrc'),
    failOnError: true
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: 'eslint',
        include: pathsToFiles
      }
    ],
    ..
  }
````

### Troubleshooting

#### Webpack

The webpack plugin for pre-linting is notoriously slow, because it can not leverage
and form of caching available to either eslint _or_ webpack. If it is too slow, try moving it to the npm command that starts the webpack build.

#### Global Eslint

Global CLI installations of eslint cannot find local modules. This is [expected behavior](https://github.com/eslint/eslint/issues/1238). Tools or scripts that
rely on such global installations must be rewritten or modified to find the
correct node_modules folder.

#### Fix Syntastic for Vim

If you are using syntastic, adding the following to your `.vimrc` should fix eslint.

````vimrc
" Kludge to fix global/local.
let g:syntastic_javascript_checkers = ['eslint']

let local_eslint = finddir('node_modules', '.;') . '/.bin/eslint'
if matchstr(local_eslint, "^\/\\w") == ''
    let local_eslint = getcwd() . "/" . local_eslint
endif
if executable(local_eslint)
    let g:syntastic_javascript_eslint_exec = local_eslint
endif
````

### License

Apache-2 copyright Squarespace
