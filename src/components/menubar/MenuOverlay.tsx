import { navLinks } from "@/constants"
import Navlink from "@/components/menubar/Navlink"
// import { Links } from "./Navbar";

const links = navLinks

interface MenuOverlayProps {
  setNavbarOpen: (open: boolean) => void;
}

const MenuOverlay = ({ setNavbarOpen }: MenuOverlayProps) => {
  return (
    <ul className="flex flex-col items-center pt-20">  
        {links.map((link, index) => (
            <li key={index}>
                <Navlink href={link.href} title={link.title} setNavbarOpen={setNavbarOpen} />
            </li>
        ))}
    </ul>
  )
}

export default MenuOverlay