import { addons } from '@storybook/addons'

import { create } from '@storybook/theming'

const basicTheme = create({
  base: 'light',
  brandTitle: 'Chakra UI Clone'
})

addons.setConfig({
  theme: basicTheme
})
