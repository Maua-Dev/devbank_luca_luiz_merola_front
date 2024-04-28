import ReturnButton from "../returnButton";
import ValueButton from "../valueButton";
interface ValuePanelProps {
    setValueQty: (value: number, qty: number) => void;
    functionButton: () => JSX.Element;
}

const ValuePanel: React.FC<ValuePanelProps> = ({ setValueQty, functionButton }) => {
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
                {functionButton()}
            </div>
            <div className="flex">
                <ReturnButton route="/conta" />
            </div>
        </div>
    )
}

export default ValuePanel;