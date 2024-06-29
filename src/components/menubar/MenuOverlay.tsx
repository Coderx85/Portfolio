import { navLinks } from "@/constants"
import Navlink from "@/components/menubar/Navlink"
// import { Links } from "./Navbar";

const links = navLinks

const MenuOverlay = () => {
  return (
    <ul className="flex flex-col items-center pt-20">  
        {links.map((link, index) => (
            <li key={index}>
                <Navlink href={link.href} title={link.title} />
            </li>
        ))}
    </ul>
  )
}

export default MenuOverlay