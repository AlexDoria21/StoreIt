import React from 'react'
import Image from 'next/image'

const Layout = ({ children } : {children: React.ReactNode}) => {
  return (
    <div className='flex min-h-screen'>
    <section className="bg-brand p-10">
        <div>
            <Image
             src="/assets/icons/logo-full.svg"
             alt="logo"
             width={234}
             height={84}
             className="h-auto"
            />

            <div className="space-y-5 text-white">
                <h1 className="h1">Maneja tus archivos de la mejor manera</h1>
                <p className="body-1">
                    Este es el mejor lugar donde puedes almacenar todos tus documentos.
                </p>
            </div>
            <Image
             src="/assets/images/files.png"
             alt="Files"
             width={342}
             height={342}
             className="transition-all hover:rotate-2 hover:scale-105"
            />
        </div>
    </section>
    {children}
    </div>
  )
}

export default Layout