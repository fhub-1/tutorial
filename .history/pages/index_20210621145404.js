import Nav from "../components/Nav"
import Logo from "../components/Logo"
import Button from "../components/Button"

export default function Home() {

  return (
    <>
      <div>
        <div className="container mx-auto">
          <div className="flex bg-blue-500 items-center">
            <div className="w-3/12 ">
              {/* bring logo from logo js */}
              <Logo />
            </div>
            <div className="w-6/12">
              {/* create new file nav js copy the code */}
              <Nav />
            </div>
            <div className="w-3/12 text-right">
              <Button>Contact</Button>
            </div>
            </div>  
          <div className="text-center">
            <h1 className="text-3xl font-semibold font-mono">
            I am a front-end engineer, back-end engineer, and also a UI designer
            </h1>
            <p>Since 15 years I started programming. Since 3 years starting UI design.</p>
            </div>
          </div>
      </div>
      </> 
  )
}
