
import Freelancer from './Freelancer'
function slide(){
    const tmp = document.querySelector("#form")
    const page = document.querySelector("#page");
    tmp.classList.remove("hidden")
    tmp.classList.add("slide-right")
    page.classList.add("blur");
}
function slide2(){
    const temp = document.querySelector("#Form2");
    const page = document.querySelector("#page");
    temp.classList.remove("hidden");
    temp.classList.add("slide-left")
    page.classList.add("blur")
}


export default function LandingPage() {
    return (
        <>
        
        <div  id= "page"className="flex flex-col  justify-center items-center min-h-fit absolute ">
             
                <h1 className="drop-shadow-md  mb-8 p-7 ga-maamli-regular ">Vector Jobs</h1>
                <div className="p-20">
                    <button type="button" onClick={slide} className="h-14 w-52  text-black text-3xl transition ease-in-out delay-150 bg-button-color hover:-translate-y-1 hover:scale-110 hover:bg-button-color duration-300 rounded-xl border-4 border-firstcolor">Client</button>
                    &nbsp; &nbsp;
                    <button type="button " onClick={slide2} className="h-14 w-52  text-black  text-3xl  rounded-xl border-4 border-firstcolor transition ease-in-out delay-150 bg-button-color  hover:scale-110 hover:bg-button-color duration-300 rounded-xl border-4 border-firstcolor ">Freelancer</button>
                </div>
        </div>
        <Freelancer/>
        </>
    );
}
