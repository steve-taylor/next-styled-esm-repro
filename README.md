# Next.js styled-components ESM reproduction

Context: https://github.com/vercel/next.js/discussions/35905

This branch demonstrates a viable workaround. Rather than creating pure ES modules, create hybrid modules with `"main"`
and `"module"` fields, and use [conditional exports](https://nodejs.org/docs/latest-v16.x/api/packages.html#packages_conditional_exports)
(the `"exports"` field) to tell Node.js which bundles to use for ESM and CommonJS.

This allows you to consume pure ESM packages such as `react-markdown` while bundling `styled-components` correctly.

It's a workaround rather than a fix, because it would also work if your packages were pure ESM and `styled-components`
and other hybrid packages contained conditional exports.

Note: Preconstruct isn't needed, however I'm using it because it makes building hybrid bundles in a monorepo easy.

## Getting started

You'll need Node.js 16 or higher, preferably via [Node Version Manager](https://github.com/nvm-sh/nvm).

Install Bolt globally:

```sh
npm i -g bolt
```

Install dependencies and link packages:

```sh
bolt
```

Build everything:

```sh
bolt build
```

Run the app:

```sh
bolt prod
```
