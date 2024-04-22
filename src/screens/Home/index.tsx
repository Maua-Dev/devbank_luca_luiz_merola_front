export function Home() {
    return (
        <main className="bg-zinc-950 min-h-screen text-white flex flex-col justify-center items-center gap-8">
            <h1 className="text-7xl text-zinc-50">{"<dev.bank>"}</h1>
            <input className="w-1/2 p-4 text-xl font-semibold text-zinc-100 bg-zinc-50 rounded-xl" type="text" placeholder="http://" />
        </main>
    );
}