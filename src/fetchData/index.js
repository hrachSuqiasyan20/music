async function FetchData(props){
    console.log(props)
   const url = props.url

    try{
       const response = await fetch(url)
        if (!response.ok){
            throw new Error(`Response status:${response.status}`)
        }

        const json = await response.json()
        console.log(json)
    } catch (error){
        console.log(error.message)
    }
}

export default FetchData