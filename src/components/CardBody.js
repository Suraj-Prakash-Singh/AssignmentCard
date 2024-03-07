import CardBodyImageContainer from "./CardBodyImageContainer";
import CardBodyMetaDataContainer from "./CardBodyMetaDataContainer";
import Menu from "./Menu";

const CardBody = () => {

    return (
        <div className="w-3/6 h-72 bg-[#E9F3FE] border-[#000000] border-2 rounded-[20px] flex items-center justify-between">
            <CardBodyImageContainer/>
            <CardBodyMetaDataContainer/>
            <Menu/>
        </div>
    )
}

export default CardBody;