import { cn } from '@/app/lib/utils'
import React from 'react'

const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input {...props} className={cn(`w-full p-3 bg-background-secondary text-white placeholder:text-content-body rounded-xl border border-transparent`, props.className)}/>
  )
}

export default Input