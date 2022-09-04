import PlayListItem from "components/atoms/play-list-item"
import { useAppSelector } from "app/hooks";

const PlayList = () => {
  const idsSounds = useAppSelector(state => state.sounds.ids);
  return (
    <div className={`px-4 py-2 gap-2  flex flex-col justify-center overflow-auto scrollbar`}>
      {
          idsSounds.map((id,i) => {
            return <PlayListItem id={id} key={id} index={i + 1} />;
          })
      }
    </div>
  )
}


export default PlayList;
