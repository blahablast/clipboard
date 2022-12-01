import tablet from '../images/image-devices.png'

function Access() {
  return (
    <>
      <section className='section-container my-20'>
        <h3>Access Clipboard Anywhere</h3>
        <p className='section-content mb-24 '>
          Whether you're on the go, or at your computer, you can access all your
          Clipboard snippets in a few clicks.
        </p>
        <img src={tablet} alt='tablets' className='mx-auto' />
      </section>
    </>
  )
}

export default Access
