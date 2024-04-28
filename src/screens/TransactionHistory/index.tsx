import { Header } from "../../components/header";
import ReturnButton from "../../components/returnButton";
import TransactionCard from "../../components/transactionCard";

export function TransactionHistory() {
    return (
        <>
            <Header/>
            <main className="flex justify-center p-8">
                <section className="flex flex-col w-max space-y-2">
                    <div className="flex flex-col gap-2 mb-8">
                        <h2 className="font-bold font-['Inter'] text-zinc-950 text-2xl">Histórico de Transações</h2>
                    </div>
                    <TransactionCard/>
                    <TransactionCard/>
                    <TransactionCard/>
                    <ReturnButton route="/conta"/>
                </section>
            </main>
        </>
    )
}