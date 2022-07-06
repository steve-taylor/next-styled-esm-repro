# Next.js styled-components ESM reproduction

Context: https://github.com/vercel/next.js/discussions/35905

Like the `without-styled-components` branch, this branch also builds successfully. However, this branch imports `React`
as the `react` module's default export, rather than importing the `Component` named import.

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
