/* eslint-disable @next/next/no-img-element */
import SkillCard from "./SkillCard";

export default function Sectionskills() {
    return (
        <section className="py-28 bg-skill">
            <div className="container mx-auto">
                <h2 className="text-2xl font-semi font-mono text-center font-bold">Skills</h2>
                <p className="text-center text-gray-400 text-lg mt-2">Some of my abilities.</p>
                <div className="flex -mx-4">
                    <div className="w-4/12  px-4">
                        <SkillCard
                            name="JavaScript"
                            level="Intermediate"
                            image="/javascript.svg"
                        />
                    </div>
                    {/* card2  */}
                    <div className="w-4/12  px-4">
                        <SkillCard
                            name="React Js"
                            level="Intermediate"
                            image="/react.svg"
                        />
                    </div>
                    {/* card 3 */}
                    <div className="w-4/12  px-4">
                        <SkillCard
                            name="Node js"
                            level="Intermediate"
                            image="/nodejs-icon.svg"
                        />
                    </div>
                   
              </div>
            </div>
       </section>
    );
}
 