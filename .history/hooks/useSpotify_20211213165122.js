import { useSession } from "next-auth/react";

function useSpotify() {

    const { data: session, status } = useSession()

    useEffect(() => {
       if (session){

       }
    }, [session])

    return null
}

export default useSpotify
