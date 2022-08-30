import { ChangeEventHandler} from "react";

const AddFilesForm = () => {

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if(e.target.files){
      const audio = new Audio(URL.createObjectURL(e.target.files[0])) 
      audio.load()
      setTimeout(() => audio.play(),100)
      console.log(URL.createObjectURL(e.target.files[0]))
      audio.addEventListener('timeupdate',function(){
        console.log(audio.duration)
      })
    }
  };
  return (
    <form>
      <input type="file" multiple onChange={onChange} />
    </form>
  )
}

export default AddFilesForm;
