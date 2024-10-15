import {Link, useLocation} from "react-router-dom";
import { LuHome } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import { LuLibrary } from "react-icons/lu";
function Menu({value}) {

    return(
       <>
           {
               value ?
                   <>
                       <div className="menu">
                           <div className="logo">
                               <img src="/images/Spotify%20logo.png" alt=""/>
                           </div>

                           <ul>
                               <li>
                                   <Link to='/'><LuHome/> Home</Link>
                               </li>

                               <li>
                                   <Link to='/search'><CiSearch/>  Search</Link>
                               </li>

                               <li>
                                   <Link to='/library'><LuLibrary/>  Your Library</Link>
                               </li>

                               <div className='application'>
                                   <li>
                                       <Link to='/playlist'>
                                           <div className="plus">
                                               <p>+</p>
                                           </div>
                                           Create Playlist
                                       </Link>
                                   </li>

                                   <li>
                                       <img src="/images/heart.jpeg" alt=""/>
                                       <Link to='/songs'>Liked Songs</Link>
                                   </li>

                                   <li>
                                       <img src="/images/episod.jpg" alt=""/>
                                       <Link to='/episode'>Your Episode</Link>
                                   </li>
                               </div>


                               <div className='papulyanor'>
                                   <li>
                                       <Link to='/fav'>FAV</Link>
                                   </li>

                                   <li>
                                       <Link to='/mix'>Daily Mix1</Link>
                                   </li>

                                   <li>
                                       <Link to='/weekly'>Discover Weekly</Link>
                                   </li>

                                   <li>
                                       <Link to='/malayalam'>Malayalam</Link>
                                   </li>

                                   <li>
                                       <Link to='/dance'>Dance/ElectronixMix</Link>
                                   </li>
                               </div>
                           </ul>
                       </div>
                   </>
                   : null
           }
       </>
    )
}

export default Menu