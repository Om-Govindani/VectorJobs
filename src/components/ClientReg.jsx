import { useState } from "react";
import "../styles/Freelancer.css"
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

  function changeClient(event) {
    const { name, value } = event.target;
    setClient(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  function handleRegister(event) {
    event.preventDefault();
    console.log(client);
    setClient({
      UserName: "",
      Email: "",
      password: ""
    });
  }
  function handleLogin(event){
    event.preventDefault();
    console.log(client);
    setClient({
        Email: "",
        password: ""
    })
  }
  function toggle(){
    setVisibility(!visible)
}

  return (
    <div id="form" className="m-auto h-auto">
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />
        <div className="login">
          <form className="form" onSubmit={handleLogin}>
            <label htmlFor="chk" aria-hidden="true">
              Sign in
            </label>
            <input
              className="input ring-1 ring-zinc-400 focus:ring-2 focus:ring-indigo-600 focus:shadow-lg"              
              type="email"
              name="Email"
              placeholder="Email"
              value={client.Email}
              onChange={changeClient}
              required=""
            />
            <input
              className="input ring-1 ring-zinc-400 focus:ring-2 focus:ring-indigo-600 focus:shadow-lg"              
              type="password"
              name="password"
              placeholder="Password"
              value={client.password}
              onChange={changeClient}
              required=""
            />
            <button>Sign In</button>
          </form>
        </div>
        <div className="register">
          <form className="form" onSubmit={handleRegister}>
            <label htmlFor="chk" aria-hidden="true">
              Sign Up
            </label>
            <input
              className="input focus:ring-2 focus:ring-zinc-400 focus:shadow-lg" 
              type="text"
              name="UserName"
              id="id"
              placeholder="Username"
              required
              value={client.UserName}
            onChange={changeClient}
            />
            <input
              className="input focus:ring-2 focus:ring-zinc-400 focus:shadow-lg" 
              type="email"
              name="Email"
              id="email"
              placeholder="Email"
              required=""
              value={client.Email}
            onChange={changeClient}
            />
            <input
              className="input focus:ring-2 focus:ring-zinc-400 focus:shadow-lg" 
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              required=""
              value={client.password}
            onChange={changeClient}
            />
            <button>Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ClientReg;
