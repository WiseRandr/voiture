import { useMemo } from "react"
import { useLocation } from "react-router-dom";
import CarSVG from "src/assets/svg/car.svg";
import LoginSVG from "src/assets/svg/login.svg";
import { MenuIcon, MenuLink, MenuText } from "./menu.style";

export default function Menu() {
  const location = useLocation();
  const menus = useMemo(() => [
    { href: '/', icon: <CarSVG />, text: 'Voitures' },
    { href: '/se-connecter', icon: <LoginSVG />, text: 'Se connecter' },
    { href: '/s-inscrire', icon: <LoginSVG />, text: `S'inscrire` },
  ], []);
  
  return <div className="mt-5 mx-1 text-center">
    {menus.map(menu => (
      <MenuLink to={menu.href} key={menu.href} className={menu.href === location.pathname ? 'active' : ''}>
        <MenuIcon>{menu.icon}</MenuIcon>
        <MenuText>{menu.text}</MenuText>
      </MenuLink>
    ))}
  </div>
}