import { FC } from 'react'
import Head from 'next/head'

const Discord: FC = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <Head>
        <meta httpEquiv='refresh' content='0; url="https://discord.gg/n5xYkuD8Dp"' />
      </Head>
      <h1 className='font font-medium'>Loading Discord...</h1>
    </div>
  )
}

export default Discord
