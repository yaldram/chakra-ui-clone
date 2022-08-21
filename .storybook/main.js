module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    /**
     * addon-interactions are used for 
     * interactive stories. Must be listed after
     * addon-actions & addon-essentials
     */
    '@storybook/addon-interactions'
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite'
  },
  features: {
    /**
     * Configures Storybook to load stories on demand, 
     * rather than during boot up.
     */
    storyStoreV7: true
  }
}
