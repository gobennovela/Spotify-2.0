import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";
import { LOGIN_URL } from "../../../lib/spotify";

async function refreshAccessToken(token) {
    try {} catch (error) {
        console.error(error);
    }
}

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    SpotifyProvider({
      clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
      authorization: LOGIN_URL,
    }),
    // ...add more providers here
  ],
  secret: process.env.JWT_SECRET,
  pages: {
      signIn: "/login",
  },
  callbacks: {
      async jwt({ token, account, user }) {
          if(account && user){
              return {
                  ...token,
                  accessToken: account.access_token,
                  refreshToken: account.refresh_token,
                  username: account.providerAccountId,
                  accessTokenExpires: account.expires_at * 1000,
              }
          }

          if (Date.now() < token.accessTokenExpires) {
              console.log("EXISTING ACCESS TOKEN IS VALID");
              return token;
          }

          console.log("ACCESS TOKEN HAS EXPIRED, REFRESHING...");
          return await refreshAccessToken(token);


      },
  },
})

