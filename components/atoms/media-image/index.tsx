import Image from "next/image";

interface Props{
  src: string,
}

const MediaImage = ({src}: Props) => {
  return (
    <div className="p-8">
      <Image
        src={src}
        alt="Imagen que hace referencia a la musica"
        layout="responsive"
        className="drop-shadow-[0_75px_75px_rgba(0,0,100,0.9)]"
        width={80}
        height={80}
      />
    </div>
  )
}

export default MediaImage;
