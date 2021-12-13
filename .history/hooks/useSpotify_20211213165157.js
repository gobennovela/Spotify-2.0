import { useSession } from "next-auth/react";
import { useEffect, useState} from "react";

function useSpotify() {

    const { data: session, status } = useSession()

    useEffect(() => {
       if (session){

       }
    }, [session])

    return null
}

export default useSpotify
