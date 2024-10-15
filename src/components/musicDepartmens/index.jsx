function MusicDepartmens(props){
    return(
        <div className='department' key={props.id}>
                <img src={props.imgPath} alt=""/>
                <p>{props.text}</p>
        </div>
    )
}

export default MusicDepartmens