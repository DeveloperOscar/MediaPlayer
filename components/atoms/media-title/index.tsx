interface Props{
  title: string,
  subtitle: string
}

const MediaTitle = ({title,subtitle} : Props)  => {
  return (
    <div className="flex flex-col items-center bg-transparent">
      <strong className="grow font-mont text-2xl">{title}</strong>
      <span className="grow font-mont">{subtitle}</span>
    </div>
  )  
}

export default MediaTitle;
