import { FC, ReactNode } from 'react'
import Link from 'next/link'
import classNames from 'classnames'

interface ScheduleCardProps {
  title: string
  datetime: string
  presenter: string
  description?: string | ReactNode
  joinLink?: string
  happening?: boolean
}

const ScheduleCard: FC<ScheduleCardProps> = (props: ScheduleCardProps) => {
  const ui = (
    <button
      className={classNames(
        'my-4',
        'px-8',
        'py-4',
        'w-full',
        'border-2',
        'border-gray-100',
        props.joinLink ? 'hover:border-darkcapri' : 'hover:border-gray-300',
        props.joinLink ? 'hover:bg-darkcapri' : 'hover:bg-gray-300',
        'hover:text-black',
        'transition-all',
        'flex',
        'flex-row',
        'items-center',
        'justify-between',
        'select-none',
        props.joinLink ? 'cursor-pointer' : 'cursor-default',
        'text-left',
        props.happening && 'bg-darkcapri',
        props.happening && 'text-black',
        props.happening && 'border-darkcapri'
      )}>
      <div>
        <h4 className='font-bold text-lg'>{props.title}</h4>
        <h4 className='text-md font-medium'>
          Presented by {props.presenter} &bull; {props.datetime}
        </h4>
        {props.description && <p className='text-justify'>{props.description}</p>}
      </div>
      {props.joinLink && <div className='text-lg my-2 ml-8 text-center'>&rarr;</div>}
    </button>
  )
  if (props.joinLink) return <Link href={props.joinLink}>{ui}</Link>
  else return ui
}

const Schedule: FC = () => {
  return (
    <div className='mt-4 mx-auto max-w-4xl mb-32'>
      <h1 className='text-4xl font-bold text-center mb-2'>Schedule</h1>
      <h1 className='text-lg italic font-light text-center mb-8'>
        Click any workshop to go to its recording. Workshop code is available{' '}
        <Link href='/code'>here</Link>.
      </h1>
      <div className='py-2 font-semibold text-xl'>Preparatory Workshops</div>
      <ScheduleCard
        title='Intro to Logic Programming & Prolog'
        datetime='January 6, 2021 @ 12:00-2:30 PM CST'
        presenter='Dr. Gopal Gupta'
        joinLink='//web.microsoftstream.com/video/5677ed2d-08ac-4f92-aaad-960793537ded'
      />
      <ScheduleCard
        title='Intro to Answer Set Programming, s(CASP), & Automated Commonsense
		Reasoning'
        datetime='January 8, 2021 @ 12:00-2:30 PM CST'
        presenter='Dr. Gopal Gupta'
        joinLink='//web.microsoftstream.com/video/cf31ca36-7e89-4d9e-a1b8-edbb80440574'
      />
      <div className='py-2 font-semibold text-xl'>Opening Ceremony</div>
      <ScheduleCard
        title='HackReason Opening Ceremony'
        datetime='January 14, 2021 @ 10:30 AM-12:00 PM CST'
        presenter='Dr. Robert Kowalski'
        description='Kick off HackReason by hearing from Dr. Kowalski, Professor Emeritus and Distinguished Research Fellow at Imperial College London (and the creator of Prolog, a programming language used for AI).'
        joinLink='//utdallas.app.box.com/s/ngsyloscj5sk24uh3axexxz451o74z0u'
      />
      <div className='py-2 font-semibold text-xl'>Hackathon Workshops</div>
      <ScheduleCard
        title='Answer Set Programming for the Amazon Alexa Socialbot Challenge 4'
        datetime='January 14, 2021 @ 4:00-4:30 PM CST'
        presenter='Kinjal Basu, UT Dallas PhD Student'
        description="The Amazon Alexa Socialbot Challenge is a competition dedicated to advancing the field of conversational AI, for which UTD is a top 9 contender. Hear about the competition and the team's work from the student lead!"
        joinLink='//web.microsoftstream.com/video/e925c127-6a4d-456a-8da8-477ba27cfb07'
      />
      <ScheduleCard
        title='Explainable AI: An Introduction'
        datetime='January 14, 2021 @ 8:00-8:30 PM CST'
        presenter='Dr. Farhad Shakerin, Microsoft'
        description={`Dr. Shakerin is a UTD alum (PhD, Spring 2020) and will present an introductory tech talk on the field of artificial intelligence! This is a great workshop to learn more about the topic in general, and hear about Dr. Shakerin's background.`}
        joinLink='//web.microsoftstream.com/video/ba953952-205b-4a7f-b24e-d0af07643833'
      />
    </div>
  )
}

export default Schedule
