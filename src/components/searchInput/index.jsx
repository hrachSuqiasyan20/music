import { FaSearch } from "react-icons/fa";
import {useEffect, useState} from "react";
import {json} from "react-router-dom";

import {useDispatch, useSelector} from 'react-redux'
function SearchInput(){
    const [inputValue,setInputValue] = useState('')
    const dispatch = useDispatch()
    const handleChange = (e) => {
        setInputValue(e.target.value)
        dispatch({
            type:'EDIT_MOVIE_NAME',
            payload:{
                name:inputValue,
            }
        })
    }

    return (
        <div className='searchInput'>
            <input type="text" value={inputValue}  onChange={handleChange} placeholder='Artists, songs, or podcasts'/>
            <FaSearch/>
        </div>
    )
}

export default SearchInput