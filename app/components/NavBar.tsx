import Link from 'next/link';
import Logo from "../../public/icons/logo.svg"
import MenuDropdown from './MenuDropdown';
import { IoMenuOutline } from 'react-icons/io5';

const Navbar = () => {

  return (
    <nav className="flex items-center justify-between w-full text-white">

      <div className="flex-shrink-0">
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <div className=" hidden lg:flex justify-between gap-14 items-center">

        <MenuDropdown />
        <Link href={`#`}> 해외 개발자 활용 서비스</Link>
      </div>
      <div className="flex items-center">
        <button  className='flex lg:hidden  text-white'>
          <IoMenuOutline />
        </button>
        <button className="bg-white hidden lg:flex   items-center hover:bg-white text-indigo-500 font-semibold py-2 px-4 rounded-full w-full mt-4">
          문의하기
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
