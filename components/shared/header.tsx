import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ShoppingCart, UserRound } from 'lucide-react'
import { Container, SearchInput } from '@/components/shared'
import { Button } from '@/components/ui'

import { cn } from '@/lib/utils'

interface IHeaderProps {
  className?: string
}

export const Header: FC<IHeaderProps> = ({ className }) => {
  return (
    <header className={cn('border border-b', className)}>
      <Container className="flex items-center justify-between py-8">
        {/*Left side*/}
        <Link href="/">
          <div className="flex items-center gap-4">
            <Image src="/logo.png" alt="logo" width={35} height={35} />
            <div>
              <h1 className="text-2xl uppercase font-black">Next Shop</h1>
              <p className="text-sm text-gray-400 leading-3">The best shop</p>
            </div>
          </div>
        </Link>

        <div className="mx-10 flex-1">
          <SearchInput />
        </div>

        {/*Right side*/}
        <div className="flex items-center gap-3">
          <Button variant="outline" className="flex items-center gap-1">
            <UserRound size={16} />
            Login
          </Button>
          <div>
            <Button className="group relative">
              <b>600 $</b>
              <span className="h-full w-[1px] bg-white/30 mx-3" />
              <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                <ShoppingCart size={16} className="relative" strokeWidth={2} />
                <b>20</b>
              </div>
              <ArrowRight
                size={20}
                className="absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
              />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  )
}
