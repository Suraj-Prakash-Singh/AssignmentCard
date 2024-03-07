import Tag from "./Tag";
import ProfileInfo from "./ProfileInfo";

const CardBodyMetaDataContainer = () => {
    return (
        <div className="w-3/5 h-5/6">
            <Tag/>
            <h1 className="tracking-wide w-4/6 mt-2 font-Montserrat font-bold text-[#2B62CF] text-3xl m-2">Animation in UI Design (Part 2)</h1>
            <ProfileInfo/>
        </div>
    )
}
export default CardBodyMetaDataContainer;