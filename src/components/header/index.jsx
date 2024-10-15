import {FaArrowDown, FaArrowLeft, FaArrowRight} from "react-icons/fa";
import {Outlet, useNavigate} from "react-router-dom";
import SearchInput from "../searchInput";
import searchInput from "../searchInput";
import {useState} from "react";
import { CiMenuBurger } from "react-icons/ci";
import Menu from "../Menu";

function Header({showInp}){
    const [showMenu,setShowMenu] = useState(true)
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/layout',{state:true})
    }

    return (
        <div className="header-music-home">
            <CiMenuBurger className='burger' onClick={handleClick}/>
            <div className="arrow-header">
                <div className="arrow-par">
                    <div className=" arrow arrow-right">
                        <FaArrowRight/>
                    </div>
                    <div className=" arrow arrow-left">
                        <FaArrowLeft/>
                    </div>
                    <div className="search-input">
                        {showInp ? <SearchInput/> : null}
                    </div>

                </div>

            <div className="user">
                <img src="/images/wumen.png" alt=""/>

                <div className="name">
                    <p>Angel</p>
                    <FaArrowDown/>
                </div>
            </div>
            </div>

        </div>
    )
}

export default Header