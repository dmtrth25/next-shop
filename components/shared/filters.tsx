import { FilterCheckbox, Title } from './'

interface IFiltersProps {
  className?: string
}

export const Filters: FC<IFiltersProps> = ({ className }) => {
  return (
    <div className={className}>
      <Title text="Filter" size="sm" className="mb-5 font-bold" />

      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Can get" value="1" />
        <FilterCheckbox text="Newest" value="2" />
      </div>
    </div>
  )
}
