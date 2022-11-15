import Head from 'next/head'
import Image from "next/image";
import web1 from "../public/web1.jpg";
import web2 from "../public/web2.jpg";
import web3 from "../public/web3.jpg";
import web4 from "../public/web4.jpg";



export default function Home() {
  return (
    <div >
      <Head>
        <title>Ryan Hendrix Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" /> 
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin /> 
        <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@900&display=swap" rel="stylesheet" /> 
      </Head>

      <main className="bg-white px-10">
      <section className="min-h-screen">
        <nav className="p-10 mb-12 flex justify-between">
          <h1 className="text-5xl bg-cyan-300 font-Kanit">Ryan Hendrix</h1>
          <ul className="flex items-center text-xl font-Kanit">
            <li className="px-5"><a href="#">About</a></li>
            <li className="px-5"><a href="#">Projects</a></li>
            <li className="px-5"><a href="#">Contact</a></li>
          </ul>
        </nav>
        <div className="px-10">
          <h1 className="text-3xl">Developer and designer</h1>
          <p className="text-gray-600">Freelancer providing services for web development and design content needs.<br></br>
          Please see my work below.</p>
        </div>
      </section>
      <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for agencies
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              web design and development, and content creation.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
              />
            </div>
          </div>
        </section>
      </main>

     
    </div>
  )
}
