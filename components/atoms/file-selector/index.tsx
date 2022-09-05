import { ChangeEventHandler } from "react"

interface Props{
  onChange : ChangeEventHandler<HTMLInputElement>
}

const FileSelector = ({onChange} : Props) => {
  return (
    <input className="flex m-auto  text-sm text-primary 
      file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm capitalize file:font-semibold text-[0px] font-mont
      file:bg-acent1 file:text-red-900
      hover:file:bg-primary file:border-4 file:border-solid file:border-primary"  type={"file"} multiple onChange={onChange}/>
  )
}

export default FileSelector
