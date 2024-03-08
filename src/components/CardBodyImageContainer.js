import telescope from "../assets/telescope.svg"
import ProgressBar from "./ProgressBar";
import star from "../assets/star.svg"

const  CardBodyImageContainer = () => {
    //contains three parts, main image, star icon and the progress bar
    return (
        <div className="lg:w-2/6 lg:h-5/6 lg:mx-5 bg-white rounded-[20px] flex items-center justify-center flex-col lg:my-5 sm:w-10/12 sm:my-5">
            <div className="w-10 h-10 flex justify-center items-center rounded-[50px] relative bg-white p-1 overflow-hidden lg:left-16 lg:top-4  sm:left-24 sm:top-2 border border-solid border-[#f9f9f9] shadow-[1px_2px_10px_#0000001a]">
                <img src={star} alt="starIcon"></img>
            </div>
            <img className="w-full" src={telescope} alt="telescopeImg"></img>
            <ProgressBar/>
        </div>
    )
}

export default CardBodyImageContainer;