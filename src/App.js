import { ABOUT } from "./pages/about";
import { Contacts } from "./pages/contacts";
import { INTRO } from "./pages/intro";
import { PORTFOLIO } from "./pages/portfolio";

function App() {
  return (
    <div className="App">
      <INTRO />
      <ABOUT />
      <PORTFOLIO />
      <Contacts />
    </div>
  );
}

export default App;
