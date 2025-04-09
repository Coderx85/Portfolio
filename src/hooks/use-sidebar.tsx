import { useState } from 'react';

const useSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openSidebar = () => setIsOpen(true);
  const closeSidebar = () => setIsOpen(false);
  const toggleSidebar = () => setIsOpen((prev) => !prev);

  return {
    isOpen,
    openSidebar,
    closeSidebar,
    toggleSidebar,
  };
};

export default useSidebar;