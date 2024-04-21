import { Header } from "../../components/header";
import ImgDeposito from "../../assets/ImgDeposito.png";
import ImgSaque from "../../assets/ImgSaque.png";
import ImgTransferencia from "../../assets/ImgTransferencia.png";

export function Account() {
  return (
    <>
      <Header />

      <main className="flex justify-center p-8">
        <section className="max-w-[612px]">
          <div className="flex flex-col gap-2 mb-8">
            <h2 className="font-bold font-['Inter'] text-zinc-950 text-2xl">Conta</h2>
            <span className="font-bold text-3xl font-['Inter'] text-zinc-950">R$ 1.356,98</span>
          </div>

          <section className="flex gap-6 max-md:flex-col">
            <div className="flex flex-col gap-6">
              <button className="bg-black flex rounded-3xl">
                <span className="text-white text-xl m-4 absolute">
                  {"\\>depósito"}
                </span>
                <img src={ImgDeposito} alt="Depósito" />
              </button>
              <button className="bg-black flex rounded-3xl">
                <span className="text-white text-xl m-4 absolute">
                  {"\\>saque"}
                </span>
                <img src={ImgSaque} alt="Saque" />
              </button>
            </div>
            <button className="bg-black flex rounded-3xl">
              <span className="text-white text-xl m-4 absolute">
                {"\\>transferência"}
              </span>
              <img src={ImgTransferencia} alt="Transferência" />
            </button>
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
