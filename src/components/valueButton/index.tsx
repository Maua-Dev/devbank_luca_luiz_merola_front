import { useState } from "react"

type ValueButtonProps = {
    value: string;
};

export function ValueButton({value}:ValueButtonProps) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button className="bg-zinc-950 flex flex-col gap-6 rounded-2xl p-4" onClick={() => setShowModal(true)}>
                <div className="money text-start text-zinc-100 mt-2">
                    <div className="value font-['Inter'] font-light">
                        <span className="text-5xl tracking-tight">
                            {value}
                        </span>
                        <span className="text-xl tracking-tight">
                            ,00
                        </span>
                    </div>
                    <div className="currency font-['Montserrat'] text-3xl">
                        R$
                    </div>
                </div>
                <div className="qty bg-zinc-100 w-full rounded-3xl text-3xl py-2">
                    <span className="font-['Montserrat'] text-zinc-950 mx-12">
                        0
                    </span>
                </div>
            </button>
            {showModal ? (
            <>
            <div className='flex justify-center bg-zinc-950 bg-opacity-50 items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50'>
                <div className="relative w-auto my-6 mx-auto">
                    <div className='rounded-2xl relative flex flex-col w-full bg-zinc-100'>
                            <div className="flex items-start justify-between p-5 mb-20 bg-zinc-950 rounded-t-2xl">
                                <h3 className="text-xl font-[Inter] text-zinc-100 font-semibold">Quantas notas de {value},00 R$?</h3>
                            </div>
                            <div className="counter flex space-x-11 mb-24 align-middle justify-center">
                                <button className="subtract font-[inter] bg-zinc-950 text-zinc-100 text-4xl min-w-16 rounded-xl">
                                    -
                                </button>
                                <div className="current-number font-[montserrat] text-7xl mt-1">
                                    0
                                </div>
                                <button className="add font-[inter] bg-zinc-950 text-zinc-100 text-4xl min-w-16 rounded-xl">
                                    +
                                </button>
                            </div>
                            <div className="flex items-center justify-end p-6">
                                <button
                                    className="text-zinc-950 background-transparent px-6 py-2 text-xl mr-1 mb-1"
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                >
                                    Cancelar
                                </button>
                                <button
                                    className="text-zinc-100 bg-zinc-950 text-xl px-6 py-3 rounded-xl shadowmr-1 mb-1"
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                >
                                    Confirmar
                                </button>
                            </div>
                    </div>
                </div>
            </div>
            </>
        ) : null}
        </>
    )
}
