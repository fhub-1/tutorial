/* eslint-disable @next/next/no-img-element */
//skillcard section that created on tue 

export default function SkillCard({ name, level, image }) {
    
    return (
        <div className="bg-white shadow-skill rounded-lg p-6 flex items-center">
        <img src={image} alt="" className="w-16  h-16 rounded-full mr-6"/>
        <div>
                <h4 className="text-lg font-semibold">{ name}</h4>
                <p className="text-sm font-semibold text-gray-400">{ level}</p>
        </div>
    </div>
    );
}
