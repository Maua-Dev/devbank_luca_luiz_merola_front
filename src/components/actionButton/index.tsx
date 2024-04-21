type ActionButtonProps = {
    action: string;
};

export function ActionButton({action}:ActionButtonProps) {
    return (
        <button className="bg-black gap-6 rounded-2xl p-4 max-w-[148px]">
                <div className="font-['Montserrat'] text-2xl origin-bottom-left text-zinc-100">
                    {action == 'depositar' ? 'Depositar' : 'Sacar'}
                </div>
        </button>
    )
}