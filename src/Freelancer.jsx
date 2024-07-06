import { useState } from "react";
import "./Freelancer.css"
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
    <div id="Form2" className="m-autor  h-auto hidden">
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />
        <div className="login">
          <form className="form" onSubmit={handleLogin}>
            <label htmlFor="chk" aria-hidden="true">
              Log in
            </label>
            <input
              className="input"
              type="email"
              name="Email"
              placeholder="Email"
              value={Freelancer.Email}
              onChange={changeFreelancer}
              required=""
            />
            <input
              className="input"
              type="password"
              name="password"
              placeholder="Password"
              value={Freelancer.password}
              onChange={changeFreelancer}
              required=""
            />
            <button>Log in</button>
          </form>
        </div>
        <div className="register">
          <form className="form" onSubmit={handleRegister}>
            <label htmlFor="chk" aria-hidden="true">
              Register
            </label>
            <input
              className="input"
              type="text"
              name="UserName"
              id="id"
              placeholder="Username"
              required
              value={Freelancer.UserName}
            onChange={changeFreelancer}
            />
            <input
              className="input"
              type="email"
              name="Email"
              id="email"
              placeholder="Email"
              required=""
              value={Freelancer.Email}
            onChange={changeFreelancer}
            />
            <input
              className="input"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              required=""
              value={Freelancer.password}
            onChange={changeFreelancer}
            />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FreelancerReg;
