import useSpotify from "../hooks/useSpotify"

function Song({order, track}) {

    const spotifyApi = useSpotify();

    return (
        <div>
            <div>
                <p>{order + 1}</p>
                <img src={track.track.album.images[0].url} alt="" className="h-10 w-10" />
                <div>
                   <p>{track.track.name}</p>
                   <p>{track}</p>
                </div>
            </div>
        </div>
    )
}

export default Song
