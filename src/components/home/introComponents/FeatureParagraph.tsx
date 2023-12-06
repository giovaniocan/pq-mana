interface Props {
  text: string
  icon?: any
  bgColor: string
}

export function FeatureParagraph({ text, icon: Icon, bgColor }: Props) {
  return (
    <div className={`flex gap-3 items-center mb-4 md:mb-0`}>
      <div
        className={`${bgColor} rounded-full justify-center items-center p-[6px]`}
      >
        <Icon size={20} weight="fill" color="#fff" />
      </div>
      <p className="text-sm lg:text-base text-base-text">{text}</p>
    </div>
  )
}
