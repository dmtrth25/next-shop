import { Container, Filters, HeaderBar, Title } from '@/components/shared'
import { ProductCard } from '@/components/shared/product-card'

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="All products" size="lg" className="font-extrabold" />
      </Container>
      <HeaderBar />
      <Container className="mt-10 pb-14">
        <div className="flex gap-[60px]">
          {/**Filtration */}
          <div className="w-[250px]">
            <Filters />
          </div>
          {/**List of products*/}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductCard
                id={0}
                name={'Cheese'}
                price={445}
                imageUrl={
                  'https://media.dodostatic.net/image/r:584x584/11EE7D610D2925109AB2E1C92CC5383C.avif'
                }
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

