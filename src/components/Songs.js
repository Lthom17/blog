import { useState, useEffect } from 'react'

function Songs() {
    const [mySongs, setSongs] = useState(null)
    const [url, setUrl] = useState('http://localhost:3000/mySongs')

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(json => setSongs(json))
        console.log("Running useEffect")
    }, [url])

    return (
        <div>
            <h1>Favorite Songs from the 90's</h1>
            <ul>
                {mySongs && mySongs.map(song => (<li key={song.id}>
                    <h3>{song.title}</h3>
                    <p>{song.artist}</p>  
                </li>))}

                <button onClick={() => setUrl('http://localhost:3000/mySongs?genre=alternative_rock')}>Alternative</button>
                <button onClick={() => setUrl('http://localhost:3000/mySongs?genre=soul')}>R&amp;B</button>
                <button onClick={() => setUrl('http://localhost:3000/mySongs?genre=hip_hop')}>Hip Hop</button>
                    

            </ul>
        </div>
    )
    
}

export default Songs;