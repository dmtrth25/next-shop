'use client'

import { cn } from '@/lib/utils'
import { categories } from '@/components/constants'
import { useCategoryStore } from '@/store/category'

interface ICategoriesProps {
  className?: string
}

export const Categories: FC<ICategoriesProps> = ({ className }) => {
  const { categoryActiveId } = useCategoryStore(state => ({
    categoryActiveId: state.activeId,
  }))
  return (
    <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
      {categories.map(({ name, id }, i) => (
        <a
          key={i}
          href={`/#${name}`}
          className={cn(
            'flex items-center font-bold h-11 rounded-2xl px-5',
            categoryActiveId === id && 'bg-white shadow-md shadow-gray-200 text-primary',
          )}>
          <button>{name}</button>
        </a>
      ))}
    </div>
  )
}
