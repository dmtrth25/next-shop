import { FC } from 'react'
import Image from 'next/image'
import { Container } from '@/components/shared/container'
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
        <div className="flex items-center gap-4">
          <Image src="/logo.png" alt="logo" width={35} height={35} />
          <div>
            <h1 className="text-2xl uppercase font-black">Next Shop</h1>
            <p className="text-sm text-gray-400 leading-3">The best shop</p>
          </div>
        </div>

        {/*Right side*/}
        <div className="flex items-center gap-3">
          <Button variant="outline">Login</Button>
        </div>
      </Container>
    </header>
  )
}
