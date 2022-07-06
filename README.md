# Next.js styled-components ESM reproduction

Context: https://github.com/vercel/next.js/discussions/35905

Like the `without-styled-components` branch on which this branch is based, this branch provides further confirmation
that the build issue in the `main` branch is related to `styled-components`. This branch adds `react-markdown`, which is
an ESM-only package.

`react-markdown`'s package.json's `"main"` points to an ES module, not a CommonJS module.

However, `styled-component`'s package.json's `"main"` points to a CommonJS module and its `"module"` points to an ES
module. This is a legacy configuration which was designed for backwards compatibility, but doesn't seem to be supported
by Next.js.

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

Unlike the `main` branch, this is expected to build successfully.
