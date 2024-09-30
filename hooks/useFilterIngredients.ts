import { Api } from '@/services/api-client'
import { Ingredient } from '@prisma/client'
import { useEffect, useState } from 'react'

interface ReturnProps {
  ingredients: Ingredient[]
  isLoading: boolean
}

export const useFilterIngredients = (): ReturnProps => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    async function fetchIngredients() {
      try {
        setIsLoading(true)
        const ingredients = await Api.ingredients.getAll()
        setIngredients(ingredients)
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchIngredients()
  }, [])

  return { ingredients, isLoading }
}
