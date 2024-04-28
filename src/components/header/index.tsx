import { useEffect, useState } from "react"

export function Header() {
    const [name, setName] = useState('')

    useEffect(() => {
        const localName = localStorage.getItem('name')
        setName(localName || '')
    }, [])

    return (
        <header className="bg-zinc-950 text-white flex flex-col max-h-48 gap-8 p-8">
            <h1 className="text-3xl tracking-tight font-light font-['Montserrat'] text-zinc-100">{"<dev.bank>"}</h1>
            <p className="text-xl font-['Inter'] text-zinc-100">Olá, {name}</p>
        </header>
    )
}