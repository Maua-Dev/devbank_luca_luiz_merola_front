import { useState } from "react";
import { ActionButton } from "../actionButton";
import { ReturnButton } from "../returnButton";
import { ValueButton } from "../valueButton";

type ValuePanelProps = {
    type: string;
}

export function ValuePanel({type}: ValuePanelProps) {
    const [currValue, setCurrValue] = useState(0)

    function updateCurrQty (newQty: number) {
        setCurrValue(newQty);
    };

    return (
        <div className="flex flex-col gap-2 justify-center">
            <div className="flex gap-2">
                <ValueButton updateCurrQty={updateCurrQty} value="2"/>
                <ValueButton updateCurrQty={updateCurrQty} value="5"/>
                <ValueButton updateCurrQty={updateCurrQty} value="10"/>
                <ValueButton updateCurrQty={updateCurrQty} value="20"/>
            </div>
            <div className="flex gap-2">
                <ValueButton value="50"/>
                <ValueButton value="100"/>
                <ValueButton value="200"/>
                <ActionButton action={type}/>
            </div>
            <div className="flex">
                <ReturnButton/>
            </div>
        </div>
    )
}