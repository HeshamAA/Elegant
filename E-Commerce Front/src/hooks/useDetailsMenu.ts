import { useRef, useState } from "react";

function useDetailsMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const detailsRef = useRef<HTMLDetailsElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      detailsRef.current &&
      !detailsRef.current.contains(event.target as Node)
    ) {
      setIsMenuOpen(false);
    }
  };

  return { isMenuOpen, setIsMenuOpen, detailsRef, handleClickOutside };
}

export default useDetailsMenu;
