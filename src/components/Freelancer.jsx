import { useState } from "react";
import "../styles/Freelancer.css"
function FreelancerReg() {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  const [visible , setVisibility]=useState(false)
  const [Freelancer, setFreelancer] = useState({
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

  function handleRegister(event) {
    event.preventDefault();
    console.log(Freelancer);
    setFreelancer({
      UserName: "",
      Email: "",
      password: ""
    });
  }
  function handleLogin(event){
    event.preventDefault();
    console.log(Freelancer);
    setFreelancer({
        Email: "",
        password: ""
    })
  }
  function toggle(){
    setVisibility(!visible)
}

  return (
    <div id="Form2" className="m-auto  h-auto">
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
              value={Freelancer.Email}
              onChange={changeFreelancer}
              required=""
            />
            <input
              className="input ring-1 ring-zinc-400 focus:ring-2 focus:ring-indigo-600 focus:shadow-lg"              
              type="password"
              name="password"
              placeholder="Password"
              value={Freelancer.password}
              onChange={changeFreelancer}
              required=""
            />
            <button>Sign in</button>
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
              value={Freelancer.UserName}
            onChange={changeFreelancer}
            />
            <input
              className="input focus:ring-2 focus:ring-zinc-400 focus:shadow-lg"                            
              type="email"
              name="Email"
              id="email"
              placeholder="Email"
              required=""
              value={Freelancer.Email}
            onChange={changeFreelancer}
            />
            <input
              className="input focus:ring-2 focus:ring-zinc-400 focus:shadow-lg"              
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              required=""
              value={Freelancer.password}
            onChange={changeFreelancer}
            />
            <button>Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FreelancerReg;
