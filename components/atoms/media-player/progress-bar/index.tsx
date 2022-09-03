import { useEffect } from "react";

interface Props {
  currentTime?: Number;
  duration?: Number;
}

const ProgressBar = ({ currentTime, duration }: Props) => {

  useEffect(() => {
    const progress = Number(currentTime) * 100 / Number(duration);
    const bar = document.getElementById("bar");
    if(bar) bar.style.width = progress.toFixed(2)+"%";
  },[currentTime,duration])

  return (
    <button className="w-full py-1 px-1 flex border border-acent1 rounded-full hover:bg-neutral1 active:bg-primary">
      <div className={"truncate ... bg-acent1 h-[8px] rounded-full  hover:outline hover:outline-2 hover:outline-acent2"} id="bar">
      </div>
    </button>
  )
}


export default ProgressBar;
