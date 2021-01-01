import { FC } from 'react'
import FAQCard from './faq-card'

const FAQ: FC = () => {
  return (
    <div className='mx-auto mt-4 mb-16'>
      <h1 className='text-4xl font-bold text-center mb-8'>FAQs</h1>
      <FAQCard
        question={'What is s(CASP)?'}
        answer='s(CASP) is a system developed at UT Dallas for automating common sense reasoning.
	  Professor Gupta will give two 2-hour tutorials to provide the technological background,
	  including on how to use the s(CASP) system, a week prior to the event.'
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
            <a href='https://hackai16.devpost.com/project-gallery'>here</a>!
          </p>
        }
      />
      <FAQCard
        question='What is "common sense reasoning"?'
        answer={
          <span>
            You can watch a video introduction on the topic{' '}
            <a href='https://www.youtube.com/watch?v=IHE63fxpHCg'>here</a>.
          </span>
        }
      />
    </div>
  )
}

export default FAQ
