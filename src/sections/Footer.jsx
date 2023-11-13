import { copyrightSign } from '../assets/icons';
import { footerLogo } from '../assets/images';
import { footerLinks, socialMedia } from '../constants';

const Footer = () => {
  return (
    <footer className='max-container'>
      <div className='flex justify-between items-start gap-10 flex-wrap max-lg:flex-col'>
        <div className='flex flex-col items-start'>
          <a href='/'>
            <img src={footerLogo} alt='footer' width={150} height={40} />
          </a>

          <p className=' mt-3 text-base font-montserrat leading-7 text-white sm:max-w-sm'>
            Get shoes ready for the new term at your nearest Nike store. Find
            your perfect size in store. Get rewards.
          </p>

          <div className='flex items-center gap-5 mt-4'>
            {socialMedia.map((icon, index) => (
              <div
                key={index}
                className='flex justify-center items-center w-12 h-12 bg-white rounded-full'
              >
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='flex flex-1 justify-between lg:gap-10 gap-8 flex-wrap mt-3'>
        {footerLinks.map((section) => {
          return (
            <div key={section.title}>
              <h4 className='text-white font-montserrat text-2xl font-medium mb-2'>
                {section.title}
              </h4>
              <ul className='text-white'>
                {section.links.map((link) => (
                  <li key={link.name} className='hover:text-slate-gray'>
                    <a href='/'>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <div className='flex justify-between max-sm:flex-col text-yellow-50 mt-9 max-sm:items-center'>
        <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
          <img
            src={copyrightSign}
            alt='copy-right'
            width={20}
            height={20}
            className='rounded m-0'
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className='font-montserrat cursor-pointer'>Terms And Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
