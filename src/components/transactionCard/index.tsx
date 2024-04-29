/* eslint-disable @typescript-eslint/no-explicit-any */

const TransactionCard = (json: any) => {
    
    return (
        <>
            <button className="bg-zinc-950 flex flex-col gap-6 rounded-2xl p-4 max-w-[612px]">
                <div className="money text-start text-zinc-100 mt-2">
                    <div className="flex justify-between mb-4">
                        <div className="transaction-type font-['Montserrat'] font-light text-2xl tracking-tight ">
                            {json.json.type === "deposit" ? "Depósito" : json.json.type === "withdraw" ? "Saque" : ""}
                        </div>
                        <div className="curr-balance font-['Inter'] font-light text-l">
                            {new Date(json.json.timestamp).getDate().toLocaleString() + "/" + new Date(json.json.timestamp).getMonth().toLocaleString() + "/" + new Date(json.json.timestamp).getFullYear()}
                        </div>
                    </div>
                    <div className="flex space-x-72">
                        <div className="value font-['Inter'] font-light">
                            <span className="currency font-['Montserrat'] text-3xl">
                                R$
                            </span>
                            <span className="text-3xl ml-2 tracking-tight">
                                {json.json.value}
                            </span>
                            <span className="text-xl tracking-tight">
                                ,00
                            </span>
                        </div>
                        <div className="flex flex-col text-end">
                            <div className="curr-balance font-['Montserrat'] font-light text-sm">
                                Saldo no momento:
                            </div>
                            <div className="curr-balance font-['Inter'] font-light text-l">
                                R$ {json.json.current_balance},00
                            </div>
                        </div>
                    </div>
                </div>
            </button>
        </>
    )
}

export default TransactionCard;