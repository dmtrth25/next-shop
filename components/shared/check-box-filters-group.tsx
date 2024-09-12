'use client'

import { useState, ChangeEvent } from 'react'
import { Input } from '../ui'
import { FilterCheckbox, IFilterChecboxProps } from './filter-checkbox'

interface ICheckBoxFiltersProps {
  title: string
  items: IFilterChecboxProps[]
  defaultItems: IFilterChecboxProps[]
  limit?: number
  searchInputPlaceholder?: string
  className?: string
  onChange?: (values: string[]) => void
  defaultValue?: string[]
}

export const CheckboxFiltersGroup: FC<ICheckBoxFiltersProps> = ({
  title,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = 'Search...',
  className,
  onChange,
  defaultValue,
}) => {
  const [showAll, setShowAll] = useState(false)
  const [searchValue, setSearchValue] = useState('')

  const onChangeInputSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  const list = showAll
    ? items.filter(item => item.text.toLowerCase().includes(searchValue.toLowerCase()))
    : defaultItems.slice(0, limit)
  return (
    <div className={className}>
      <p className="font-bold mb-3">{title}</p>

      {showAll && (
        <div className="mb-5">
          <Input
            onChange={onChangeInputSearch}
            placeholder={searchInputPlaceholder}
            className="bg-gray-50 border-none"
          />
        </div>
      )}

      <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
        {list.map(item => (
          <FilterCheckbox
            onCheckedChange={id => console.log(id)}
            checked={false}
            key={String(item.value)}
            value={item.value}
            text={item.text}
            endAdornment={item.endAdornment}
          />
        ))}
      </div>

      {items.length > limit && (
        <div className={showAll ? 'border-t border-t-neutral-100 mt-4' : ''}>
          <button onClick={() => setShowAll(!showAll)} className="text-primary mt-3">
            {showAll ? 'Hide' : '+ Show all'}
          </button>
        </div>
      )}
    </div>
  )
}
