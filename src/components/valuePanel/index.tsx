import ReturnButton from "../returnButton";
import ValueButton from "../valueButton";
interface ValuePanelProps {
    setValueQty: (value: number, qty: number) => void;
    functionButton: () => void;
    text: string;
}

const ValuePanel: React.FC<ValuePanelProps> = ({ setValueQty, functionButton, text }) => {
    return (
        <div className="flex flex-col gap-2 justify-center">
            <div className="flex gap-2">
                <ValueButton setValueQty={setValueQty} value={2} />
                <ValueButton setValueQty={setValueQty} value={5} />
                <ValueButton setValueQty={setValueQty} value={10} />
                <ValueButton setValueQty={setValueQty} value={20} />
            </div>
            <div className="flex gap-2">
                <ValueButton setValueQty={setValueQty} value={50} />
                <ValueButton setValueQty={setValueQty} value={100} />
                <ValueButton setValueQty={setValueQty} value={200} />
                <button onClick={()=>functionButton()} className="bg-black gap-6 rounded-2xl p-4 max-w-40 min-w-40">
                    <div className="font-['Montserrat'] text-2xl origin-bottom-left text-zinc-100">
                        {text}
                    </div>
                </button>
                {/* {functionButton()} */}
            </div>
            <div className="flex">
                <ReturnButton route="/conta" />
            </div>
        </div>
    )
}

export default ValuePanel;