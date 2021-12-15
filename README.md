# JDI React/Next.js/Storybook example

## How to use

Clone the repo
Install dependencies:

```sh
npm install
```

### Storybook

You can run storybook in development mode

```sh
npm run storybook
```

Or build it staticly

```sh
npm run build-storybook
npx http-server storybook-static
```

### Next.js

```sh
npm run dev
```


## Deployment

- Create a branch from `material_surfaces` and make your changes, then make a Pull Request to `material_surfaces`;
- After PR is merged, run in console `npm run build`, an `out` folder will appear in your project;
- Go to [jdi-light repository](https://github.com/jdi-testing/jdi-light/tree/gh-pages-material), branch `gh-pages-material`;
- Copy everything from folder `out` in test-site to folder `material` in jdi-light project;
- Open pages locally to see if everything is working. To deploy it to github pages, do a PR from `gh-pages-material` to `gh-pages`