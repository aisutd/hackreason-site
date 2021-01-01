import { FC } from 'react'
import Link from 'next/link'

const Hero: FC = () => {
  return (
    <div
      className='w-full h-screen flex items-center justify-center bg-cover bg-opacity-30'
      style={{ background: 'url("/assets/grid-bg-2.jpg")', backgroundSize: 'cover' }}>
      <div className='bg-graay-600 text-center' style={{ animation: 'slidein 1s ease-out' }}>
        <img
          src='/assets/hr-lettering-logo-alt.svg'
          alt=''
          className='mx-auto my-0 max-w-1/3 mb-4'
        />
        <div className='mt-0'>
          <div className='text-2xl font-bold'>January 14-15, 2021, 12PM-12PM CST</div>
          <div className='text-xl max-w-3xl mx-auto'>
            Join us on World Logic Day for a 24-hour hackathon that challenges participants to
            develop applications that rely on simulating human-style common sense reasoning using
            the s(CASP) system!
          </div>
          <Link href='/apply'>
            <button className='button mt-6 rounded-full px-8 py-2 text-lg bg-darkcapri hover:bg-blue-600 text-white mx-auto transition-colors'>
              Apply Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero