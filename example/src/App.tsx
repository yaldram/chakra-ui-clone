import * as React from 'react'
import {
  Stack,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
  Box
} from 'chakra-ui-clone'

export function App() {
  return (
    <Stack m='2rem' direction='column' spacing='lg'>
      <Stack direction='column' spacing='lg'>
        <Alert>
          <AlertIcon />
          There was an error processing your request
        </Alert>

        <Alert status='error'>
          <AlertIcon />
          <AlertTitle marginRight='md'>Your browser is outdated!</AlertTitle>
          <AlertDescription>
            Your Chakra experience may be degraded.
          </AlertDescription>
          <CloseButton position='absolute' right='8px' top='15px' />
        </Alert>

        <Alert status='success'>
          <AlertIcon />
          Data uploaded to the server. Fire on!
        </Alert>

        <Alert status='warning'>
          <AlertIcon />
          Seems your account is about expire, upgrade now
        </Alert>

        <Alert status='info'>
          <AlertIcon />
          Chakra is going live on August 30th. Get ready!
        </Alert>
      </Stack>
      <Stack direction='column' spacing='lg'>
        <Alert status='success' variant='subtle'>
          <AlertIcon />
          Data uploaded to the server. Fire on!
        </Alert>

        <Alert status='success' variant='solid'>
          <AlertIcon />
          Data uploaded to the server. Fire on!
        </Alert>

        <Alert status='success' variant='left-accent'>
          <AlertIcon />
          Data uploaded to the server. Fire on!
        </Alert>

        <Alert status='success' variant='top-accent'>
          <AlertIcon />
          Data uploaded to the server. Fire on!
        </Alert>
      </Stack>
      <Stack>
        <Alert
          status='success'
          variant='subtle'
          textAlign='center'
          height='200px'
          direction='column'
          justify='center'
        >
          <AlertIcon size='40px' />
          <AlertTitle margin='md' fontSize='lg'>
            Application submitted!
          </AlertTitle>
          <AlertDescription>
            Thanks for submitting your application. Our team will get back to
            you soon.
          </AlertDescription>
        </Alert>
      </Stack>
      <Stack>
        <Alert status='success'>
          <AlertIcon />
          <Box flex='1'>
            <AlertTitle>Success!</AlertTitle>
            <AlertDescription display='block'>
              Your application has been received. We will review your
              application and respond within the next 48 hours.
            </AlertDescription>
          </Box>
          <CloseButton position='absolute' right='8px' top='8px' />
        </Alert>
      </Stack>
    </Stack>
  )
}
