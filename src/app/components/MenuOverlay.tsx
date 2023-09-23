import Navlink from "./Navlink"
import { Links } from "./Navbar";

// interface Links {
//     title: string;
//     path: string;
// }

const MenuOverlay = ({ links }: { links: Links[] }) => {
  return (
    <ul className="flex flex-col py-4 items-center">  
        {links.map((link, index) => (
            <li key={index}>
                <Navlink href={link.path} title={link.title} />
            </li>
        ))}
    </ul>
  )
}

export default MenuOverlay