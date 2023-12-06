import React, { ReactNode } from 'react'

interface TagsProps {
  children: ReactNode
}

export function Tags({ children }: TagsProps) {
  return (
    <div className="bg-yellow-light mt-1 px-2 py-[2px] rounded-full">
      <span className="text-yellow-dark text-xs font-bold uppercase">
        {children}
      </span>
    </div>
  )
}
