import { useSession } from 'next'
import useSpotify from "../hooks/useSpotify";

function Player() {

    const spotifyApi = useSpotify();
    const { data: session, status} = useSession();
    return (
        <div>
            <div>
                <img src="" alt="" />
            </div>
        </div>
    )
}

export default Player
