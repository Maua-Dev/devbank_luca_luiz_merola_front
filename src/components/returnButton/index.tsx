interface ReturnButtonProps {
    route: string;
}

const ReturnButton: React.FC<ReturnButtonProps> = ({route}) => {
    return (
        <a className="rounded-2xl text-center p-4 max-w-40 min-w-40" href={route}>
                <div className="font-['Montserrat'] text-2xl text-zinc-950">
                    Voltar
                </div>
        </a>
    )
}

export default ReturnButton;