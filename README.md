# chakra-ui-clone

> Chakra UI Elements cloned using styled-components and styled-system.

### Introduction

- Chakra UI Components are really awesome the styling and the various options for customizations really fit the needs for most React Applications.
- I always visit https://chakra-ui.com/docs/getting-started to get inspiration (prop options, styling, functionality) for the Components I build on my daily job. Also I do visit other UI Libraries (websites) like react-rainbow-components, welcome-ui, etc.
- Although to be really very honest I never used these libraries in a project just tried some basic examples.
- I started this just to clone the base Layout Components like `Box, Flex, Stack` but as I read more code and became familiar with the codebase I added other components and will continue to add more.
- Reading through the github code I really wanted to build these components myself and see how these work internally like the awesome `Grid` & `SimpleGrid` components.
- In this project I have cloned many `Chakra UI Components`. I took a lot of inspiration from the Chakra CodeBase (https://github.com/chakra-ui/chakra-ui/tree/main/packages), also the very well written comments :)
- **This project uses styled-components, styled-system and is written in TypeScript and is bootstraped using create-react-library**.

### My Learnings

- `Using TypeScript beyond the Component Props`, previously working with TypeScript I only used it for typing components, reducers (I used easy-peasy for state-management), here I learned a lot about generic types.
- `Using Styled System & Styled Components with TypeScript`, written all the styled using css in js and styled system helper props.
- The folder structure is organized keeping in mind the `atomic design methodology`.
- `Learned some neat css tricks`, like the `Stack` component and the `minWidth` prop for the `SimpleGrid` component (which uses min-max()).
- `Read a lot of resources` while building the components like - while building the buttons I read this awesome guide from Stephanie Eckles - (https://moderncss.dev/css-button-styling-guide/).
- Learned a lot from the Chakra codebase the `utils` folder is a great example, the `hooks` folder, the `Image` component like handling `onLoad, onError, fallbacks, etc`.

### Improvements

- Adding meaningful comments, again the Chakra codebase is a great resource.
- Moving the stories from `.tsx` to `.mdx`.
- Adding some basic tests.

### Usage

- Clone the project.
- Run `npm install`.
- Run `npm run storybook`.
- To build the project run `npm run build`.
- After building the project you can try it under the example directory, it is a react app that imports our components locally as a npm package.

### Caveats

- There are some shortcomings using Typescript and styled-system.
- Also the are some type issues using the as polymorphic prop.
- I am considering to switch to `stitches` (https://stitches.dev/) for using css-in-js, it has great Typescript support. (I do have a POC where I cloned some welcome-ui components using stitches will share it :) .

### License

MIT © [github.com/yaldram](https://github.com/github.com/yaldram)
