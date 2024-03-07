import profile from "../assets/profile.svg"
import time from "../assets/time.svg"

const ProfileInfo = () => {
    return (
        <div className="w-4/6 m-2 mt-10 h-auto flex content-center justify-between font-bold font-Montserrat text-[#699BF7]">
            <div className="flex items-center">
                <img className="w-7" src={profile} alt="profileImg"></img>
                <p className="pl-1">Vishal Pulikottil</p>
            </div>
            <div className="flex items-center">
                <img className="w-6"src={time} alt="profileImg"></img>
                <p className="pl-1">15 minutes</p>
            </div>
        </div>
    )
}

export default ProfileInfo;