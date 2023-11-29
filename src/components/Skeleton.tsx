export function Skeleton() {
  return (
    <main className=" relative bg-background px-6 lg:px-24 xl:px-32  flex flex-col  animate-pulse  ">
      <header className=" mt-12 items-center w-full gap-4 flex flex-col lg:flex-row justify-between ">
        <div className="bg-zinc-200 w-36 h-14" />
        <div className="bg-zinc-200 w-48 h-14" />
      </header>
      <div className="flex h-screen mt-20 flex-col lg:flex-row w-full gap-20">
        <div className=" bg-zinc-200 w-full h-1/2" />
        <div className=" bg-zinc-200 w-full lg:w-3/4 h-1/2" />
      </div>
    </main>
  )
}
