/* eslint-disable react-hooks/exhaustive-deps */

import { Header } from "../../components/header";
import ImgDeposito from "../../assets/ImgDeposito.png";
import ImgSaque from "../../assets/ImgSaque.png";
import ImgTransferencia from "../../assets/ImgTransferencia.png";
import { useContext, useEffect, useState } from "react";
import { BankContext } from "../../context/bank_context";

export type dataType = {
  name: string,
  current_balance: number,
  agency: string,
  account: string
}

export function Account() {
  const [data, setData] = useState<dataType>({
    name: '',
    current_balance: 0,
    agency: '',
    account: ''
  });

  const { getAccount } = useContext(BankContext);

  async function Account() {
      const response = await getAccount();
      response && setData(response as dataType);
      response && localStorage.setItem('name', (response as dataType).name);
      // console.log(response);
  }

  useEffect(() => {
    Account();
  }, [])

  return (
    <>
      <Header />

      <main className="flex justify-center p-8">
        <section className="max-w-[612px]">
          <div className="flex flex-col gap-2 mb-8">
            <h2 className="font-bold font-['Inter'] text-zinc-950 text-2xl">Conta</h2>
            <span className="font-bold text-3xl font-['Inter'] text-zinc-950">R$ {data.current_balance},00</span>
          </div>

          <section className="flex gap-6 max-md:flex-col">
            <div className="flex flex-col gap-6">
              <a className="bg-black flex rounded-3xl" href="/deposito">
                <span className="text-white text-xl m-4 absolute">
                  {"\\>depósito"}
                </span>
                <img src={ImgDeposito} alt="Depósito" />
              </a>
              <a className="bg-black flex rounded-3xl" href="/saque">
                <span className="text-white text-xl m-4 absolute">
                  {"\\>saque"}
                </span>
                <img src={ImgSaque} alt="Saque" />
              </a>
            </div>
            <a className="bg-black flex rounded-3xl" href="/transacoes">
              <span className="text-white text-xl m-4 absolute">
                {"\\>transações"}
              </span>
              <img src={ImgTransferencia} alt="Transferência" />
            </a>
          </section>

          <input
            className="w-full p-4 text-xl font-light rounded-xl border border-slate-300 mt-8 font-['Inter']"
            type="text"
            placeholder="Coloque seu endpoint aqui"
          />
        </section>
      </main>
    </>
  );
}
