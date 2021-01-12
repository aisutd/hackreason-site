import { FC } from 'react'
import Head from 'next/head'

const Welcome: FC = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <Head>
        <meta
          httpEquiv='refresh'
          content='0; url="https://www.notion.so/HackReason-Welcome-Packet-bce24bd6dbd34d70aa89c1f6b1f8ea3d"'
        />
      </Head>
      <h1 className='font font-medium'>Loading welcome packet...</h1>
    </div>
  )
}

export default Welcome
