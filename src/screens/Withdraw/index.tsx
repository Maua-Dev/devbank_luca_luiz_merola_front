/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/header";
import ValuePanel from "../../components/valuePanel";
import { BankContext } from "../../context/bank_context";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { dataType } from "../Account";
import { DepositType } from "../../api/repositories/bank_repository_http";

const valueQtys: { [key: number]: number } = {
    2: 0,
    5: 0,
    10: 0,
    20: 0,
    50: 0,
    100: 0,
    200: 0
}

export function Withdraw() {
    const { postWithdraw, getAccount } = useContext(BankContext);
    const [data, setData] = useState<dataType>({} as dataType);

    const [withdrawValue, setWithdrawValue] = useState(0);
    const possibleQtys = [2, 5, 10, 20, 50, 100, 200]

    function updateWithdrawValue() {
        let newWithdrawValue = 0;
        let index = 0;
        for (const value of Object.values(valueQtys)) {
            newWithdrawValue += value*possibleQtys[index];
            index += 1;
        }
        setWithdrawValue(newWithdrawValue);
    }

    function setValueQty(value: number, qty: number) {
        valueQtys[value] = qty;
        updateWithdrawValue();
    }

    function withdraw() {
        if(valueQtys[2] === 0 && valueQtys[5] === 0 && valueQtys[10] === 0 && valueQtys[20] === 0 && valueQtys[50] === 0 && valueQtys[100] === 0 && valueQtys[200] === 0) {
            toast.error('Selecione pelo menos uma cédula para sacar', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return;
        }
        postWithdraw(valueQtys as DepositType);
        toast.success('Saque realizado com sucesso', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        setTimeout(() => {
            window.location.href = "/conta"
        }, 3000)
    }

    async function account() {
        const response = await getAccount();
        setData(response as dataType);
    }

    useEffect(() => {
        account();
    }, [])

    return (
        <>
            <Header/>

            <main className="flex justify-center p-8">
                <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
                <section className="flex flex-col">
                    <div className="flex space-x-[49%]">
                        <div className="flex flex-col gap-2 mb-8">
                            <h2 className="font-bold font-['Inter'] text-zinc-950 text-2xl">Conta</h2>
                            <span className="font-bold text-3xl font-['Inter'] text-zinc-950">R$ {data.current_balance},00</span>
                        </div>
                        <div className="flex flex-col gap-2 mb-8">
                            <h2 className="font-bold font-['Inter'] text-zinc-950 text-2xl">Quantidade</h2>
                            <span className="font-bold text-3xl font-['Inter'] text-zinc-950">R$ {withdrawValue},00</span>
                        </div>
                    </div>
                    <ValuePanel setValueQty={setValueQty} functionButton={withdraw} text={'Sacar'}/>
                </section>
            </main>
        </>
    )
}