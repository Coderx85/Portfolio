import { LinksProps } from "../types"
import Navlink from "./Navlink"
// import { Links } from "./Navbar";


const MenuOverlay = ({ links }: { links: LinksProps[] }) => {
  return (
    <ul className="flex flex-col items-center pt-20">  
        {links.map((link, index) => (
            <li key={index}>
                <Navlink href={link.path} title={link.title} />
            </li>
        ))}
    </ul>
  )
}

export default MenuOverlay