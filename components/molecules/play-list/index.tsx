import PlayListItem from "components/atoms/play-list-item"
import { useAppSelector } from "app/hooks";

const PlayList = () => {
  const idsSounds = useAppSelector(state => state.sounds.ids);
  return (
    <div className={`px-4 py-2 h-full sm:h-[200px] md:h-[500px] flex flex-col justify-center gap-5 overflow-auto`}>
      {
          idsSounds.map((id) => {
            return <PlayListItem id={id} key={id} />;
          })
      }
    </div>
  )
}


export default PlayList;
