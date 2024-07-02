function slide(){
    const tmp = document.querySelector("#form")
    
    tmp.classList.remove("hidden")
    tmp.classList.add("slide-right")

}

export default function LandingPage() {
    return (
        <div className="flex flex-col  justify-center items-center min-h-fit ">
                <h1 className="drop-shadow-md text-4xl mb-8">Vector Jobs</h1>
                <div>
                    <button type="button" className="w-40 h-16 border-4 border-slate-300 hover:border-slate-400 uppercase rounded-lg" onClick={slide}>Client</button>
                    <button type='button' className="w-36 h-16 border-4 border-slate-300 hover:border-slate-400 uppercase rounded-lg">Freelancer</button>
                </div>
        </div>
    );
}
