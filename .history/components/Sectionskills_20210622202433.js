/* eslint-disable @next/next/no-img-element */
import SkillCard from "./SkillCard";

export default function Sectionskills() {
    return (
        <section className="py-28 bg-skill">
            <div className="container mx-auto">
                <h2 className="text-2xl font-semi font-mono text-center font-bold">Skills</h2>
                <p className="text-center text-gray-400 text-lg mt-2">Some of my abilities.</p>
                <div className="flex">
                    <div className="w-3/12">
                        <SkillCard
                            name="JavaScript"
                            level="Intermediate"
                            image="/javascript.svg"
                        />
                    </div>
              </div>
            </div>
       </section>
    );
}
 