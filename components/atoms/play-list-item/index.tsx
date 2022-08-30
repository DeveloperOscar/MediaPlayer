interface Props{
  name: string,
}

const PlayListItem = ({name} : Props)  => {
  return (
    <div className="bg-neutral3 lowercase text-textPrimary">
      {name}
    </div>
  )
}


export default PlayListItem;
