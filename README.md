# Next.js styled-components ESM reproduction

Context: https://github.com/vercel/next.js/discussions/35905

This branch provides further confirmation that the issue may be with styled components itself. Styled Components has
been removed and the `Heading` and `Paragraph` apps are created using class-based components.

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
