import { useRecoilValue } from "recoil"
import { playlistState } from "../atoms/playlistAtom"


function Songs() {

    const playlist = useRecoilValue(playlistState);

    return (
        <div>
            {p}
        </div>
    )
}

export default Songs
