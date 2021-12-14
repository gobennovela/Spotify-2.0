import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { useRecoilState } from "recoil";
import { currentTrackIdState } from "../atoms/songAtom";
import useSpotify from "./useSpotify";

function useSongInfo() {
    const spotifyApi = useSpotify();
    const [currentTrackId, setCurrentTrackId] = useRecoilState(currentTrackIdState);

    const [songInfo, setSongInfo] = useState(null);

    useEffect(() => {

        cpo

    }, [currentIdTrack, spotifyApi])
    return (
        <div>
            
        </div>
    )
}

export default useSongInfo
