import { headerLogo } from '../assets/images';
import { navLinks } from '../constants/index';
import { hamburger } from '../assets/icons';

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href='/'>
          <img src={headerLogo} alt='Logo' width={130} height={29} />
        </a>

        <ul className='flex flex-1 justify-center items-center gap-14 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='text-lg font-montserrat leading-normal text-slate-gray'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className='lg:hidden'>
          <img src={hamburger} alt='Hamburger' width={30} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
