import { useState } from "react";
import { ActionButton } from "../actionButton";
import { ReturnButton } from "../returnButton";
import ValueButton from "../valueButton";

// type ValuePanelProps = {
//     type: string;
// }

interface ValuePanelProps {
    type: string;
    setValueQty: (value: number, qty: number) => void;
}

const ValuePanel: React.FC<ValuePanelProps> = ({setValueQty, type}) => {

    return (
        <div className="flex flex-col gap-2 justify-center">
            <div className="flex gap-2">
                <ValueButton setValueQty={setValueQty} value={2}/>
                <ValueButton setValueQty={setValueQty} value={5}/>
                <ValueButton setValueQty={setValueQty} value={10}/>
                <ValueButton setValueQty={setValueQty} value={20}/>
            </div>
            <div className="flex gap-2">
                <ValueButton setValueQty={setValueQty} value={50}/>
                <ValueButton setValueQty={setValueQty} value={100}/>
                <ValueButton setValueQty={setValueQty} value={200}/>
                <ActionButton action={type}/>
            </div>
            <div className="flex">
                <ReturnButton/>
            </div>
        </div>
    )
}

export default ValuePanel;