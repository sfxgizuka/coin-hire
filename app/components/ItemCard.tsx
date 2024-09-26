interface Props {
    title: string,
    description: string
}
export default function ItemCard({title, description}: Props) {
  return (
    <div className='flex flex-col gap-2 text-white'>
        <hr className="w-[129px]"/>
        <h1 className=" font-black text-lg">{title} </h1>
        <p className="font-black"> {description}</p>

    </div>
  )
}


 