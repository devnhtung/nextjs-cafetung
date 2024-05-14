import Image from "next/image"

interface DessertCardProps {
  id: string
  imgUrl: string
}

const DessertCard = ({ id, imgUrl }: DessertCardProps) => {
  return (
    <div className="relative h-[320px]">
      <Image src={imgUrl} alt={id} fill className="object-cover rounded-xl" />
    </div>
  )
}

export default DessertCard