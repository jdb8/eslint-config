# @jbateson/eslint-config

`yarn add @jbateson/eslint-config`

In .eslintrc:

```
{
    "extends": "@jbateson"
}
```

Don't forget to include your custom `prettier` settings (if you have any) in your app's `package.json`/`.prettierrc`/etc. Otherwise prettier will be invoked with the defaults.
