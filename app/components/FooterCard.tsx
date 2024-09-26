
interface Props {
    logo: React.ReactElement,
    title: string,
    description: string,
    cat?: React.ReactElement
}
export default function FooterCard({logo, title, description, cat}: Props) {
  return (
    <div className="flex flex-col gap-3">
        <div className="">{logo} </div>
        <div className="">{title} </div>
        <div className="mt-5 flex gap-1">
            {description} 
            <button > {cat}</button>
        </div>
    </div>
  )
}
