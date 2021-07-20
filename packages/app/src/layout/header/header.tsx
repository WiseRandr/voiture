import { Link } from "react-router-dom";
import Logo from "src/component/logo/logo";
import Menu from "../menu/menu";
import { HeaderContainer } from "./header.style";

export default function Header() {
  return <HeaderContainer>
    <div className="text-center mt-3">
      <Link to="/"><Logo /></Link>
    </div>
    <Menu />
  </HeaderContainer>;
}