import React from 'react'
import Contact from '/contact.svg'

const Contactme = () => {
    return (
        <section className='mb-12 px-4 py-20 paint-bg-section flex flex-col gap-4 justify-center items-center'>
         
         <h4 className='text-lg text-zinc-600'>DROP ME A MESSAGE</h4>

         <img src={Contact} alt="Contact" />

        </section>
    )
}

export default Contactme