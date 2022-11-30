import logo from '../images/logo.svg'

function Hero() {
  return (
    <>
      <section className='section-container mb-40 px-10 pt-16'>
        <img src={logo} alt='logo' className='mx-auto my-16' />
        <h3>A history of everything you copy</h3>
        <p className='max-w-3xl mx-auto mb-10 text-2xl text-grayishBlue'>
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices.
        </p>
        {/* Button Container */}
        <div className='btn-container'>
          <a
            href='#'
            className='p-4 px-8 rounded-full shadow-lg bg-strongCyan duration-200 hover:bg-hoverCyan'>
            Download for iOS
          </a>
          <a
            href='#'
            className='p-4 px-8 rounded-full shadow-lg bg-lightBlue duration-200 hover:opacity-80'>
            Download for Mac
          </a>
        </div>
      </section>
    </>
  )
}

export default Hero
