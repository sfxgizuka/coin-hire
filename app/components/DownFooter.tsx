interface Props {
title: string,
subtitle: string,
description: string
}
export default function DownFooter({title, subtitle, description}: Props) {
  return (
    <div className="flex flex-col gap-2.5 w-full">
    <h1 className="text-sm font-black text-[#343741]"> {title} </h1>
    <p className="text-[#5E626F] text-[13px] font-black">{subtitle} </p>
    <p className="text-[#5E626F] text-[13px] font-black"> {description} </p>
</div>
  )
}
