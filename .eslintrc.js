module.exports = {
  env: { es6: true, node: true },
  extends: 'eslint:recommended',
  globals: { chrome: true, parseUri: true },
  rules: {
    'array-bracket-spacing': [ 'error', 'always' ],
    'comma-dangle': [ 'error', 'never' ],
    'max-len': [ 'error', 80 ],
    'object-curly-spacing': [ 'error', 'always' ],
    semi: [ 'error', 'never' ]
  }
}
