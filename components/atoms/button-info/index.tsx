interface Props {
  text: string,
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const ButtonInfo = ({ text, onClick }: Props) => {
  return (
    <button className="bg-info rounded-full py-1 uppercase text-textPrimary w-full" onClick={onClick}>
      {text}
    </button>
  )
}

export default ButtonInfo;




