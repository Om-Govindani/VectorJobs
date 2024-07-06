import { useState } from "react";
import "./Freelancer.css"
function ClientReg() {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  const [visible , setVisibility]=useState(false)
  const [client, setClient] = useState({
    UserName: "",
    Email: "",
    password: ""
  });

  function changeFreelancer(event) {
    const { name, value } = event.target;
    setFreelancer(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(client);
    setClient({
      UserName: "",
      Email: "",
      password: ""
    });
  }
  function toggle(){
    setVisibility(!visible)
}

  return (
    <div id="form" className="m-autor  h-auto hidden">
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />
        <div className="login">
          <form className="form">
            <label htmlFor="chk" aria-hidden="true">
              Log in
            </label>
            <input
              className="input"
              type="email"
              name="email"
              placeholder="Email"
              required=""
            />
            <input
              className="input"
              type="password"
              name="pswd"
              placeholder="Password"
              required=""
            />
            <button>Log in</button>
          </form>
        </div>
        <div className="register">
          <form className="form">
            <label htmlFor="chk" aria-hidden="true">
              Register
            </label>
            <input
              className="input"
              type="text"
              name="txt"
              placeholder="Username"
              required=""
            />
            <input
              className="input"
              type="email"
              name="email"
              placeholder="Email"
              required=""
            />
            <input
              className="input"
              type="password"
              name="pswd"
              placeholder="Password"
              required=""
            />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ClientReg;
