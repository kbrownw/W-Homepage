type Props = {
  children: React.ReactNode;
  rank: string;
  title: string;
  image: string;
};

const TopTopic = ({ children, rank, title, image }: Props) => {
  return (
    <article>
      <div className="w-[130px] float-left mr-5">
        <img className="object-cover" alt="article-image" src={image} />
      </div>
      <div>
        <h2 className="font-bold text-neutral-grayish-blue text-[33px] -mt-3">
          {rank}
        </h2>
        <a className="font-bold text-neutral-dark-blue text-[20px] hover:cursor-pointer hover:text-primary-red">
          {title}
        </a>
        <p>{children}</p>
      </div>
    </article>
  );
};

export default TopTopic;
