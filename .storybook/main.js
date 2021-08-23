module.exports = {
  features: {
    previewCsfV3: true
  },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    'storybook-readme/register',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-knobs',
    '@storybook/addon-a11y'
  ],
  typescript: {
    reactDocgen: 'react-docgen-typescript'
  }
}
