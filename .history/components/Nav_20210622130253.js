import NavItems from "./NavItems"
export default function Nav() {
    return (
        <ul className="flex  justify-center space-x-10  ">
                {/* creating deffernts file form naveitems */}
                <NavItems >Profile</NavItems>
                <NavItems >Skills</NavItems>
                <NavItems >Projects</NavItems>
                <NavItems >Contact </NavItems>
                {/* end of top navbar */}
              </ul>
    )
}
