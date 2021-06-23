/* eslint-disable @next/next/no-img-element */
export default function Sectionskills() {
    return (
        <section className="py-28 bg-skill">
            <div className="container mx-auto">
                <h2 className="text-2xl font-semi font-mono text-center font-bold">Skills</h2>
                <p className="text-center text-gray-400 text-lg mt-2">Some of my abilities.</p>
                <div className="flex">
                    <div className="w-3/12">
                        <div className="bg-white shadow-skill rounded-lg p-8 flex">
                            <img src="/javascript.svg" alt="javascripty" className="rounded-full w-16 mr-6"/>
                            <div>
                                <h4 className="text-lg font-semibold"> JavaScript</h4>
                                <p className="text-sm font-semibold text-gray-400">Intermediate</p>
                            </div>
                        </div>
                    </div>
              </div>
            </div>
       </section>
    );
}
 