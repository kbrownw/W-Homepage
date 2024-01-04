import NewArticle from "./NewArticle";

const New = () => {
  return (
    <section className="bg-neutral-dark-blue py-8 px-6">
      <h2 className="text-primary-orange font-bold text-[50px]">New</h2>
      <NewArticle header="Hydrogen VS Electric Cars">
        Will hydrogen-fueled cars ever catch up to EVs?
      </NewArticle>
      <hr className=" border-t-neutral-dark-gray-blue my-5" />
      <NewArticle header="The Downsides of AI Artistry">
        What are the possible adverse effects of on-demand AI image generation?
      </NewArticle>
      <hr className=" border-t-neutral-dark-gray-blue my-5" />
      <NewArticle header="Is VC Funding Drying Up?">
        Private funding by VC firms is down 50% YOY. We take a look at what that
        means.
      </NewArticle>
    </section>
  );
};

export default New;
