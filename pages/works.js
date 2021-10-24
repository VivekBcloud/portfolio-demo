import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbSocialApp from '../public/images/works/work-1.jpg'

const Works = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="social=app"
            title="social-app"
            thumbnail={thumbSocialApp}
          >
            A brief desciption about your recent work.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="social=app"
            title="social-app"
            thumbnail={thumbSocialApp}
          >
            A brief desciption about your recent work.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Works
