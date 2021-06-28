import ContactItems from "./ContactItems";

export default function Contact() {
    return (
        <section className="container mx-auto">
            <div className="bg-gray-200 p-14 flex rounded-lg">
               <div className="w-6/12 border-r">
                   <h1 className="text-2xl  text-gray-600 text-left">Contact</h1>
                   <p className="text-lg mt-2 text-gray-700 text-left">Several ways to contact me.</p>

                   <ContactItems 
                    label="Mail"
                    icon="/gmail.svg"
                    value="flutterhub1.21.0@gmail.com"
                    className="mt-10"
                   /> 
                   <ContactItems 
                   label="Phone Number"
                   icon="/phone.svg"
                   value="+254 795 164 401"
                   className="mt-6"
                  />
                   <ContactItems 
                    label="Linkedin"
                    icon="/linkedin.svg"
                    value="flutter hub"
                    className="mt-6"
                   />
               </div>
               <div className="w-6/12">
                   B
               </div>
            </div>
        </section>
    )
}
