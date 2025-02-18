import {React,  useState, useEffect} from "react";
import { GoLaw } from "react-icons/go";
import { MdMenu } from "react-icons/md";
import { Link } from "react-scroll";
import ResponsiveMenu from "./ResponsiveMenu";


const Navbar = () => {
  const NavbarMenu = [
    { id: 1, title: "Home", link: "home" },
    { id: 2, title: "About Us", link: "about" },
    { id: 3, title: "Service", link: "services" },
    { id: 4, title: "Our Team", link: "team" },
    { id: 5, title: "Contact", link: "contact" },
  ];

  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isMobile) setOpen(false);
  }, [isMobile]);

  return (
    <>
      <nav className="text-sm mx-3">
        <div className="container mx-auto flex justify-between items-center py-4 lg:px-4">
          <div className="flex items-center gap-2 text-xs sm:text-sm md:space-x-3 md:text-lg font-bold uppercase">
            <p>Azibo Kanu</p>
            <p className="text-primary">& Partners</p>
            <GoLaw className="text-4xl md:text-5xl hover:bg-primary hover:text-white rounded-full p-2 duration-200" />
          </div>
          <div className="hidden lg:block">
            <ul className="flex items-center gap-6 md:gap-3 md:text-yellow-600">
              {NavbarMenu.map((menu) => (
                <li key={menu.id} className="text-lg md:text-sm lg:text-lg">
                  <Link
                    activeClass="active"
                    to={menu.link}
                    spy={true}
                    smooth={true}
                    offset={-70} // Adjust based on your navbar height
                    duration={500}
                    className="inline-block py-1 px-4 md:px-2 cursor-pointer hover:shadow-[0_3px_0_-1px]"
                  >
                    {menu.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:hidden">
            <MdMenu
              className="text-2xl sm:text-4xl cursor-pointer"
              onClick={() => setOpen(!open)}
            />
          </div>
        </div>
      </nav>
      <ResponsiveMenu open={open} />
    </>
  );
};

export default Navbar;
