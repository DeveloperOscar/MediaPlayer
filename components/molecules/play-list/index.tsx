import PlayListItem from "components/atoms/play-list-item"
import AddFilesForm from "components/atoms/add-files-form"


const PlayList = () => {
  return (
    <div>
      <AddFilesForm/>    
      <div>
        <PlayListItem name="hola"/>
      </div>
    </div>
  ) 
}

export default PlayList;
