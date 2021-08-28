import * as React from 'react'
import {
  useToast,
  Box,
  Wrap,
  WrapItem,
  Button,
  AlertStatus,
  AlertVariants,
  ToastPosition
} from 'chakra-ui-clone'

const statuses: AlertStatus[] = ['success', 'error', 'warning', 'info']
const variants: AlertVariants[] = [
  'solid',
  'subtle',
  'left-accent',
  'top-accent'
]
const positions: ToastPosition[] = [
  'top',
  'top-right',
  'top-left',
  'bottom',
  'bottom-right',
  'bottom-left'
]

export function App() {
  const toast = useToast()

  return (
    <Box m='1rem'>
      <Wrap>
        <Button
          onClick={() =>
            toast({
              position: 'bottom-left',
              render: () => (
                <Box color='white' p='0.8rem' bg='blue500'>
                  Hello World
                </Box>
              )
            })
          }
        >
          Show Toast
        </Button>
      </Wrap>
      <Wrap>
        {statuses.map((status) => (
          <WrapItem key={status}>
            <Button
              onClick={() =>
                toast({
                  title: `${status} toast`,
                  status,
                  isClosable: true
                })
              }
            >
              Show {status} toast
            </Button>
          </WrapItem>
        ))}
      </Wrap>
      <Wrap>
        {variants.map((variant) => (
          <WrapItem key={variant}>
            <Button
              onClick={() =>
                toast({
                  title: `${variant} toast`,
                  variant,
                  isClosable: true
                })
              }
            >
              Show {variant} toast
            </Button>
          </WrapItem>
        ))}
      </Wrap>
      <Wrap>
        {positions.map((position) => (
          <WrapItem key={position}>
            <Button
              onClick={() =>
                toast({
                  title: `${position} toast`,
                  position,
                  isClosable: true
                })
              }
            >
              Show {position} toast
            </Button>
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  )
}
