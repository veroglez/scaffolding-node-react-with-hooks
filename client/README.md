# Cart challenge

## Getting started

You just need these packages as global environment:

```
node@10.15.0

brew install yarn
```

It is time to get all the dependencies using our package.json
```
yarn install
```
### Web environment
Before starting, you need add `SKIP_PREFLIGHT_CHECK=true` to an `.env` file in your project.

Then, if you wanna use the web environment just type:
```
yarn start
```
### Production environment
To generate a directory with a production build:
```
yarn build
```

### Test and Lint your code
A linter has been used, you should execute the task:
```
yarn lint
```

JEST has been used to test the app, using also its sanpshots feature:
```
yarn test
```

If the snapshot has change, you should update your snapshot typing:
```
yarn test -u
```

## Solution

Challenge cart has been implemented with React. In the side of the client, the code has been divided into functional components. Each of the functional components has its own structure and its own style, using CSSModules. There is a common style in `/common` for a breakpoint and a general style in `index.module.scss` with the basic style of the app. 

Tests have been implemented, including snapshots and test for the used methods to check its functionality.

The state of the application has been managed using `Context` using `Hooks`, which contains a main `state` and a `reducer` in charge of updating this state.