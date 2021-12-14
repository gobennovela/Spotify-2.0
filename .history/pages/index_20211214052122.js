import { getSession } from "next-auth/react";
import Center from "../components/Center";
import Player from "../components/Player";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="bg-black overflow-hidden h-screen">

      <main className="flex">
        <Sidebar />
        <Center />
      </main>

      <div c>
        <Player />
      </div>

    </div>
  )
}

export async function getServerSideProps(context){
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  }
}
