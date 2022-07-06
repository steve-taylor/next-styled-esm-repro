# Next.js styled-components ESM reproduction

Context: https://github.com/vercel/next.js/discussions/35905

Unlike the `main` branch, this uses CommonJS and it builds successfully. However, it rules out consuming ESM-only
packages, such as `react-markdown`.

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

Unlike the `main` branch, this builds successfully.
