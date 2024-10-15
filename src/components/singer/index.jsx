function Singer(){

    const singersInfo = [
        {id:1,img:'/images/man2.png',text:'Weekly Motivation...'},
        {id:2,img:'/images/wumen2.png',text:'MEDITATION SELF'},
        {id:3,img:'/images/man3.png',text:'Words beyond act...'},
        {id:4,img:'/images/wumen3.png',text:'The Alexa Show'},
        {id:5,img:'/images/wumen4.png',text:'The Stories of Ma...'},
    ]
    return(
        <div className='singer-par'>
            <h2>Shows you might like</h2>

            <div className="singers">
                <div className="singers-head">
                    {
                        singersInfo.map((el) => {
                            return(
                                <div className='singers-item' key={el.id}>
                                    <div className="singers-img">
                                        <img src={el.img} alt=""/>
                                    </div>
                                    <div className="singers-item-text">
                                        <p>{el.text}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Singer