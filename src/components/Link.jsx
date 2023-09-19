const Link = ({ link }) => {
  return (
    <li className="px-3 font-bold lg:px-5 relative">
      <a href="#" className="after:content-[''] after:bg-white after:h-[3px] after:border-white after:w-1/4 after:absolute after:rounded after:left-1/2 after:bottom-[-9px] after:translate-x-[-50%] after:scale-x-0 hover:after:scale-x-100 after:hidden lg:after:block">
        {link}
      </a>
    </li>
  );
};
export default Link;
