import Image from "next/image"
export default function Home() {
  return (
    <main>
      {/* hero section */}
      <section className="flex gap-6 items-center mt-10 ml mx-10">
        {/* left side */}
        <div className="flex-1" >
          <h1 className="font-bold text-3xl">Hi I'm Aqsa Shakeel</h1>
          <p className="text-lg mt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam veniam neque a aspernatur magnam incidunt non, saepe facilis dolor. Mollitia expedita perferendis labore quidem voluptas amet, sunt in laborum recusandae.</p>
          <button className="bg-gray-900 py-2 mt-6 px-4 text-white">zShop Now!</button>
        </div>

        {/* right side */}
        <div className="flex-1 mt-16">
          <Image
          width={400} height={300}
          src="/bg.jpeg" alt="background" />
        </div>
        
      </section>
      {/* about section */}
      {/* services section */}
    </main>
  )
}