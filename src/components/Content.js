import Context from "../stores/Context";

//Consumer to use Context
const Content = () => {
  return (
    <Context.Consumer>
      {(context) => (
        <div className="App">
          <h1>你好， {context.name}</h1>
          <h2>内容调整次数 {context.id}!</h2>
        </div>
      )}
    </Context.Consumer>
  );
};
export default Content;
