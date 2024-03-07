import telescope from "../assets/telescope.svg"
import ProgressBar from "./ProgressBar";

const CardBodyImageContainer = () => {
    return (
        <div className="w-2/6 h-5/6 mx-5 bg-white rounded-[20px] flex items-center justify-center flex-col">
            <img className="w-4/5" src={telescope} alt="telescopeImg"></img>
            <ProgressBar/>
        </div>
    )
}

export default CardBodyImageContainer;