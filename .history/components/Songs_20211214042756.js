import { useRecoilValue } from "recoil"
import { playlistState } from "../atoms/playlistAtom"


function Songs() {

    const playlist = useRecoilValue(playlistState);

    return (
        <div>
            {playlis}
        </div>
    )
}

export default Songs
