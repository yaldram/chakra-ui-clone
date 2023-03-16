module.exports = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  features: {
    /**
     * Configures Storybook to load stories on demand, 
     * rather than during boot up.
     */
    storyStoreV7: true,
    /**
     * Configures Storybook to load the interactions 
     * debugger for component interaction testing
     */
    interactionsDebugger: true
  },
  docs: {
    autodocs: true
  }
};