/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/header";
import ReturnButton from "../../components/returnButton";
import TransactionCard from "../../components/transactionCard";
import { BankContext } from "../../context/bank_context";

export function TransactionHistory() {
    const [history, setHistory] = useState([]);
    const { getHistory } = useContext(BankContext);

    async function dataHistory() {
        try {
            const response = await getHistory();
            console.log(response)
            return response;
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        dataHistory().then((response) => {
            setHistory(response as any);
        });
        console.log(history)
    }, [])
    
    return (
        <>
            <Header/>
            <main className="flex justify-center p-8">
                <section className="flex flex-col w-max space-y-2">
                    <div className="flex flex-col gap-2 mb-8">
                        <h2 className="font-bold font-['Inter'] text-zinc-950 text-2xl">Histórico de Transações</h2>
                    </div>
                    {history.length > 0 && history.map((transaction: any) => {
                        return <TransactionCard json={transaction} />
                    })}
                    <ReturnButton route="/conta"/>
                </section>
            </main>
        </>
    )
}