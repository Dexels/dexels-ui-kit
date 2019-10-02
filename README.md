[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)

[![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg)](link-to-site)

# dexels-ui-kit
An React UI kit which can be used in any React application.

# Workflow explanation

We're using [Jira](https://jira.sportlink.nl/) to monitor and facilitate the way we work on this codebase. If you're going to work on this project you will need your own Jira account. If you don't have one please check with the people at Sportlink so they can set one up for you.

Assuming you've a Jira account, this is the way how you're supposed to work on a ticket:

- First things first, there needs to be a ticket for each feature or request for change Sportlink wants. In general Sportlink will create and write the tickets but there are some cases in which a developer will create his own tickets. Some examples: tech debt tickets and internally found bug tickets.
- All tickets which are ready to be picked up should be in the `Ready for development` column. Tickets in this lane should **always** be unassigned. All columns before this stage aren't that relevant for us developers since they are revolving around UX and UI design.
- When you decide to start working on a ticket you should move it to `Development` column. When you do this you should also assign the ticket to yourself.
- Every ticket needs to have its own branch. For features we will prefix every branch like this: `_fb-cw-187-some-small-description`. `_fb` means feature branch, `cw-187` is the ticket number and `some-small-description` is, well, a small description about the ticket. This description makes it easier to find branches since you don't have to memoirize ticket numbers.
- The branch you should branch your branch of is the `master` branch. However, your branch will be merged to the `test` branch first before merging it to `master`.
- So, lets say you've finished your work on the ticket. When this is the case you should open a [pull request](https://help.github.com/en/articles/about-pull-requests) on Github. In this PR should be a link to the Jira ticket and also some comments about what you've changed and how to test it. As mentioned before, the PR should have the `test` branch as the target branch.
- When the PR is opened you should move the ticket to the `Review development` column on Jira. You should remove yourself as the assignee and place the following comment on the ticket: `Ready for review: *link to PR here*`.
- If someone then decides to review your work that person should assign the ticket to himself so everyone else knows that the ticket is under review already.
- When reviewing a ticket you should check out the branch locally and run the code. You should check if all functionality works as intended and you should also do a strict code review.
- In most cases you'll find some things which can be improved. In that case you should start a review (read about Github reviews [here](https://help.github.com/en/articles/about-pull-request-reviews#about-pull-request-reviews)) and you should do a `request for changes`.
- When your review is done and you did a request for changes you should move the ticket back to the `Development` column and reassign it to the developer who originally worked on it. You should also place a comment on the Jira ticket along the lines of: `Reviewed and did a request for change`.
- The developer who was working on the ticket should then check if he agrees with the requested changes and if so, actually do the changes. When you don't agree please start discussing it on Github and not in real life since this can't be tracked/read back by others.
- When all discussions are resolved the entire review procress starts over again.
- If the reviewer doesn't have any feedback anymore he should move the ticket to the `Test` column and add a comment along the lines of `Reviewed and approved.`.
- The lead developer on this project will then merge the PR to the `test` branch.
- More will follow..

# Interesting reads

Airbnb is famous for many things and one of those things are their extended code style guides. I would advice every developer who is working with JavaScript and/or React to read them. If you're going to work on this project please check them out since a lot of code in this project is following the patterns mentioned in these guides:

- [Airbnb JavaScript style guide](https://github.com/airbnb/javascript)
- [Airbnb React style guide](https://github.com/airbnb/javascript/tree/master/react)
