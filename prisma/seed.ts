import { hashSync } from 'bcrypt'
import { prisma } from './prisma-client'
import { categories, ingredients, products } from './constants'
import { Prisma } from '@prisma/client'

const randomDecimalNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10
}

const generateProductItem = (productId: number, productType?: number, size?: number) => {
  return {
    productId,
    price: randomDecimalNumber(190, 600),
    productType,
    size,
  } as Prisma.ProductItemUncheckedCreateInput
}

async function up() {
  await prisma.user.createMany({
    data: [
      {
        fullName: 'Dmytro User',
        email: 'test@gmail.com',
        password: hashSync('111111', 10),
        verified: new Date(),
        role: 'USER',
      },
      {
        fullName: 'Admin',
        email: 'admin@gmail.com',
        password: hashSync('111111', 10),
        verified: new Date(),
        role: 'ADMIN',
      },
    ],
  })

  await prisma.category.createMany({
    data: categories,
  })

  await prisma.ingredient.createMany({
    data: ingredients,
  })

  await prisma.product.createMany({
    data: products,
  })

  const pizza1 = await prisma.product.create({
    data: {
      name: 'Pepperoni Fresh',
      imageUrl:
        'https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp',
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(0, 5),
      },
    },
  })

  const pizza2 = await prisma.product.create({
    data: {
      name: 'Cheese',
      imageUrl:
        'https://media.dodostatic.net/image/r:233x233/11EE7D610CF7E265B7C72BE5AE757CA7.webp',
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(5, 10),
      },
    },
  })

  const pizza3 = await prisma.product.create({
    data: {
      name: 'Chorizo ​​fresh',
      imageUrl:
        'https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.webp',
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(10, 40),
      },
    },
  })

  await prisma.productItem.createMany({
    data: [
      generateProductItem(pizza1.id, 1, 20),
      generateProductItem(pizza1.id, 2, 30),
      generateProductItem(pizza1.id, 2, 40),

      generateProductItem(pizza2.id, 1, 20),
      generateProductItem(pizza2.id, 1, 30),
      generateProductItem(pizza2.id, 1, 40),
      generateProductItem(pizza2.id, 2, 20),
      generateProductItem(pizza2.id, 2, 30),
      generateProductItem(pizza2.id, 2, 40),

      generateProductItem(pizza3.id, 1, 20),
      generateProductItem(pizza3.id, 2, 30),
      generateProductItem(pizza3.id, 2, 40),

      // Other diff products
      generateProductItem(1),
      generateProductItem(2),
      generateProductItem(3),
      generateProductItem(4),
      generateProductItem(5),
      generateProductItem(6),
      generateProductItem(7),
      generateProductItem(8),
      generateProductItem(9),
      generateProductItem(10),
      generateProductItem(11),
      generateProductItem(12),
      generateProductItem(13),
      generateProductItem(14),
      generateProductItem(15),
      generateProductItem(16),
      generateProductItem(17),
    ],
  })
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`
  await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE`
  await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE`
}

async function main() {
  try {
    await down()
    await up()
  } catch (err) {
    console.error(err)
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async e => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
