import { FC } from 'react'
import Link from 'next/link'

const Footer: FC = () => {
  return (
    <footer className='mt-16 mb-8 text-center'>
      &copy; 2021-2022 <Link href='//aisutd.org'>Artificial Intelligence Society</Link>. All rights
      reserved.
    </footer>
  )
}

export default Footer
