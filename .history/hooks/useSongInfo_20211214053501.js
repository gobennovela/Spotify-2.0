import { useRecoilState } from "recoil";
import useSpotify from "./useSpotify";

function useSongInfo() {
    const spotifyApi = useSpotify();
    const [currentTrackId, setCurrentTrackId] = useRecoilState(currentTrackIdState);
    return (
        <div>
            
        </div>
    )
}

export default useSongInfo
