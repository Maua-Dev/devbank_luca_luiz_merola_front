import { PropsWithChildren, createContext } from "react";
import { BankRepositoryHttp } from "../api/repositories/bank_repository_http";

export type BankContextType = {
    getAccount: () => Promise<object | undefined>
    getHistory: () => Promise<[] | undefined>
}

const defaultBankContext: BankContextType = {
    getAccount: async () => {
        return {};
    },
    getHistory: async () => {
        return [];
    }
}

export const BankContext = createContext<BankContextType>(defaultBankContext);

export function BankContextProvider({ children }: PropsWithChildren) {
    const bankRepository = new BankRepositoryHttp();

    async function getAccount() {
        try {
            const response = await bankRepository.getAccount();
            return response;
        } catch (error) {
            console.log(error)
        }
    }

    async function getHistory() {
        try {
            const response = await bankRepository.getHistory();
            return response;
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <BankContext.Provider value={{ getAccount, getHistory }}>
            {children}
        </BankContext.Provider>
    );
}