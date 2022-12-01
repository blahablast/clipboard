import googleLogo from '../images/logo-google.png'
import ibmLogo from '../images/logo-ibm.png'
import msLogo from '../images/logo-microsoft.png'
import hpLogo from '../images/logo-hp.png'
import vectorLogo from '../images/logo-vector-graphics.png'

function References() {
  return (
    <>
      <section className='flex flex-col items-center justify-between max-w-6xl px-10 mx-auto space-y-16 my-44 md:flex-row md:space-y-0'>
        <img src={googleLogo} alt='Google Logo' />
        <img src={ibmLogo} alt='IBM Logo' />
        <img src={msLogo} alt='Microsoft Logo' />
        <img src={hpLogo} alt='HP Logo' />
        <img src={vectorLogo} alt='Vector Graphics Logo' />
      </section>
    </>
  )
}

export default References
