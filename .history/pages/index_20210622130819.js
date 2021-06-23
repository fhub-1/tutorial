import Nav from "../components/Nav"
import Logo from "../components/Logo"
import Button from "../components/Button"

export default function Home() {

  return ( 
    <>
      {/* working on the hero background on the hero section */}
      <div className="bg-hero  h-[715px] bg-repeat-round">
        <div className="container mx-auto">
          <div className="flex  items-center">
            <div className="w-3/12 ">
              {/* bring logo from logo js */}
              <Logo />
            </div>
            <div className="w-6/12">
              {/* create new file nav js copy the code */}
              <Nav />
            </div>
            <div className="w-3/12 text-right">
              <Button variant="outline-blue">Contact</Button>
            </div>
            </div>  
          <div className="text-center mt-18">
            <h1 className=" text-3xl  text-white font-semibold font-mono w-5/12 mx-auto leading-relaxed">
            I am a front-end Developer, back-end Developer, and  UI/UX designer
            </h1>
            <p className="mt-6 mx-auto text-white text-opacity-60 text-lg  w-4/12 leading-relaxed">Since 17 years I started programming. Since 19 years starting UI design.</p>
            <Button variant="yellow" className="mt-14">Learn More</Button>  
          </div>
          </div>
      </div>
      </> 
  )
}


