import Image from 'next/image'

export default function SoundPage () {
  return (
    <>
      <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          <Image
            className='mx-auto w-auto'
            src='/ms-icon-150x150.png'
            alt='IEPE'
            width={500}
            height={500}
          />
          <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
            Si eres miembro de IEPE ingresá
          </h2>
        </div>

        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
          <form className='space-y-6' action='#' method='POST'>
            <div>
              <button
                type='submit'
                className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              >
                Sign in
              </button>
            </div>
          </form>

          <p className='mt-10 text-center text-sm text-gray-500'>
            No eres miembro?{' '}
            <a href='https://api.whatsapp.com/send/?phone=3412617775' className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'>
              Contactate con nosotros.
            </a>
          </p>
        </div>
      </div>
    </>
  )
}
