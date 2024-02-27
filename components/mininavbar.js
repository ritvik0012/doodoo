import Image from 'next/image'
export default function Mininavbar() {
    return (
    <div className="flex lg:flex-1 items-center justify-center mt-8">
  <a href="/" className="flex items-center -m-1.5 p-1.5">
    <div className="flex items-center">
      <span className="ml-3 text-3xl font-bold">Doodoo.</span>
      <Image className="h-20 w-auto" src="/doodoo.png" alt="Your Company" width={700} height={800} />
    </div>
  </a>
</div>
    )
}