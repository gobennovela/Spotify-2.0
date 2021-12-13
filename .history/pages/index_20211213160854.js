import Center from "../components/Center";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="bg-black overflow-hidden h-screen">

      <main>
        <Sidebar />
        <Center />
      </main>

    </div>
  )
}
