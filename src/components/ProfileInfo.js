import profile from "../assets/profile.svg"
import time from "../assets/time.svg"

const ProfileInfo = () => {
    return (
        <div className="lg:w-4/6 m-2 lg:mt-10 h-auto flex content-center justify-between font-bold font-Montserrat text-[#699BF7] sm:w-11/12 sm:my-5">
            <div className="flex items-center">
                <img className="lg:w-7" src={profile} alt="profileImg"></img>
                <p className="pl-1 sm:text-sm">Vishal Pulikottil</p>
            </div>
            <div className="flex items-center">
                <img className="lg:w-6"src={time} alt="profileImg"></img>
                <p className="pl-1 sm:text-sm">15 minutes</p>
            </div>
        </div>
    )
}

export default ProfileInfo;