import React from 'react'
import { Loader, Loader2 } from 'lucide-react'
import { cn } from '../utils'

interface LoadingProps {
  type?: 'circle' | 'spin'
  className?: string
}

export const Loading = ({ type, className }: LoadingProps) => {
  return (
    type === 'spin' ? <Loader className={cn('animate-spin mx-auto', className)} /> : <Loader2 className={cn('animate-spin mx-auto', className)} />
  )
}
