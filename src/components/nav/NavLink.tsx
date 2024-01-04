type Props = {
  text: string;
};

const NavLink = ({ text }: Props) => {
  return (
    <a className="transition duration-500 hover:text-primary-red" href="#link">
      {text}
    </a>
  );
};

export default NavLink;
