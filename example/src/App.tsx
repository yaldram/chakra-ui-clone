import * as React from 'react'
import { Stack, Icon, CheckIcon, createIcon, IconProps } from 'chakra-ui-clone'
import { MdSettings, MdGroupWork } from 'react-icons/md'

const BellIcon = createIcon({
  d: 'M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z'
})

const TimeIcon = (props: IconProps) => (
  <Icon {...props}>
    <g fill='currentColor'>
      <path d='M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z' />
      <path d='M17.134,15.81,12.5,11.561V6.5a1,1,0,0,0-2,0V12a1,1,0,0,0,.324.738l4.959,4.545a1.01,1.01,0,0,0,1.413-.061A1,1,0,0,0,17.134,15.81Z' />
    </g>
  </Icon>
)

export function App() {
  return (
    <Stack m='2rem' spacing='xl'>
      <Icon as={MdSettings} />
      <Icon as={MdGroupWork} w='40px' h='40px' color='red500' />
      <CheckIcon />
      <CheckIcon color='green500' size='35px' />
      <BellIcon />
      <BellIcon size='50px' color='red500' />
      <TimeIcon size='30px' color='blue500' />
      <Icon />
    </Stack>
  )
}
