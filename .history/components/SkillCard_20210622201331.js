/* eslint-disable @next/next/no-img-element */
//skillcard section that created on tue 

export default function SkillCard({}) {
    return (
        <div className="bg-white shadow-skill rounded-lg p-6 flex items-center">
        <img src="/javascript.svg" alt="javascripty" className="rounded-full w-16 mr-6"/>
        <div>
            <h4 className="text-lg font-semibold"> JavaScript</h4>
            <p className="text-sm font-semibold text-gray-400">Intermediate</p>
        </div>
    </div>
    );
}
