import logo from '../images/logo.svg'
import facebook from '../images/icon-facebook.svg'
import twitter from '../images/icon-twitter.svg'
import IG from '../images/icon-instagram.svg'

function Footer() {
  return (
    <div className='bg-gray-50'>
      <footer className='section-container'>
        <div className='flex flex-col items-center justify-between md:flex-row'>
          {/* Image */}
          <img src={logo} alt='company logo' className='scale-50' />
          {/* Container for Menus & Social */}
          <div className='flex flex-col items-center justify-between flex-1 mb-10 space-y-6 md:flex-row md:mb-0 md:space-y-0 text-grayishBlue'>
            {/* Menus  */}
            <div className='flex flex-col space-y-4 md:flex-row md:ml-24 md:space-x-24 md:space-y-0'>
              {/* Menu 1  */}
              <div className='flex flex-col space-y-4 text-center md:text-left'>
                <div>
                  <a href='#' className='hover:text-strongCyan'>
                    FAQs
                  </a>
                </div>
                <div>
                  <a href='#' className='hover:text-strongCyan'>
                    Contact Us
                  </a>
                </div>
              </div>
              {/* Menu 2 */}
              <div className='flex flex-col space-y-4 text-center md:text-left'>
                <div>
                  <a href='#' className='hover:text-strongCyan'>
                    Privacy Policy
                  </a>
                </div>
                <div>
                  <a href='#' className='hover:text-strongCyan'>
                    Press Kit
                  </a>
                </div>
              </div>
              {/* Menu 3  */}
              <div
                id='gotcha'
                className='flex flex-col space-y-4 text-center md:text-left'>
                <div>
                  <a href='#' className='hover:text-strongCyan'>
                    Install Guide
                  </a>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className='flex justify-between w-32 py-1'>
              <a href='#'>
                <img
                  src={facebook}
                  alt='facebook logo'
                  className='duration-200 ficon'
                />
              </a>
              <a href='#'>
                <img
                  src={twitter}
                  alt='twitter logo'
                  className='duration-200 ficon'
                />
              </a>
              <a href='#'>
                <img src={IG} alt='IG logo' className='duration-200 ficon' />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
