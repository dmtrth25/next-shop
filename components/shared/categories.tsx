import { cn } from '@/lib/utils'
import { activeIndex, categories } from '@/components/constants'

interface ICategoriesProps {
  className?: string
}

export const Categories: FC<ICategoriesProps> = ({ className }) => {
  return (
    <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
      {categories.map((item, i) => (
        <a
          key={item}
          className={cn(
            'flex items-center font-bold h-11 rounded-2xl px-5',
            activeIndex === i && 'bg-white shadow-md shadow-gray-200 text-primary',
          )}>
          <button>{item}</button>
        </a>
      ))}
    </div>
  )
}
