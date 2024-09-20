export const categories = [
  {
    name: 'Pizzas',
  },
  {
    name: 'Breakfast',
  },
  {
    name: 'Snacks',
  },
  {
    name: 'Cocktails',
  },
  {
    name: 'Drinks',
  },
]

export const ingredients = [
  {
    name: 'Cheese-Stuffed Crust',
    price: 179,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/99f5cb91225b4875bd06a26d2e842106.png',
  },
  {
    name: 'Creamy Mozzarella',
    price: 79,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/cdea869ef287426386ed634e6099a5ba.png',
  },
  {
    name: 'Cheddar and Parmesan Cheeses',
    price: 79,
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA69C1FE796',
  },
  {
    name: 'Spicy Jalapeño Peppers',
    price: 59,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/11ee95b6bfdf98fb88a113db92d7b3df.png',
  },
  {
    name: 'Tender Chicken',
    price: 79,
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA5B328D35A',
  },
  {
    name: 'Mushrooms',
    price: 59,
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA67259A324',
  },
  {
    name: 'Bacon',
    price: 79,
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA637AAB68F',
  },
  {
    name: 'Ham',
    price: 79,
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA61B9A8D61',
  },
  {
    name: 'Spicy Pepperoni',
    price: 79,
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA6258199C3',
  },
  {
    name: 'Spicy Chorizo',
    price: 79,
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA62D5D6027',
  },
  {
    name: 'Pickled Cucumbers',
    price: 59,
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9EA89958D782B',
  },
  {
    name: 'Fresh Tomatoes',
    price: 59,
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA7AC1A1D67',
  },
  {
    name: 'Red Onion',
    price: 59,
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA60AE6464C',
  },
  {
    name: 'Juicy Pineapple',
    price: 59,
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9AFA6795BA2A0',
  },
  {
    name: 'Italian Herbs',
    price: 39,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/370dac9ed21e4bffaf9bc2618d258734.png',
  },
  {
    name: 'Sweet Peppers',
    price: 59,
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA63F774C1B',
  },
  {
    name: 'Feta Cheese Cubes',
    price: 79,
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA6B0FFC349',
  },
  {
    name: 'Meatballs',
    price: 79,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/b2f3a5d5afe44516a93cfc0d2ee60088.png',
  },
].map((obj, index) => ({ id: index + 1, ...obj }))

export const products = [
  {
    name: 'Omelet with Ham and Mushrooms',
    imageUrl: 'https://media.dodostatic.net/image/r:760x760/11EE7970321044479C1D1085457A36EB.avif',
    categoryId: 2,
  },
  {
    name: 'Omelet with Bacon',
    imageUrl: 'https://media.dodostatic.net/image/r:760x760/11EE7970326512C89366583FF997CA9E.avif',
    categoryId: 2,
  },
  {
    name: 'Coffee Latte',
    imageUrl: 'https://media.dodostatic.net/image/r:760x760/11EE7D61B0C26A3F85D97A78FEEE00AD.avif',
    categoryId: 2,
  },
  {
    name: 'Ham and Cheese Sandwich',
    imageUrl: 'https://media.dodostatic.net/image/r:760x760/11EE796FF0059B799A17F57A9E64C725.avif',
    categoryId: 3,
  },
  {
    name: 'Chicken Nuggets',
    imageUrl: 'https://media.dodostatic.net/image/r:760x760/11EEF45EACC4D7EABC10E0A0E0C2C67A.avif',
    categoryId: 3,
  },
  {
    name: 'Baked Potatoes with Sauce 🌱👶',
    imageUrl: 'https://media.dodostatic.net/image/r:760x760/11EED646A874549F90802E75F4D358ED.avif',
    categoryId: 3,
  },
  {
    name: 'Dodster',
    imageUrl: 'https://media.dodostatic.net/image/r:760x760/11EE796F96D11392A2F6DD73599921B9.avif',
    categoryId: 3,
  },
  {
    name: 'Spicy Dodster 🌶🌶',
    imageUrl: 'https://media.dodostatic.net/image/r:760x760/11EE796FD3B594068F7A752DF8161D04.avif',
    categoryId: 3,
  },
  {
    name: 'Strawberry Milkshake',
    imageUrl: 'https://media.dodostatic.net/image/r:760x760/11EE796FB231A5BF82B0A99A1B12339C.avif',
    categoryId: 4,
  },
  {
    name: 'Chocolate Milkshake',
    imageUrl: 'https://media.dodostatic.net/image/r:760x760/11EE796FA24D1E919FA050D8BA21F8E9.avif',
    categoryId: 4,
  },
  {
    name: 'Oreo Milkshake',
    imageUrl: 'https://media.dodostatic.net/image/r:760x760/11EE796FA1F50F8F8111A399E4C1A1E3.avif',
    categoryId: 4,
  },
  {
    name: 'Classic Milkshake',
    imageUrl: 'https://media.dodostatic.net/image/r:760x760/11EE796F93FB126693F96CB1D3E403FB.avif',
    categoryId: 4,
  },
  {
    name: 'Iced Cappuccino',
    imageUrl: 'https://media.dodostatic.net/image/r:760x760/11EEFB6985E52B9FA2C985EBC42C7E64.avif',
    categoryId: 5,
  },
  {
    name: 'Coconut Latte',
    imageUrl: 'https://media.dodostatic.net/image/r:760x760/11EE7D61B19FA07090EE88B0ED347F42.avif',
    categoryId: 5,
  },
  {
    name: 'Americano Coffee',
    imageUrl: 'https://media.dodostatic.net/image/r:760x760/11EE7D61B044583596548A59078BBD33.avif',
    categoryId: 5,
  },
  {
    name: 'Coffee Latte',
    imageUrl: 'https://media.dodostatic.net/image/r:760x760/11EE7D61B0C26A3F85D97A78FEEE00AD.avif',
    categoryId: 5,
  },
]
