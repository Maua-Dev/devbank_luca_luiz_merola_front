export function Home() {
    return (
        <main className="bg-black min-h-screen text-white flex flex-col justify-center items-center gap-8">
            <h1 className="text-7xl">{"<dev.bank>"}</h1>
            <input className="w-1/2 p-4 text-xl font-semibold text-black rounded-xl" type="text" placeholder="http://" />
        </main>
    )
}