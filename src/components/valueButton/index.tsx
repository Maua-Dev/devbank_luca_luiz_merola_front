type ValueButtonProps = {
    value: string;
};

export function ValueButton({value}:ValueButtonProps) {
    return (
        <button className="bg-black flex flex-col gap-6 rounded-2xl p-4">
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
    )
}