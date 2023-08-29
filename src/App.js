import Context from "./stores/Context";
import Header from "./components/Header";
import Content from "./components/Content";
import "./styles.css";

export default function App() {
  const globalText = {
    name: "Judas",
    id: 5
  };
  return (
    <Context.Provider value={globalText}>
      <Header />
      <Content />
    </Context.Provider>
  );
}
