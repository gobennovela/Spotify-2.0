import { useRecoilState } from "recoil";

function useSongInfo() {

    const [currentTrackId, setCurrentTrackId] = useRecoilState(currentTrackIdState);
    return (
        <div>
            
        </div>
    )
}

export default useSongInfo
