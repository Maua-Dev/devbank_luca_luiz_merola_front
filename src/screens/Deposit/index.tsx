import { Header } from "../../components/header";
import { ValuePanel } from "../../components/valuePanel";

export function Deposit() {
    return (
        <>
            <Header/>

            <main className="flex justify-center p-8">
                <section className="flex flex-col">
                    <div className="flex space-x-[49%]">
                        <div className="flex flex-col gap-2 mb-8">
                            <h2 className="font-bold font-['Inter'] text-zinc-950 text-2xl">Conta</h2>
                            <span className="font-bold text-3xl font-['Inter'] text-zinc-950">R$ 1.356,98</span>
                        </div>
                        <div className="flex flex-col gap-2 mb-8">
                            <h2 className="font-bold font-['Inter'] text-zinc-950 text-2xl">Quantidade</h2>
                            <span className="font-bold text-3xl font-['Inter'] text-zinc-950">R$ 0,00</span>
                        </div>
                    </div>
                    <ValuePanel type="depositar"/>
                </section>


            </main>
        </>
    )
}