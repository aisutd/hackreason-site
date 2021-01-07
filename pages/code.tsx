import { FC } from 'react'
import Head from 'next/head'

const Code: FC = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <Head>
        <meta
          httpEquiv='refresh'
          content='0; url=https://github.com/aisutd/hackreason-workshops-2021'
        />
      </Head>
      <h1 className='font font-medium'>Loading code repository...</h1>
    </div>
  )
}

export default Code
