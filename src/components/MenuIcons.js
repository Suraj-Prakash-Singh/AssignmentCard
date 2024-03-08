const MenuIcons = () => {

    //used position absolute as the outermost cardBody is flex and MenuIcons would cause issue at static position
    return (
        <div className="w-max h-max lg:relative sm:relative flex items-center justify-between lg:top-[-120] lg:left-[-18] sm:bottom-[116] sm:left-[146]">
            <div className="h-1 w-1 bg-[#699BF7] mr-1 rounded-[50]"></div>
            <div className="h-1 w-1 bg-[#699BF7] mr-1 rounded-[50]"></div>
            <div className="h-1 w-1 bg-[#699BF7] rounded-[50]"></div>
        </div>
    )
}

export default MenuIcons;