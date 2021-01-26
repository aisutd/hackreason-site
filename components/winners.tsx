import { FC } from 'react'
import Link from 'next/link'
import classNames from 'classnames'

interface WinnerCardProps {
  place?: string
  name: string
  description: string
  link: string
}

const WinnerCard: FC<WinnerCardProps> = ({
  place = null,
  name,
  description,
  link,
}: WinnerCardProps) => {
  return (
    <div className='p-6 bg-darkcapri bg-opacity-40 rounded-md col-span-1'>
      {place && (
        <div
          className={classNames(
            'rounded-full',
            'w-14',
            'h-14',
            'text-2xl',
            'flex',
            'items-center',
            'justify-center',
            'text-black',
            'font-bold',
            'font-system',
            place.includes('1') && 'bg-yellow-400',
            place.includes('2') && 'bg-gray-100',
            place.includes('3') && 'bg-yellow-600',
            'text-opacity-60',
            'select-none',
            'shadow-lg',
            'relative',
            '-mx-10',
            '-my-10'
          )}>
          {place}
        </div>
      )}
      <h2 className='mt-6 text-center z-30 text-xl font-bold mb-2'>{name}</h2>
      <p className='text-md'>{description}</p>
      <p className='mt-2'>
        <a href={link} className='text-capri font-semibold'>
          View &rarr;
        </a>
      </p>
    </div>
  )
}

const Winners: FC = () => {
  return (
    <div className='mt-4 mx-auto max-w-4xl mb-32'>
      <h1 className='text-4xl font-bold text-center mb-2'>Winning Projects</h1>
      <h1 className='text-lg italic font-light text-center mb-16'>
        All submissions are viewable <Link href='/submissions'>here</Link>.
      </h1>
      <div className='grid grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-2'>
        <WinnerCard
          place='1'
          name='Emergency-Bot'
          description='An application to guide 911 callers through emergencies'
          link='//devpost.com/software/emergency-bot-9ynzha'
        />
        <WinnerCard
          place='2'
          name='Skincare Recommendation System'
          description="An application to recommend skincare products based on a customer's profile"
          link='//devpost.com/software/skincare-recommendation-system'
        />
        <WinnerCard
          place='2'
          name='EPIC'
          description='An application that can track and detect which stage of psychosis the user is in'
          link='//devpost.com/software/epic'
        />
        <WinnerCard
          place='3'
          name='RESTD'
          description='A zero-day threat detection and patch recommendation engine'
          link='//devpost.com/software/restd-reasoning-engine-for-smart-threat-detection'
        />
      </div>
      <div className='mt-8'>
        <h3 className='text-xl font-bold mb-2'>Honorable Mentions</h3>
        <div className='grid grid-cols-1 gap-3 sm:grid-cols-1 lg:grid-cols-2'>
          <a
            href='//devpost.com/software/automated-genome-feature-discovery'
            className='text-capri font-semibold'>
            Automated Genome Feature Discovery
          </a>
          <a href='//devpost.com/software/pawlog' className='text-capri font-semibold'>
            Pawlog
          </a>
        </div>
      </div>
    </div>
  )
}

export default Winners
