import Link from 'next/link'
import { Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Title } from './'

interface IProductCardProps {
  id: number
  name: string
  price: number
  imageUrl: string
  className?: string
}

export const ProductCard: FC<IProductCardProps> = ({ id, name, price, imageUrl, className }) => {
  return (
    <div className={className}>
      <Link href={`/product/${id}`}>
        <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
          <img className="w-[215px] h-[215px]" src={imageUrl} alt={name} />
        </div>
        <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />
        <p className="text-sm text-gray-400">
          Chicken, mozzarella, cheddar and parmesan cheeses, cheese sauce, tomatoes, Alfredo sauce,
          garlic
        </p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-[20px]">
            from <b>{price} UAH</b>
          </span>

          <Button variant="secondary">
            <Plus size={20} className="mr-1" />
            Add
          </Button>
        </div>
      </Link>
    </div>
  )
}
