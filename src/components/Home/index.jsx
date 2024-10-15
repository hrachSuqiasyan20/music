import MusicDepartmens from "../musicDepartmens";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import Singer from "../singer";
import Footer from "../footer";
import Header from "../header";
function Home(){

    const musicDep = [
        {id:1,path:'/images/heart.jpeg',text:'Liked Songs'},
        {id:2,path: '/images/man.png',text:'Nettex Playlist'},
        {id:3,path: '/images/barbie.png',text:'K/DA'},
        {id:4,path: '/images/wumen.png',text:'Liked Songs'},
        {id:5,path: '/images/joker.png',text:'Dance/Electronic' +
                'Mix'}

    ]
    return(
        <div className='Home'>
            <Header/>
            <div className="music-item">
                <h2>Good Morning</h2>
                <div className="music-dep">
                    {
                        musicDep.map((el) => {
                           return (
                               <MusicDepartmens key={el.id} imgPath={el.path} text={el.text}/>
                           )
                       })
                   }
               </div>

                <Singer/>
           </div>
        </div>
    )
}

export default Home