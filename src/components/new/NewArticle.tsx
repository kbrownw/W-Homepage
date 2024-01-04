type Props = {
  children: React.ReactNode;
  header: string;
};

const NewArticle = ({ children, header }: Props) => {
  return (
    <div className="py-3">
      <a
        className="text-white font-bold text-[24px] transition duration-500 hover:text-primary-orange cursor-pointer"
        href="#article"
      >
        {header}
      </a>
      <p className="text-neutral-grayish-blue">{children}</p>
    </div>
  );
};

export default NewArticle;
