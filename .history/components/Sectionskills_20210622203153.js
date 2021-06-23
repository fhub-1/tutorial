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
                    {/* card2  */}
                    <div className="w-3/12">
                        <SkillCard
                            name="React Js"
                            level="Intermediate"
                            image="/react.svg"
                        />
                    </div>
                    {/* card 3 */}
                    <div className="w-3/12">
                        <SkillCard
                            name="Node js"
                            level="Intermediate"
                            image="/nodejs-icon.svg"
                        />
                    </div>
                    {/* card 4 */}
                    <div className="w-3/12">
                        <SkillCard
                            name="Vue Js"
                            level="Intermediate"
                            image="/vue.svg"
                        />
                    </div>
                    {/* card5  */}
                    <div className="w-3/12">
                        <SkillCard
                            name="Vuetify Js"
                            level="Intermediate"
                            image="/vuetifyjs.svg"
                        />
                    </div>
                    {/* card 6 */}
                    <div className="w-3/12">
                        <SkillCard
                            name="Next Js"
                            level="Intermediate"
                            image="/nextjs-icon.svg"
                        />
                    </div>
                    {/* card 7 */}
                    <div className="w-3/12">
                        <SkillCard
                            name="Flutter"
                            level="Intermediate"
                            image="/flutter.svg"
                        />
                    </div>
                    {/* card8 */}
                    <div className="w-3/12">
                        <SkillCard
                            name="Tailwind CSS"
                            level="Intermediate"
                            image="/tailwindcss-icon.svg"
                        />
                    </div>
                    {/* card 9 */}
                    <div className="w-3/12">
                        <SkillCard
                            name="Materialize CSS"
                            level="Intermediate"
                            image="/materializecss.svg"
                        />
                    </div>
              </div>
            </div>
       </section>
    );
}
 