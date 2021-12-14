import { useRecoilValue } from "recoil"
import { playlistState } from "../atoms/playlistAtom"


function Songs() {

    const playlist = useRecoilValue(playlistState);

    return (
        <div>
            {playlist}
        </div>
    )
}

export default Songs
