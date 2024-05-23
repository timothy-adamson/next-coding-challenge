# Tim Adamson Response - Michael's NextJS Coding Challenge

## About

Thank you for inviting me to tackle this coding challenge and for your time in reviewing my work. I spent ~8 hours on the task which is hopefully a reasonable amount of time to dedicate. There are still plenty of areas for improvement which I've detailed further below. I've intentionally aimed to create a production-ready app despite the simple functionality of the app to give an example of what my work might look like in that environment.

I hoped to demonstrate some key proficiencies with my response:

- Strong React, JS/TS fundamentals
- Understanding of Next.js including App router and composition between Server and Client components
- Working with potentially large data structures and efficient operations, more detail below
- Interaction focused testing and confidence with Jest and RTL
- Scalable project structure focused on features and colocation

### Notes on implementation

Here is some additional information about key decisions I made while working on this task:

- **Data model for client-side state** - I chose to store the dynamic basket state as an object with a map structure rather than an array. This allows for efficient read/update operations to the data by using an ID and avoids repetitive and costly array loops. While array methods are fast and convenient for small amounts of data, for large scale data like an infinitely scrolling list of products they will begin to cause major performance issues. I also renamed variables to give importance to the `productId` as the primary key for identifying a particular item.

- **Retrieving product descriptions from API** - In a production environment it's likely that product data will be served from one or more external services. I implemented a "dummy" version of this to retrieve the product data in order to demonstrate using server components for data fetching in Next.js.

- **Project structure** - I used a feature based folder structure for the project and also separated feature modules from the `app` directory. This keeps routing concerns and component implementations separate and establishes a pattern which can be followed for adding new features and routes.

- **Testing** - I implemented a feature level integration test to cover key functionality of the shopping basket and ensure that user interactions are protected from regression.

- **Styling & Design** - I aimed to preserve the existing UI while addressing any obvious visual issues and preserving responsiveness. I did not focus on creating a more exciting or appealling UI/UX experience for this task.

### Known issues & Areas for improvement

- While the tests are passing I was receiving the `act(...)` warning when running them. I am familiar with this issue as indicating that a state update occurred in a component which was not effectively awaited and asserted on. However I was not able to find the source of the issue and I was confident that my test covered all updates that could be surfaced to the user. Given more time I would continue to look at the implementation of my components and state management to identify the underlying issue.

Areas for improvement

- Provide more unit-level test coverage for each component, utility and for the BasketContext.
- Implement Playwright and orchestrate an integration test for the core functionality.
- Extend the functionality with a Checkout dialog and mock form submission for making a purchase.
- Run an accessibility check using a tool like `axe`.
- Implement git hooks with Husky to run tests before pushing to remote.

---

# Original Instructions:

## The Challenge:

Some newb has made a mess of this code. There are TODOs that need finishing off, broken and questionable tests and the code itself is inefficient.  
Please fix up whatever mess you find to get this piece of work working well.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Getting Started

First, `npm install`, then run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Run the testing and linting with `npm run test` and `npm run lint`.
