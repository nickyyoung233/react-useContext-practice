import { useContext } from "react";
import Context from "../stores/Context";

//useContext to use Context
const Header = () => {
  const num = useContext(Context);
  console.log(num);

  return (
    <header>
      <h1>这是给{num.name}：</h1>
    </header>
  );
};
export default Header;
