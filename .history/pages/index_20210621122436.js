import Nav from "../components/Nav"
import NavItems from "../components/NavItems"
export default function Home() {

  return (
    <>
      <div>
        <div className="container mx-auto">
          <div className="flex bg-blue-500">
            <div className="w-3/12 uppercase  text-2xl font-semibold tracking-widest">
              Flutter Hub
            </div>
            <div className="w-6/12">
              <Nav />
             </div>
        </div>
          </div>
      </div>
      </>
  )
}
