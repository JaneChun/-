import "./App.css";
import Form from "./component/Form.js"
import Pagenation from "./component/Pagenation.js"
import Discussions from "./component/Discussions.js"

function App() {
  return (
    <div className="main">
      <h1>My Agora States <i className="fa-solid fa-code"></i></h1>
      <Form />
      <Pagenation />
      <Discussions />
    </div>
  );
}

export default App;
