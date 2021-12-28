import { FC } from 'react'
import Link from 'next/link'

const Hero: FC = () => {
  return (
    <div
      className='w-full h-screen flex items-center justify-center bg-cover bg-opacity-30'
      style={{ background: 'url("/assets/grid-bg-2.jpg")', backgroundSize: 'cover' }}>
      <div className='text-center px-6' style={{ animation: 'slidein 1s ease-out' }}>
        <img
          src='/assets/hr-lettering-logo-alt.svg'
          alt=''
          className='mx-auto my-0 max-w-1/3 mb-4'
        />
        <div className='my-8'>
          <div className='text-2xl font-bold'>January 14-15, 2022, 10:30AM-12PM CST</div>
          <div className='mt-1 text-xl max-w-3xl mx-auto px-12'>
            HackReason is back! Join us on World Logic Day for a 24-hour hackathon that challenges
            participants to develop applications that rely on simulating human-style common sense
            reasoning using the s(CASP) system!
          </div>
          <Link href='/apply'>
            <button className='button mt-6 rounded-full px-8 py-2 text-lg bg-gray-700 hover:bg-gray-700 text-white mx-auto transition-colors'>
              Registration Opening Soon
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
