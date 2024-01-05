import Headline from "./components/headline/Headline";
import Nav from "./components/nav/Nav";
import New from "./components/new/New";
import TopTopic from "./components/topTopic/TopTopic";
import RetroPCImage from "./assets/images/image-retro-pcs.jpg";
import LaptopKeyboard from "./assets/images/image-top-laptops.jpg";
import GamingController from "./assets/images/image-gaming-growth.jpg";

function App() {
  return (
    <main className="app flex flex-col bg-neutral-off-white md:max-w-[1600px] mx-auto">
      <Nav />
      <div className="grid w-[90%] mx-auto gap-10 lg:grid-cols-3 md:w-4/5 my-10">
        <Headline />
        <New />
      </div>
      <div className="grid mx-auto w-[90%] gap-10 md:w-4/5 md:mt-10 lg:grid-cols-3 pb-20">
        <TopTopic rank="01" title="Reviving Retro PCs" image={RetroPCImage}>
          What happens when old PCs are given modern upgrades?
        </TopTopic>
        <TopTopic
          rank="02"
          title="Top 10 Laptops of 2022"
          image={LaptopKeyboard}
        >
          Our best picks for various needs and budgets.
        </TopTopic>
        <TopTopic
          rank="03"
          title="The Growth of Gaming"
          image={GamingController}
        >
          How the pandemic has sparked fresh opportunities.
        </TopTopic>
      </div>
    </main>
  );
}

export default App;
