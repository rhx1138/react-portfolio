import Head from 'next/head'


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
          <ul className="flex items-center text-xl">
          <li className="px-5"><a href="#">Home</a></li>
            <li className="px-5"><a href="#">About</a></li>
            <li className="px-5"><a href="#">Projects</a></li>
            <li className="px-5"><a href="#">Contact</a></li>
          </ul>
        </nav>
      </section>
      </main>

     
    </div>
  )
}
