import { PropsWithChildren } from 'react'
import { cn } from '@/lib/utils'

interface IContainerProps {
  className?: string
}

export const Container: FC<PropsWithChildren<IContainerProps>> = ({ className, children }) => {
  return <div className={cn('mx-auto max-w-[1280px]', className)}>{children}</div>
}

