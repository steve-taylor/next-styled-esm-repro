# Next.js styled-components ESM reproduction

Context: https://github.com/vercel/next.js/discussions/35905

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

This is expected to fail! See below.

## What this reproduces

When you attempt to build via `bolt build`, `next build` will fail with the following error:

```
> Build error occurred
TypeError: Cannot read properties of undefined (reading 'withConfig')
    at Object.346 (/path/to/next-styled-esm-repro/apps/app/.next/server/pages/index.js:29:61)
    at __webpack_require__ (/path/to/next-styled-esm-repro/apps/app/.next/server/webpack-runtime.js:25:42)
    at __webpack_exec__ (/path/to/next-styled-esm-repro/apps/app/.next/server/pages/index.js:102:39)
    at /path/to/next-styled-esm-repro/apps/app/.next/server/pages/index.js:103:28
    at Object.<anonymous> (/path/to/next-styled-esm-repro/apps/app/.next/server/pages/index.js:106:3)
    at Module._compile (node:internal/modules/cjs/loader:1105:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1159:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Module.require (node:internal/modules/cjs/loader:1005:19) {
  type: 'TypeError'
}
info  - Collecting page data .error Error
error     at ChildProcess.<anonymous> (/home/me/.nvm/versions/node/v16.15.1/lib/node_modules/bolt/dist/modern/utils/processes.js:128:16)
error     at ChildProcess.emit (node:events:527:28)
error     at maybeClose (node:internal/child_process:1092:16)
error     at Process.ChildProcess._handle.onexit (node:internal/child_process:302:5)
error Error
error     at ChildProcess.<anonymous> (/home/me/.nvm/versions/node/v16.15.1/lib/node_modules/bolt/dist/modern/utils/processes.js:128:16)
error     at ChildProcess.emit (node:events:527:28)
error     at maybeClose (node:internal/child_process:1092:16)
error     at Process.ChildProcess._handle.onexit (node:internal/child_process:302:5)
```
