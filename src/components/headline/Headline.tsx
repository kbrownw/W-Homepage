import Web3Desktop from "../../assets/images/image-web-3-desktop.jpg";
import Web3Mobile from "../../assets/images/image-web-3-mobile.jpg";
import useMediaQuery from "../../hooks/useMediaQuery";

const Headline = () => {
  const isLargeScreen = useMediaQuery("(min-width: 1060px)");

  return (
    <section className="md:col-span-2 md:grid grid-rows-[min-content_auto]">
      {/* IMAGE */}
      <div className="w-full mb-10">
        <img
          alt="web3-image"
          src={`${isLargeScreen ? Web3Desktop : Web3Mobile}`}
        />
      </div>
      {/* TEXT */}
      <div className="md:flex gap-10 items-stretch">
        {/* HEADER */}
        <h1 className="text-[55px] font-extrabold text-neutral-dark-blue leading-[1.1em] mb-5">
          The Bright Future of Web 3.0?
        </h1>
        {/* PARAGRAPH AND BUTTON */}
        <div>
          <p className="text-neutral-dark-gray-blue mb-8">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className="bg-primary-red transition duration-500 hover:bg-neutral-dark-blue text-white text-sm font-bold py-3 px-5 tracking-[.4em]">
            READ MORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default Headline;
