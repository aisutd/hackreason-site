import { FC } from 'react'

const Hero: FC = () => {
  return (
    <div
      className='w-full h-screen flex items-center justify-center bg-cover bg-opacity-30'
      style={{ background: 'url("/assets/grid-bg-2.jpg")', backgroundSize: 'cover' }}>
      <div className='text-center px-6' style={{ animation: 'slidein 1s ease-out' }}>
        <img
          src='/assets/hr-lettering-logo-alt.svg'
          alt=''
          className='mx-auto my-0 max-w-1/3 mb-4 px-4 sm:px-4 md:px-0'
        />
        <div className='my-8'>
          <div className='text-2xl font-bold'>January 14-15, 2021, 10:30AM-12PM CST</div>
          <div className='mt-1 text-xl max-w-3xl mx-auto px-12'>
            Thanks for joining us and developing applications that rely on simulating human-style
            common sense reasoning using s(CASP)!
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
