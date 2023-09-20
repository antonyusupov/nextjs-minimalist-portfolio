import Image from 'next/image'
import Link from 'next/link'
import Navbar from './components/navbar/Navbar'
import Form from './components/Form'
import CardDisplayer from './utils/utils'
import TechStack from './components/techStach/TechStack'


export default function Home() {
  return (
    <div className= 'relative'>
        <Navbar />
        <div className='absolute p-20 bg-custom_orange top-36 right-20 blur-md rounded-3xl rotate-12'></div>
        <div className='absolute'></div>
      <main id='home' className="flex min-h-screen flex-col items-center justify-center relative">
        <div className='bg-black w-screen px-12 py-20 flex flex-col justify-center items-center z-10'>
          <h3 className='text-4xl md:text-5xl lg:text-6xl'>Designer | <span className='text-custom_orange'>Developer</span> <br></br> <span className='text-3xl md:text-4xl lg:text-5xl'>I&apos;ll Design and Deploy your Website.</span></h3>
          <button className='py-1 px-2 border border-white rounded-xl mt-20 md:text-lg'><Link href='#contact'>Hire Me</Link></button>
        </div>
        <div className='absolute p-20 bg-custom_orange bottom-36 left-14 blur-md rounded-3xl rotate-12'></div>
      </main>
      <section className='min-w-screen mx-3 my-24 relative flex flex-col items-center'>
        <h2 className='text-4xl font-bold my-12'>Tech Stack</h2>
        <div className=' my-12'>
          <TechStack />
        </div>
        <div className='absolute p-10 bg-custom_light_gray blur-2xl left-0 bottom-0 -z-50'></div>
        <div className='absolute p-10 bg-custom_light_gray blur-3xl top-0 right-0 -z-50'></div>
      </section>
      <section id='about' className='flex flex-col items-center justify-center px-8 mb-40 relative'>
        <div className='absolute bg-custom_orange bottom-0 right-0 blur-2xl p-4 -z-10'></div>
        <div className='absolute bg-custom_orange bottom-0 left-0 blur-2xl p-4 -z-10'></div>
        <div className='flex flex-col justify-center items-center'>
          <div className='pb-16'>
            <Image
              src='images/about.svg'
              width={150}
              height={150}
              alt='about-logo'
            />
          </div>
          <div className='flex flex-col justify-center items-center'>
            <h2 className='text-4xl mb-7 font-bold'>About</h2>
            <p className='text-lg text-center md:w-2/3 leading-10 lg:w-2/4'>I am Full-Stack Developer. I&apos;ll design unique website and deploy to internet. Your SEO also will be organized for more traffic. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur eius, optio dolore asperiores obcaecati eos atque alias quibusdam illum consequatur similique animi laboriosam repudiandae delectus aut sit! Suscipit tenetur alias perferendis quis doloribus blanditiis quod minus, odit omnis reiciendis nostrum dolore veniam corrupti quae. Rem.</p>
          </div>
        </div>
      </section>
      <section id='portfolio' className='flex min-h-screen flex-col items-center justify-center mt-8'>
            <h2 className='text-4xl font-semibold my-4'>Portfolio</h2>
            <div className='mx-2'>
              <CardDisplayer />
            </div>
      </section>
      <section id='contact' className='flex min-h-screen flex-col items-center justify-center relative'>
        <div className='absolute bg-custom_orange top-10 left-0 blur-2xl p-8 -z-10'></div>
        <div className='absolute bg-custom_orange bottom-20 right-0 blur-2xl p-4 -z-10'></div>
        <div className='absolute bg-custom_orange top-10 right-36 blur-2xl p-4 -z-10'></div>
        <h2 className='text-3xl mb-7'>Contact</h2>
        <Form />
      </section>
      <footer className='w-full py-8 flex justify-center items-center border border-t-custom_orange border-x-custom_dark_gray border-b-custom_dark_gray'>
        <div className='flex'>
          <p className=' p-2 ml-3 rounded-3xl bg-custom_orange md:ml-9'><Link href='/'>GitHub</Link></p>
          <p className=' p-2 ml-3 rounded-3xl bg-custom_orange md:ml-9'><Link href='/'>Twitter</Link></p>
          <p className=' p-2 ml-3 rounded-3xl bg-custom_orange md:ml-9'><Link href='/'>LinkedIn</Link></p>
          <p className=' p-2 ml-3 rounded-3xl bg-custom_orange md:ml-9'><Link href='/'>Pinterest</Link></p>
        </div>
      </footer>
    </div>

  )
}
