import { getProviders, signIn} from "next-auth/react";

function Login({ providers }) {
    return (
        <div>
            <img className="w-52 mb-5" src="https://links.paparea"/>
            <h3>This is the Login page</h3>
        </div>
    )
}

export default Login;

export async function getServerSideProps() {
    const providers = await getProviders();

    return {
        props: {
            providers,
        }
    }
}