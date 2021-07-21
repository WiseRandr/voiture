import { Link } from "react-router-dom";
import LoginSVG from "src/assets/svg/login.svg";
import Logo from "src/component/logo/logo";
import { useAuth } from "src/context/auth.context";
import Menu from "../menu/menu";
import { HeaderContainer } from "./header.style";

export default function Header() {
  const { logout, isconnected } = useAuth();
  
  return <HeaderContainer>
    <div className="text-center mt-3">
      <Link to="/"><Logo /></Link>
    </div>
    <Menu />
    {isconnected && <div className="bg-danger text-center py-2 w-100 mt-auto rotate-half" onClick={logout}><LoginSVG /></div>}
  </HeaderContainer>;
}