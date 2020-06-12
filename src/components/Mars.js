import React, {useState, useEffect} from 'react'



const Mars = ()=>{
    const [name, setName] = useState("Opportunity")
    return(
        <div>
            <h1>Rover: {name}</h1>
            <input onChange={(event) => setName(event.target.value)}/>
        </div>
        )
}

export const MarsImg = () => {
    const [data, setData] = useState([])
    const [num, setNum]= useState(0)

    useEffect(() => { //replace ****** with your key
        fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=********&page=1`)
        .then(res => res.json())
        .then(data => setData(data.photos))
    }, [])

    const Rand = () =>{
        const min = 0
        const max = data.length - 1
        const rand = Math.floor(Math.random() * (max - min +1)) + min
        setNum(rand)
    }    

    return(
        <div>
            {data.map((img,index) => {
                if (index === num){
                    return(
                        <>
                            <div className="img-container">
                                <img key={index} className="display" alt="" src={img.img_src}/>
                            </div>
                            <div>
                                 <p>Rover: {img.rover.name}</p>
                                 <p>Camera: {img.camera.name}</p>
                                 <p>Picture data: {img.earth_date}</p>
                                <p>Index: {num}</p>
                            </div>
                        </>
                    )
                }
            })}
            <button onClick={Rand}>Change Img</button>
        </div>
    )
}

export default Mars