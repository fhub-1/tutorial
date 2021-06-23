import Head from 'next/head'
export default function Home() {
  return (
    <>
      <div>
        <div className="container mx-auto">
          <div className="flex bg-gray-900">
            <div className="w-3/12 uppercase  text-2xl font-semibold tracking-widest">
              Flutter Hub
            </div>
            <div className="w-6/12">
              <ul>
                <li><a className="text-white text-opacity-60  font-semibold">Profile</a></li>
                <li><a className="text-white text-opacity-60  font-semibold">Skills</a></li>
                <li><a className="text-white text-opacity-60  font-semibold">Project</a></li>
              </ul>
             </div>
        </div>
          </div>
      </div>
      </>
  )
}
