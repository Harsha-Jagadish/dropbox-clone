import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

function Header() {
  return (
    <header className='flex items-center justify-between'>
        <Link href="/" 
        className="flex items-center space-x-2">"

            <div>
                <div className='bg-[#0160FE] w-fit'>
                <Image
                src="https://www.shareicon.net/download/2016/07/13/606936_dropbox_2048x2048.png"
                alt="logo"
                className='invert'
                height={50}
                width={50}
                />
            </div>
            </div>
            
        </Link>
    
    Header

    </header>
  )
}

export default Header