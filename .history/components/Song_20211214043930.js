import useSpotify from "../hooks/useSpotify"

function Song({order, track}) {

    const spotifyApi = useSpotify();

    return (
        <div>
            <div>
                <p>{order + 1}</p>
                <img src={track.track.album.images[0].url} alt="" className="h-10 1" />
            </div>
        </div>
    )
}

export default Song
