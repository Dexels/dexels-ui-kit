# Documentation used for publishing this libary as a NPM package

Publishing a new version of the Dexels UI kit package actually is pretty easy:
- Navigate to the root of this project in your login
- Login to the Dexels NPM account by running `npm login`.
- Open the `package.json` file and upgrade the version. We're using semver like every other package, you can read more about semver [here](https://semver.org/). **Read this carefully since versioning actually is really important.**
- After you've updated the version correctly you can run `npm publish`. This will reinstall the node modules and generate a new build. This new build will then be uploaded to NPM so all users can use the latest version of your package.
- That's it!

## Sources
- Not yet implemented: https://circleci.com/blog/publishing-npm-packages-using-circleci-2-0/
- This is the thread of the issue we're facing now: https://github.com/webpack/webpack/issues/2933
  - To solve this issue we can start using [Rollup](https://rollupjs.org/guide/en/).
- https://webpack.js.org/guides/environment-variables/
- https://webpack.js.org/guides/author-libraries/
- https://parastudios.de/create-a-react-component-as-npm-module/
- https://semver.org/
- https://docs.npmjs.com/misc/scripts
- https://webpack.js.org/configuration/externals/
