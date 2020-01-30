# Documentation used for publishing this libary as a NPM package

Publishing a new version of the Dexels UI kit package actually is pretty easy:
- Navigate to the root of this project in your login
- Login to the Dexels NPM account by running `npm login`.
- Open the `package.json` file and upgrade the version. We're using semver like every other package, you can read more about semver [here](https://semver.org/). **Read this carefully since versioning actually is really important.**
- After you've updated the version correctly you can run `npm publish`. This will reinstall the node modules and generate a new build. This new build will then be uploaded to NPM so all users can use the latest version of your package.
- That's it!

# Known problems
- Styled components types bug https://github.com/DefinitelyTyped/DefinitelyTyped/issues/33311, hence postinstall script in package.json (or lock StyledComponents types to 4.1.8)
- Module 'react-dates/lib/constants' is not typed and prevents us using 'noImplicitAny' in types generation tsconfig. This needs either PR to their repo or a ticket.

## Sources
- Not yet implemented: https://circleci.com/blog/publishing-npm-packages-using-circleci-2-0/
- https://webpack.js.org/guides/environment-variables/
- https://webpack.js.org/guides/author-libraries/
- https://parastudios.de/create-a-react-component-as-npm-module/
- https://semver.org/
