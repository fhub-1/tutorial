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
              <ul className="flex  justify-center space-x-10">
                <li><a className="text-white  text-lg  text-opacity-60  font-semibold">Skills</a></li>
                <li><a className="text-white  text-lg  text-opacity-60  font-semibold">Project</a></li>
                <li><a className="text-white  text-lg  text-opacity-60  font-semibold">Contact</a></li>
              </ul>
             </div>
        </div>
          </div>
      </div>
      </>
  )
}
