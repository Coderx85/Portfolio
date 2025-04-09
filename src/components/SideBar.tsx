import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  links: { href: string; title: string }[];
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, links }) => {
  return (
    <div className={cn("fixed inset-0 z-50 transition-transform", isOpen ? "translate-x-0" : "-translate-x-full")}>
      <div className="bg-gray-800 text-white w-64 h-full p-4">
        <button onClick={onClose} className="text-white">Close</button>
        <ul className="mt-4">
          {links.map((link, index) => (
            <li key={index}>
              <Link href={link.href} className="block py-2 px-4 hover:bg-gray-700 rounded" onClick={onClose}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;