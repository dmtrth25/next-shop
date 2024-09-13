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
                categoryId={1}
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
                    id: 2,
                    name: 'Cheese sauce',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EE7D614CBE0530B7234B6D7A6E5F8E.avif',
                    price: 600,
                    items: [{ price: 600 }],
                  },
                  {
                    id: 3,
                    name: 'Cheese sauce',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EE7D614CBE0530B7234B6D7A6E5F8E.avif',
                    price: 600,
                    items: [{ price: 600 }],
                  },
                  {
                    id: 4,
                    name: 'Cheese sauce',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EE7D614CBE0530B7234B6D7A6E5F8E.avif',
                    price: 600,
                    items: [{ price: 600 }],
                  },
                  {
                    id: 5,
                    name: 'Cheese sauce',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EE7D614CBE0530B7234B6D7A6E5F8E.avif',
                    price: 600,
                    items: [{ price: 600 }],
                  },
                  {
                    id: 6,
                    name: 'Cheese sauce',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EE7D614CBE0530B7234B6D7A6E5F8E.avif',
                    price: 600,
                    items: [{ price: 600 }],
                  },
                  {
                    id: 7,
                    name: 'Cheese sauce',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EE7D614CBE0530B7234B6D7A6E5F8E.avif',
                    price: 600,
                    items: [{ price: 600 }],
                  },
                ]}
              />
              <ProductsGroupList
                title="Snacks"
                categoryId={2}
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
                    id: 2,
                    name: 'Cheese sauce',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EE7D614CBE0530B7234B6D7A6E5F8E.avif',
                    price: 600,
                    items: [{ price: 600 }],
                  },
                  {
                    id: 3,
                    name: 'Cheese sauce',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EE7D614CBE0530B7234B6D7A6E5F8E.avif',
                    price: 600,
                    items: [{ price: 600 }],
                  },
                  {
                    id: 4,
                    name: 'Cheese sauce',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EE7D614CBE0530B7234B6D7A6E5F8E.avif',
                    price: 600,
                    items: [{ price: 600 }],
                  },
                  {
                    id: 5,
                    name: 'Cheese sauce',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EE7D614CBE0530B7234B6D7A6E5F8E.avif',
                    price: 600,
                    items: [{ price: 600 }],
                  },
                  {
                    id: 6,
                    name: 'Cheese sauce',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EE7D614CBE0530B7234B6D7A6E5F8E.avif',
                    price: 600,
                    items: [{ price: 600 }],
                  },
                  {
                    id: 7,
                    name: 'Cheese sauce',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EE7D614CBE0530B7234B6D7A6E5F8E.avif',
                    price: 600,
                    items: [{ price: 600 }],
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
