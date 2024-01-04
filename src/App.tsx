import Headline from "./components/headline/Headline";
import Nav from "./components/nav/Nav";
import New from "./components/new/New";

function App() {
  return (
    <main className="app flex flex-col bg-neutral-off-white md:max-w-[1600px] mx-auto">
      <Nav />
      <div className="grid w-[90%] mx-auto gap-10  md:grid-cols-3 md:w-4/5 my-10">
        <Headline />
        <New />
      </div>
    </main>
  );
}

export default App;
