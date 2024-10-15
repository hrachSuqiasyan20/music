import { IoIosHeartHalf } from "react-icons/io";
import { AiFillSound } from "react-icons/ai";
import { MdSkipNext } from "react-icons/md";
import { RiSkipBackMiniFill } from "react-icons/ri";
import { FaPlay } from "react-icons/fa";
import { FaRepeat } from "react-icons/fa6";
import { CiTextAlignRight } from "react-icons/ci";
import { TbBrandAmazon } from "react-icons/tb";
function Footer(){
    return(
        <div className='foot'>
            <div className="top">
                <div className="selected">
                    <img src="/images/selected.png" alt=""/>
                    <div className="selected-name">
                        <p>Dreaming On</p>
                        <span>NEFFEX</span>
                    </div>
                    <IoIosHeartHalf/>
                </div>

                <div className="music-desc">
                    <div className='randall'>
                        <TbBrandAmazon/>
                        <TbBrandAmazon className='two-randall'/>
                    </div>

                    <div className="play-music-section">
                        <RiSkipBackMiniFill/>
                        <div className="play">
                            <FaPlay/>
                        </div>
                        <MdSkipNext/>
                    </div>
                   <FaRepeat/>
                </div>

                <div className="setting">
                    <img src="/images/micrafon.png" alt=""/>
                    <CiTextAlignRight/>
                    <img src="/images/carbon_laptop.png" alt=""/>
                    <AiFillSound/>
                    <input type="text" disabled/>
                </div>

            </div>

            <div className="down">
                <div className="down-info">
                    <img src="/images/erank.png" alt=""/>
                    <div className="down-product">
                        <AiFillSound/>
                        <p>Listening on ASUS-ROG-G531GT</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer