import { getProviders, signIn} from "next-auth/react";

function Login({ providers }) {
    return (
        <div>
            <img className=/>
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