import { Container, Box, Heading } from '@chakra-ui/react'
const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} align="center">
        Hello . I&apos;m a front end developer based in India.
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variants="page-title">
            Lzi
          </Heading>
          <p>Reader (designer / developer / artist)</p>
        </Box>
      </Box>
    </Container>
  )
}
export default Page