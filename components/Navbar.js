import { navLists } from '@/constants';
import Image from 'next/image';

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        <Image src="/images/apple.svg" alt="apple" height={18} width={14} />

        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav, idx) => (
            <div
              key={idx}
              className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
            >
              {nav}
            </div>
          ))}
        </div>

        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <Image src="/images/search.svg" alt="search" height={18} width={18} />
          <Image src="/images/bag.svg" alt="bag" height={18} width={18} />
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
