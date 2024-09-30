'use client'

import { useFilterIngredients } from '@/hooks/useFilterIngredients'
import { Input } from '../ui'
import { FilterCheckbox, Title, RangeSlider, CheckboxFiltersGroup } from './'

interface IFiltersProps {
  className?: string
}

export const Filters: FC<IFiltersProps> = ({ className }) => {
  const { ingredients, isLoading } = useFilterIngredients()

  const items = ingredients.map(item => ({ value: String(item.id), text: item.name }))
  return (
    <div className={className}>
      <Title text="Filter" size="sm" className="mb-5 font-bold" />

      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Can get" value="1" />
        <FilterCheckbox text="Newest" value="2" />
      </div>

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Price (from - to):</p>
        <div className="flex gap-3 mb-5">
          <Input type="number" placeholder="0" min={0} max={1000} defaultValue={0} />
          <Input type="number" min={100} max={1000} placeholder="1000" />
        </div>
        <RangeSlider min={0} max={5000} step={10} value={[0, 5000]} />
      </div>

      <CheckboxFiltersGroup
        title="Ingredients"
        className="mt=5"
        limit={6}
        defaultItems={items.slice(0, 6)}
        items={items}
        loading={isLoading}
      />
    </div>
  )
}
