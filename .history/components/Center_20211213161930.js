import { useSession } from "next-auth/react"

function Center() {

    const { data: session } = useSession
    return (
        <div className="flex text-white flex-grow">
            <h1>I am center</h1>
            <header>
                <div>
                    <img scr={session} alt="" />
                </div>
            </header>
        </div>
    )
}

export default Center
