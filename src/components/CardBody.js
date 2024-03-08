import CardBodyImageContainer from "./CardBodyImageContainer";
import CardBodyMetaDataContainer from "./CardBodyMetaDataContainer";
import MenuIcons from "./MenuIcons";

const CardBody = () => {
    //CardBody is the outermost Whole card div, conatains all the card elements
    //Card is divided into 3 parts, 2 are main, one is just the 3 dots menu Icon
    //CardBodyImageContainer contains the left portion of the card
    //CardBodyMetaDataContainer contains the right portion(heding ,info etc)
    //CardBody changes flex direction from row to cloumns on  smaller devices for better responsiveness
    return (
        <div className="w-max h-max bg-[#E9F3FE] border-[#000000] border-2 rounded-[20px] shadow-[0px_4px_4px_#00000040] flex items-center justify-between lg:flex-row sm:flex-col">
            <CardBodyImageContainer/>
            <CardBodyMetaDataContainer/>
            <MenuIcons/>
        </div>
    )
}

export default CardBody;