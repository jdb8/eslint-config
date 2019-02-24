# @jbateson/eslint-config

[![npm (scoped)](https://img.shields.io/npm/v/@jbateson/eslint-config.svg)](https://www.npmjs.com/package/@jbateson/eslint-config)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release) [![Greenkeeper badge](https://badges.greenkeeper.io/jdb8/eslint-config.svg)](https://greenkeeper.io/)
![Actions Status](https://wdp9fww0r9.execute-api.us-west-2.amazonaws.com/production/badge/jdb8/eslint-config)




`yarn add -D @jbateson/eslint-config`

In .eslintrc:

```
{
    "extends": "@jbateson"
}
```

Don't forget to include your custom `prettier` settings (if you have any) in your app's `package.json`/`.prettierrc`/etc. Otherwise prettier will be invoked with the defaults.
