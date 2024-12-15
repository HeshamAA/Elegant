import { useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { TDetailsMenuProps } from "../../../types/detailsMenuTypes";
import useDetailsMenu from "../../../hooks/useDetailsMenu";

function DetailsMenu({
  summaryTitle,
  data,
  link,
  style,
  children,
}: TDetailsMenuProps) {
  const { isMenuOpen, setIsMenuOpen, detailsRef, handleClickOutside } =
    useDetailsMenu();

 
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
                <li onClick={() => setIsMenuOpen(false)} key={index}>
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
