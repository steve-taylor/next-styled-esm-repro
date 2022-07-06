# Next.js styled-components ESM reproduction

Context: https://github.com/vercel/next.js/discussions/35905

In this branch, I try to break the build by adding a package with `"main"` and `"module"` fields pointing to CommonJS
and ESM entry points respectively, just as `styled-components` does. However, this doesn't break the build. It suggests
this de facto standard is supported and that it isn't the cause of `styled-components` not being usable as a transitive
dependency in Next.js.

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
