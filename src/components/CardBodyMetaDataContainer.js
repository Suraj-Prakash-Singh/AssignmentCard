import Tag from "./Tag";
import ProfileInfo from "./ProfileInfo";

const CardBodyMetaDataContainer = () => {
    //contains three parts, the After Effects button, heading and bottom info
    return (
        <div className="lg:w-fit h-auto lg:items-start sm:flex-col sm:w-fit sm:items-center sm:justify-center sm:flex">
            <Tag/>
            <h1 className="lg:tracking-wide lg:w-4/6 lg:mt-2 font-Montserrat font-bold text-[#2B62CF] lg:text-3xl lg:m-2 lg:text-start sm:text-xl sm:text-center sm:mx-2 sm:mt-2">Animation in UI Design (Part 2)</h1>
            <ProfileInfo/>
        </div>
    )
}

export default CardBodyMetaDataContainer;