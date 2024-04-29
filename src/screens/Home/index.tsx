import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Home() {
    const [endpoint, setEndpoint] = useState('');

    function acessar() {
        const url = "https://r2tcz6zsokynb72jb6o4ffd5nm0ryfyz.lambda-url.us-west-2.on.aws/";

        if (endpoint === url) {
            toast.success('Bem-Vindo', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setTimeout(() => {
                window.location.href = "/conta";
            }, 3000);
        } else {
            toast.error('endpoint inválido', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }

    return (
        <main className="bg-zinc-950 min-h-screen text-white flex flex-col justify-center items-center gap-8">
            <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
            <h1 className="text-7xl text-zinc-50">{"<dev.bank>"}</h1>
            <input onChange={(e) => setEndpoint(e.target.value)} className="w-1/2 p-4 text-xl font-semibold text-black bg-zinc-50 rounded-xl" type="text" placeholder="http://" />
            <button onClick={() => acessar()} className="p-2 border border-white rounded-lg font-semibold duration-150 hover:bg-white hover:text-black">
                <span className="text-xl">Acessar</span>
            </button>
        </main>
    );
}