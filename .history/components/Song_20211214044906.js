import useSpotify from "../hooks/useSpotify"

function Song({ order, track }) {

    const spotifyApi = useSpotify();

    return (
        <div className="grid grid-cols-2">
            <div className="flex items-center space-x-4">
                <p>{order + 1}</p>
                <img src={track.track.album.images[0].url} alt="" className="h-10 w-10" />
                <div>
                    <p>{track.track.name}</p>
                    <p>{track.track.artists[0].name}</p>
                </div>
            </div>
            <div className="flex items-center justify-c">
                <p className="hidden md:inline">{track.track.album.name}</p>
                <p>duration</p>
            </div>
        </div>
    )
}

export default Song
