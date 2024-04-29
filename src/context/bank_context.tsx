import { PropsWithChildren, createContext } from "react";
import { BankRepositoryHttp, DepositType } from "../api/repositories/bank_repository_http";

export type BankContextType = {
    getAccount: () => Promise<object | undefined>
    getHistory: () => Promise<[] | undefined>
    postDeposit: (json: DepositType) => Promise<object | undefined>
    postWithdraw: (json: DepositType) => Promise<object | undefined>
}

const defaultBankContext: BankContextType = {
    getAccount: async () => {
        return {};
    },
    getHistory: async () => {
        return [];
    },
    postDeposit: async () => {
        return {};
    },
    postWithdraw: async () => {
        return {};
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

    async function postDeposit(json: DepositType) {
        try {
            const response = await bankRepository.postDeposit(json);
            return response;
        } catch (error) {
            console.log(error)
        }
    }

    async function postWithdraw(json: DepositType) {
        try {
            const response = await bankRepository.postWithdraw(json);
            return response;
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <BankContext.Provider value={{ getAccount, getHistory, postDeposit, postWithdraw }}>
            {children}
        </BankContext.Provider>
    );
}