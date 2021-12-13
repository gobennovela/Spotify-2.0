import { ChevronDownIcon } from "@heroicons/react/outline";
import { useSession } from "next-auth/react"

function Center() {

    const { data: session } = useSession();

    return (
        <div className="flex text-white flex-grow">
            <h1>I am center</h1>
            <header>
                <div className="flex items-center bg-black space-x-3 opacity-90 hover:opacity-80">
                    <img className="rounded-full w-10 h-10" src={session?.user.image} alt="" />
                    <h2>{session?.user.name}</h2>
                    <ChevronDownIcon className="h-5 w-5"/>
                </div>
            </header>
        </div>
    )
}

export default Center
