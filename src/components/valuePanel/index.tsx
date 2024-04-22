import { ActionButton } from "../actionButton";
import { ReturnButton } from "../returnButton";
import { ValueButton } from "../valueButton";

type ValuePanelProps = {
    type: string;
}

export function ValuePanel({type}: ValuePanelProps) {
    return (
        <div className="flex flex-col gap-2 justify-center">
            <div className="flex gap-2">
                <ValueButton value="2"/>
                <ValueButton value="5"/>
                <ValueButton value="10"/>
                <ValueButton value="20"/>
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