import { Box, Container } from '@chakra-ui/react'
import Head from 'next/head'
import NoSsr from '../no-ssr'
import Navbar from '../navbar'
import VoxelTraingle from '../voxel-triangle'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>lzi - Homepage</title>
      </Head>
      <Navbar path={router.asPath} />
      <Container maxW="container.md" pt={14}>
        <NoSsr>
          <VoxelTraingle />
        </NoSsr>
        {children}
      </Container>
    </Box>
  )
}
export default Main
