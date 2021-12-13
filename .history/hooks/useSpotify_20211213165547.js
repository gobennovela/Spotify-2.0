import { useEffect } from "react";
import { signIn, useSession } from "next-auth/react";


function useSpotify() {

    const { data: session, status } = useSession()

    useEffect(() => {
       if (session){
           if(session.error === "RefreshAccessTokenError"){
               signIn()
           }

           spotifyApi.setAccessToken(session.)
       }
    }, [session])

    return null
}

export default useSpotify
