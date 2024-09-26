import { useEffect, useRef, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { TDetailsMenuProps } from "../../../types/detailsMenuTypes";

function DetailsMenu({
  summaryTitle,
  data,
  link,
  style,
  children,
}: TDetailsMenuProps) {
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

  // Add event listener to the document
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
      <nav>
        <details ref={detailsRef} open={isMenuOpen}>
          <summary
            onClick={(e) => {
              e.preventDefault();
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            {summaryTitle ? summaryTitle : children}
          </summary>

          <ul style={style}>
            {data &&
              data.map((el, index) => (
                <li key={index}>
                  <Link
                    className="flex"
                    to={`/${link}/${
                      typeof el === "string"
                        ? el
                        : el.prefix
                        ? el.title
                        : el.title
                    }`}
                    key={index}
                  >
                    <IoIosArrowForward />
                    {typeof el === "string" ? el : el.title}
                  </Link>
                </li>
              ))}
          </ul>
        </details>
      </nav>
    </>
  );
}

export default DetailsMenu;
