import { createContext } from "react";

//this initial value could give a hint
const GlobalNum = createContext({
  name: "",
  id: 0
});
export default GlobalNum;
