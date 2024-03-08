import CardBodyImageContainer from "./CardBodyImageContainer";
import CardBodyMetaDataContainer from "./CardBodyMetaDataContainer";
import Menu from "./Menu";

const CardBody = () => {

    return (
        <div className="w-max h-max bg-[#E9F3FE] border-[#000000] border-2 rounded-[20px] flex items-center justify-between lg:flex-row sm:flex-col">
            <CardBodyImageContainer/>
            <CardBodyMetaDataContainer/>
            <Menu/>
        </div>
    )
}

export default CardBody;