export default function Home() {
  return (
    <main className=" grid grid-cols-2 min-h-screen">
      <div className="flex justify-start flex-col p-16">
        <div>
          <p>Tela de login</p>
        </div>
      </div>
      <div className="flex flex-col p-16">
        <div className="flex flex-1 items-center justify-center">
          <p className="text-center leading-relaxed w-[360px]">
            Texto dizendo alguma coisa para{' '}
            <a className="underline hover:text-gray-50" href="">
              criar agora
            </a>
          </p>
        </div>
      </div>
    </main>
  )
}
