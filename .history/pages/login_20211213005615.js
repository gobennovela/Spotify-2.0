import { getProviders, signIn} from "next-auth/";

function Login() {
    return (
        <div>
            <h3>This is the Login page</h3>
        </div>
    )
}

export default Login;

export async function getServerSideProps() {
    const providers = await getProviders();
}