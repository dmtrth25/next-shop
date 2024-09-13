'use client'

import { useEffect, useRef } from 'react'
import { useIntersection } from 'react-use'
import { cn } from '@/lib/utils'
import { Title, ProductCard } from './'
import { useCategoryStore } from '@/store/category'

interface IProductListProps {
  title: string
  items: any[]
  categoryId: number
  listClassName?: string
  className?: string
}

export const ProductsGroupList: FC<IProductListProps> = ({
  title,
  items,
  categoryId,
  listClassName,
  className,
}) => {
  const { setActiveId } = useCategoryStore(state => ({
    setActiveId: state.setActiveId,
  }))
  const intersectionRef = useRef(null)
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  })

  useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveId(categoryId)
    }
  }, [categoryId, intersection?.isIntersecting, setActiveId, title])

  return (
    <div className={className} id={title} ref={intersectionRef}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />
      <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
        {items.map((product, i) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            imageUrl={product.imageUrl}
            price={product.items[0].price}
          />
        ))}
      </div>
    </div>
  )
}
