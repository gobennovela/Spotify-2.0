import Center from "../components/Center";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="bg-black overflow-hidden h-screen">

      <main className="flex">
        <Sidebar />
        <Center />
      </main>

    </div>
  )
}

export async function getServerSideProps(context){
  const session = await getSession
}
