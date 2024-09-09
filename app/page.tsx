import { Container, HeaderBar, Title } from '@/components/shared'

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="All products" size="lg" className="font-extrabold" />
      </Container>
      <HeaderBar />
      <div style={{ height: '3000px' }}></div> {/* left for testing scroll*/}
    </>
  )
}

