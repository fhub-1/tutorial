import Nav from "../components/Nav"
import Logo from "../components/Logo"
export default function Home() {

  return (
    <>
      <div>
        <div className="container mx-auto">
          <div className="flex bg-blue-500">
            <div className="w-3/12 uppercase  ">
              {/* bring logo from logo js */}
              <Logo />
            </div>
            <div className="w-6/12">
              {/* create new file nav js copy the code */}
              <Nav />
             </div>
        </div>
          </div>
      </div>
      </>
  )
}
