import axios from "axios";

const AuthPage = (props) => {
  const onSubmit = (error) => {
    error.preventDefault();
    const { value } = error.target[0];
    axios
      .post("http://localhost:3001/authenticate", { username: value })
      .then((read) => props.onAuth({ ...read.data, secret: value }))
      .catch((error) => console.log("error", error));
    props.onAuth({ username: value, secret: value });
  };

  return (
    <div className="background">
      <form onSubmit={onSubmit} className="form-card">
        <div className="form-title">Welcome👋</div>

        <div className="form-subtitle">Set a username to get started</div>
        <div className="auth">
          <div className="auth-label">Username</div>
          <input className="auth-input" name="username"></input>
          <button className="auth-button" type="submit">
            Enter
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthPage;
