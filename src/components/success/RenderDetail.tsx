import React from 'react'

interface Props {
  title: string
  subtitle: string
  Icon: any
  bgColor: string
}

export function RenderDetail({ Icon, title, bgColor, subtitle }: Props) {
  return (
    <div className="flex gap-4 items-center">
      <div
        className={`bg-${bgColor} rounded-full justify-center items-center p-[6px]`}
      >
        <Icon size={20} weight="fill" color="#fff" />
      </div>
      <div className="flex flex-col">
        <span className="text-base-text font-bold text-base">{title}</span>
        <span className="text-base-text font-normal text-base">{subtitle}</span>
      </div>
    </div>
  )
}
