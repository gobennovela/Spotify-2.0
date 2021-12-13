import { getProviders, sigi}

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