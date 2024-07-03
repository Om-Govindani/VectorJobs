import { useState } from "react";

function Freelancer() {
  const [visible , setVisibility]=useState(false)
  const [freelancer, setFreelancer] = useState({
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
    console.log(freelancer);
    setFreelancer({
      UserName: "",
      Email: "",
      password: ""
    });
  }
  function toggle(){
    setVisibility(!visible)
}

  return (
    <div id="Form2" className="border border-custom-color h-auto bg-back-color hidden">
      <form onSubmit={handleSubmit}>
        <h1 className="flex justify-center items-center rounded-lg">Sign up</h1>
        <div className="p-4">
          <input
            type="text"
            value={freelancer.UserName}
            onChange={changeFreelancer}
            name="UserName"
            id="id"
            placeholder="Username"
            className="h-16 border border-custom-color rounded-lg text-xl"
            style={{ width: "410px" }}
            required
          />
        </div>
        <div className="flex justify-center items-center p-4">
          <input
            type="email"
            value={freelancer.Email}
            onChange={changeFreelancer}
            name="Email"
            id="email"
            placeholder="Email"
            className="h-16 border border-custom-color rounded-lg text-xl"
            style={{ width: "410px" }}
            required
          />
        </div>
        <div className="flex justify-center items-center p-4">
          <input
            type={visible ? "text" : "password"}
            value={freelancer.password}
            onChange={changeFreelancer}
            name="password"
            id="password"
            placeholder="Password"
            className="h-16 border border-custom-color rounded-lg text-xl"
            style={{ width: "410px" }}
            required/>
            <span onClick={toggle} className="absolute right-4 top-[57%] transform -translate-y-1/2 cursor-pointer mr-2">
                 { visible?<i class="fa-solid fa-eye text-2xl"></i>:<i class="fa-solid fa-eye-slash text-2xl"></i>}
            
          </span>
        </div>
        <div className="flex justify-center items-center p-4">
          <button
            type="submit"
            className="border border-custom-color h-16 rounded-lg text-2xl font-bold w-60 transition ease-in-out delay-150 bg-button-color hover:-translate-y-1 hover:scale-110 hover:bg-button-color duration-300 "
          >
            Join Vector Job
          </button>
        </div>
        <hr />
        <div className="flex justify-center items-center p-7">
          <p>
            Already have an account? <a href="/login">Login</a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Freelancer;
