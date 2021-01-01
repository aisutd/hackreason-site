import { FC } from 'react'
import FAQCard from './faq-card'

const FAQ: FC = () => {
  return (
    <div className='mx-auto mt-4 mb-16'>
      <h1 className='text-4xl font-bold text-center mb-8'>FAQs</h1>
      <FAQCard
        question={'What is s(CASP)?'}
        answer={
          <p>
            s(CASP) is a system developed by UT Dallas in collaboration with{' '}
            <a href='//software.imdea.org/~joaquin.arias/' target='_blank' rel='noreferrer'>
              IMDEA, Spain
            </a>{' '}
            for automating common sense reasoning. Professor Gupta will give two 2-hour tutorials to
            provide the technological background, including on how to use the s(CASP) system, a week
            prior to the event. The team in Spain will be running a parallel hackathon at the same
            time, and Spanish students will be joining for the opening ceremony and other workshops.
          </p>
        }
      />
      <FAQCard
        question={'Who can participate?'}
        answer='The hackathon is open only to current students at The University of Texas at Dallas.'
      />
      <FAQCard
        question={'What skills do I need to participate?'}
        answer='The only required skill is proficiency in programming! Professor Gupta’s research group
	  members will be present throughout the hackathon to provide advice and help.'
      />
      <FAQCard
        question={'Are there prizes?'}
        answer='The top three UTD teams will win prizes. The first place team will win
$600, second place will win $400, and third place will win $200.'
      />
      <FAQCard
        question='Has HackReason been conducted before?'
        answer={
          <p>
            The first Automated Reasoning hackathon at UTD was organized in 2016 in a similar manner
            and sponsored by Prof. Gopal Gupta. You can see the projects{' '}
            <a href='https://hackai16.devpost.com/project-gallery' target='_blank' rel='noreferrer'>
              here
            </a>
            !
          </p>
        }
      />
      <FAQCard
        question='What is the Amazon Alexa Socialbot Challenge?'
        answer={
          <p>
            The Alexa Prize, launched in 2016, is a competition for university students dedicated to
            advancing the field of conversational AI. Teams are challenged to design socialbots that
            Alexa customers can interact with via Alexa-enabled devices. UT Dallas has placed in one
            of the top <span className='font-semibold'>9 teams worldwide</span> for this
            competition! You can learn more about the Amazon Alexa Socialbot challenge{' '}
            <a href='https://tinyurl.com/amazon-alexa-challenge' target='_blank' rel='noreferrer'>
              here.
            </a>
          </p>
        }
      />
      <FAQCard
        question='What is "common sense reasoning"?'
        answer={
          <p>
            You can watch a video introduction on the topic{' '}
            <a href='https://www.youtube.com/watch?v=IHE63fxpHCg' target='_blank' rel='noreferrer'>
              here
            </a>
            .
          </p>
        }
      />
    </div>
  )
}

export default FAQ
