import { ChevronDownIcon } from "@heroicons/react/outline";
import { useSession } from "next-auth/react"

function Center() {

    const { data: session } = useSession();

    return (
        <div className="flex text-white flex-grow">
            <h1>I am center</h1>
            <header>
                <div>
                    <img className="rounded-full w-10 h-10" src={session?.user.image} alt="" />
                    <h2>{session?.user.name}</h2>
                    <ChevronDownIcon 
                </div>
            </header>
        </div>
    )
}

export default Center
