# @jbateson/eslint-config

[![npm (scoped)](https://badgen.net/npm/v/@jbateson/eslint-config)](https://www.npmjs.com/package/@jbateson/eslint-config)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release) [![Dependabot enabled](https://badgen.net/dependabot/jdb8/eslint-config/?icon=dependabot)](#)
[![Actions Status](https://github.com/jdb8/eslint-config/workflows/main/badge.svg)](https://github.com/jdb8/eslint-config/actions)




`yarn add -D @jbateson/eslint-config`

And make sure you install the required peer dependencies required for this config:

```
$ yarn global add install-peerdeps
$ install-peerdeps --dev @jbateson/eslint-config
```

In .eslintrc:

```json
{
    "extends": "@jbateson"
}
```

Don't forget to include your custom `prettier` settings (if you have any) in your app's `package.json`/`.prettierrc`/etc. Otherwise prettier will be invoked with the defaults.
