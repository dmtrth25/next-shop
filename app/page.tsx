import { Container, Filters, HeaderBar, Title } from '@/components/shared'

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="All products" size="lg" className="font-extrabold" />
      </Container>
      <HeaderBar />
      <Container className="pb-14">
        <div className="flex gap-[60px]">
          {/**Filtration */}
          <div className="w-[250px]">
            <Filters />
          </div>
          {/**List of products*/}
          <div className="flex-1">
            <div className="flex flex-col gap-16">List of products </div>
          </div>
        </div>
      </Container>
    </>
  )
}

