interface IProductPage {
  params: {
    id: string
  }
}

export default function ProductPage({ params: { id } }: IProductPage) {
  return <p>Product {id}</p>
}
