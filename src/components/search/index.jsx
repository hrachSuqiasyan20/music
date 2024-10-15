import {useEffect, useState} from "react";
import SearchInput from "../searchInput";
import Header from "../header";
import searchInput from "../searchInput";
import {useSelector} from 'react-redux'
import FetchData from "../../fetchData";
function Search(){
    const showInp = true;
    const [searchItem,setSearchItem] = useState([])
    console.log(searchItem)
    const name = useSelector(function(state){
        return state.currentMovie.name
    })

    console.log(name)

    useEffect(() => {
        setTimeout(() => {
            FetchData('https://api.spotify.com/v1/search ')
                .then((response) => response)
                .then((data) => setSearchItem(data))
        },1000)
    }, [name]);

    const singers = [
        {id:1,img:'/images/singers.png',text:'Pop'},
        {id:2,img:'/images/hip 1.png',text:'Hip-Hop'},
        {id:3,img:'/images/webp 1.png',text:'Indie'}
    ]

    const browserImg = [
        {id:1,img:'/images/image.png',text:'Products',background:'rgb(39, 133, 106)'},
        {id:2,img:'/images/image (1).png',text:'Made For You',background: 'rgb(30, 50, 100)'},
        {id:3,img:'/images/image (2).png',text:'Charts',background: 'rgb(141, 103, 171)'},
        {id:4,img:'/images/image (3).png',text:'New Releases',background: 'rgb(232, 17, 91)'},
        {id:5,img:'/images/image (4).png',text:'Discover',background: 'rgb(30, 50, 100)'},
    ]
    return(
        <div className='search'>
            <Header showInp={showInp}/>

            <div className="your-top">
                <h3>Your top genres</h3>

                <div className="category">
                    <div className="categories-par">
                        {singers.map((el) => {
                            return(
                                <div key={el.id} className='category-item'>
                                    <div className="text">
                                        <p>{el.text}</p>
                                    </div>
                                    <img src={el.img} alt=""/>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>


            <div className="browser-all">
                <h2>Browse all</h2>

                <div className="browser-item">

                {browserImg.map((el) => {
                    return(
                        <div key={el.id} style={{background: el.background}} className='browser-img'>
                            <div className="text">
                                <p>{el.text}</p>
                            </div>
                            <img src={el.img} alt=""/>

                        </div>
                    )
                })}
                </div>

            </div>
        </div>
    )
}

export default Search