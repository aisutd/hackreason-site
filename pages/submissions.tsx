import { FC } from 'react'
import Head from 'next/head'

const Submissions: FC = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <Head>
        <meta
          httpEquiv='refresh'
          content='0; url=https://utd-hackreason-2021.devpost.com/project-gallery'
        />
      </Head>
      <h1 className='font font-medium'>Loading submissions...</h1>
    </div>
  )
}

export default Submissions
