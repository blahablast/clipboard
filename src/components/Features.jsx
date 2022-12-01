import computer from '../images/image-computer.png'

function Features() {
  return (
    <>
      <section class='section-container my-20'>
        <div class='relative flex flex-col md:flex-row md:space-x-32'>
          {/* Image  */}
          <div class='md:w-1/2'>
            <img
              src={computer}
              alt='computer'
              class='md:absolute top-0 right-[50%]'
            />
          </div>

          {/* Items Container  */}
          <div class='flex flex-col mx-auto mt-16 mb-24 space-y-12 text-xl md:w-1/2 md:mb-60 md:text-left md:pl-16'>
            {/* Item 1 */}
            <div>
              <h5>Quick Search</h5>
              <p class='max-w-md text-grayishBlue'>
                Easily search your snippets by content, category, web address,
                application, and more.
              </p>
            </div>
            {/* Item 2 */}
            <div>
              <h5>iCloud Sync</h5>
              <p class='max-w-md text-grayishBlue'>
                Instantly saves and syncs snippets across all your devices.
              </p>
            </div>
            {/* Item 3 */}
            <div>
              <h5>Completely History</h5>
              <p class='max-w-md text-grayishBlue'>
                Retrieve any snippets from the first moment you started using
                the app.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Features
