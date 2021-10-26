import NextLink from 'next/link'
import {
  Container,
  Box,
  Button,
  Heading,
  Image,
  useColorModeValue,
  Link
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/Layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          mb={3}
          mt={3}
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          align="center"
        >
          Hello . I&apos;m a front end developer based in India.
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variants="page-title">
              Lzi
            </Heading>
            <p>Reader (designer / developer / artist)</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              bordeColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/giphy1.gif"
              alt="profile image"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Stuffs about me and what im good with and things that i can work
            with. Stuffs about me and what im good with and things that i can
            work with. Stuffs about me and what im good with and things that i
            can work with. Stuffs about me and what im good with and things that
            i can work with. Know more about me{' '}
            <NextLink href="/works/inkdrop">
              <Link>lzi</Link>
            </NextLink>
            .
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My Portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1999</BioYear>
            Born in CG, IND.
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Completed the BTech in the Computer Science and Engineering at GEC
            Bilaspur
          </BioSection>
          <BioSection>
            <BioYear>2021 to present</BioYear>
            Works as a freelancer
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I 🤍
          </Heading>
          <Paragraph>Art, Manga, Light Novels, Anime, Web Series</Paragraph>
        </Section>
      </Container>
    </Layout>
  )
}
export default Page
