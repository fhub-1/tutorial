import Nav from "../components/Nav"
import Logo from "../components/Logo"
import Button from "../components/Button"
import Image from 'next/image'
import Pro from  '../public/pro.png'


export default function Home() {

  return (
    <>
      {/* starting on the hero section */}
      {/* working on the hero background on the hero section */}
      <div className="bg-hero  h-[700px] bg-repeat-round">
        <div className="container mx-auto">
          <div className="flex  items-center py-10">
            <div className="w-3/12 ">
              {/* bring logo from logo js */}
              <Logo />
            </div>
            <div className="w-6/12">
              {/* create new file nav js copy the code */}
              <Nav />
            </div>
            <div className="w-3/12 text-right">
              <Button variant="outline-b  lue">Contact</Button>
            </div>
            </div>  
          <div className="text-center mt-18">
            <h1 className=" text-3xl  text-white font-semibold font-mono w-5/12 mx-auto leading-relaxed">
            I am a front-end Developer, back-end Developer, and  UI/UX designer
            </h1>
            <p className="text-white text-opacity-60 text-lg mt-6 mx-auto w-4/12 leading-relaxed">Since 17 years I started programming. Since 19 years starting UI design.</p>
            <Button variant="yellow" className="mt-10 text-center">Learn More</Button>  
          </div>
          </div>
      </div>
      {/* end of the hero */}
        
      {/* profile section */}
      <section className="py-24">
        <div className="containeter mx-auto">
          <h2 className="text-2xl font-semi font-mono text-center font-bold">My Profile</h2>
          <p className="text-center text-gray-400 text-lg mt-2">Get to know me briefly.</p>
          <div className="flex">
            <div className="w-4/12">
              <Image src={Pro} alt="profile image" className="w-full" />
            </div>
            <div className="w-8/12">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
            </div>
          </div>
        </div>
      </section>
      {/* end of profile section */}
    </>
   
  )
}


