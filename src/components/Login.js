import auth from './auth';

function Login(props) {
  return (
    <div className="Login">
      <button
        onClick = {() => { 
          auth.login(() => {
            props.history.push("/scan");
          })
        }}>
          Login
      </button>
    </div>
  );
}

export default Login;
