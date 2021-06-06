
import Sing from "./Components/Sing/Sing";
import SingUp from "./Components/SingUp/SingUp";

function App() {

  return (
    <>
      <header>
        <h1 className="title">login S.G</h1>
      </header>
      <section className="box-sing">
        <Sing />
        <SingUp />
      </section>
    </>
  );
}

export default App;
