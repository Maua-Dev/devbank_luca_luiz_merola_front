import { Header } from "../../components/header";

export function Account() {
  return (
    <>
      <Header />

      <main className="flex justify-center p-8">
        <section className="mt-8">
          <div className="flex flex-col gap-2 mb-8">
            <h2 className="font-semibold text-2xl">Conta</h2>
            <span className="font-bold text-3xl">R$ 1.356,98</span>
          </div>

          <section className="flex gap-12 max-md:flex-col">
            <div className="flex flex-col gap-12">
              <button className="bg-black flex rounded-3xl">
                <span className="text-white text-xl m-4 absolute">
                  {"\\> depósito"}
                </span>
                <img src={ImgDeposito} alt="" />
              </button>
              <button className="bg-black flex rounded-3xl">
                <span className="text-white text-xl m-4 absolute">
                  {"\\> saque"}
                </span>
                <img src={ImgSaque} alt="" />
              </button>
            </div>
            <button className="bg-black flex rounded-3xl">
              <span className="text-white text-xl m-4 absolute">
                {"\\> transferência"}
              </span>
              <img src={ImgTransferencia} alt="" />
            </button>
          </section>

          
        </section>
      </main>
    </>
  );
}
