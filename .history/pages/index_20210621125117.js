import Nav from "../components/Nav"
import Logo from "../components/Logo"
import Button from "../components/Button"

export default function Home() {

  return (
    <>
      <div>
        <div className="container mx-auto">
          <div className="flex bg-black">
            <div className="w-3/12 ">
              {/* bring logo from logo js */}
              <Logo />
            </div>
            <div className="w-6/12">
              {/* create new file nav js copy the code */}
              <Nav />
            </div>
            <div className="w-3/12">
              <Button>Contact</Button>
            </div>
        </div>
          </div>
      </div>
      </>
  )
}
