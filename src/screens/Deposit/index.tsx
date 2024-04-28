import { useState } from "react";
import { Header } from "../../components/header";
import ValuePanel from "../../components/valuePanel";
import DepositButton from "../../components/depositButton";

const valueQtys: { [key: number]: number } = {
    2: 0,
    5: 0,
    10: 0,
    20: 0,
    50: 0,
    100: 0,
    200: 0
}

export function Deposit() {
    const [depositValue, setDepositValue] = useState(0);

    const possibleQtys = [2, 5, 10, 20, 50, 100, 200]

    function updateDepositValue() {
        let newDepositValue = 0;
        let index = 0;
        for (const value of Object.values(valueQtys)) {
            newDepositValue += value*possibleQtys[index];
            index += 1;
        }
        setDepositValue(newDepositValue);
    }

    function setValueQty(value: number, qty: number) {
        valueQtys[value] = qty;
        updateDepositValue();
    }

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
                            <span className="font-bold text-3xl font-['Inter'] text-zinc-950">R$ {depositValue},00</span>
                        </div>
                    </div>
                    <ValuePanel setValueQty={setValueQty} functionButton={DepositButton}/>
                </section>
            </main>
        </>
    )
}