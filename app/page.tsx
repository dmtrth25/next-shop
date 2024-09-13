import { Container, Filters, HeaderBar, ProductsGroupList, Title } from '@/components/shared'

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="All products" size="lg" className="font-extrabold" />
      </Container>
      <HeaderBar />
      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          {/**Filtration */}
          <div className="w-[250px]">
            <Filters />
          </div>
          {/**List of products*/}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Pizzas"
                items={[
                  {
                    id: 1,
                    name: 'Cheese sauce',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EE7D614CBE0530B7234B6D7A6E5F8E.avif',
                    price: 600,
                    items: [{ price: 600 }],
                  },
                  {
                    id: 1,
                    name: 'Cheese sauce',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EE7D614CBE0530B7234B6D7A6E5F8E.avif',
                    price: 600,
                    items: [{ price: 600 }],
                  },
                  {
                    id: 1,
                    name: 'Cheese sauce',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EE7D614CBE0530B7234B6D7A6E5F8E.avif',
                    price: 600,
                    items: [{ price: 600 }],
                  },
                  {
                    id: 1,
                    name: 'Cheese sauce',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EE7D614CBE0530B7234B6D7A6E5F8E.avif',
                    price: 600,
                    items: [{ price: 600 }],
                  },
                  {
                    id: 1,
                    name: 'Cheese sauce',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EE7D614CBE0530B7234B6D7A6E5F8E.avif',
                    price: 600,
                    items: [{ price: 600 }],
                  },
                  {
                    id: 1,
                    name: 'Cheese sauce',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EE7D614CBE0530B7234B6D7A6E5F8E.avif',
                    price: 600,
                    items: [{ price: 600 }],
                  },
                  {
                    id: 1,
                    name: 'Cheese sauce',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EE7D614CBE0530B7234B6D7A6E5F8E.avif',
                    price: 600,
                    items: [{ price: 600 }],
                  },
                ]}
                categoryId={1}
              />
              <ProductsGroupList
                title="Snacks"
                items={[
                  {
                    id: 1,
                    name: 'Cheese sauce',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EE7D614CBE0530B7234B6D7A6E5F8E.avif',
                    price: 600,
                    items: [{ price: 600 }],
                  },
                  {
                    id: 1,
                    name: 'Cheese sauce',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EE7D614CBE0530B7234B6D7A6E5F8E.avif',
                    price: 600,
                    items: [{ price: 600 }],
                  },
                  {
                    id: 1,
                    name: 'Cheese sauce',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EE7D614CBE0530B7234B6D7A6E5F8E.avif',
                    price: 600,
                    items: [{ price: 600 }],
                  },
                  {
                    id: 1,
                    name: 'Cheese sauce',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EE7D614CBE0530B7234B6D7A6E5F8E.avif',
                    price: 600,
                    items: [{ price: 600 }],
                  },
                  {
                    id: 1,
                    name: 'Cheese sauce',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EE7D614CBE0530B7234B6D7A6E5F8E.avif',
                    price: 600,
                    items: [{ price: 600 }],
                  },
                  {
                    id: 1,
                    name: 'Cheese sauce',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EE7D614CBE0530B7234B6D7A6E5F8E.avif',
                    price: 600,
                    items: [{ price: 600 }],
                  },
                  {
                    id: 1,
                    name: 'Cheese sauce',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EE7D614CBE0530B7234B6D7A6E5F8E.avif',
                    price: 600,
                    items: [{ price: 600 }],
                  },
                ]}
                categoryId={1}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

