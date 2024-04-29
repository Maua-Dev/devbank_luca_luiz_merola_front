/* eslint-disable @typescript-eslint/no-explicit-any */
import { http } from "../http";

export type DepositType = {
    "2": number,
    "5": number,
    "10": number,
    "20": number,
    "50": number,
    "100": number,
    "200": number
}

export class BankRepositoryHttp {

    async getAccount() {
        try {
            const response = await http.get('/');
            return response.data;
        } catch (error) {
            console.log(error)
        }
    }

    async getHistory() {
        try {
            const response = await http.get('/history');
            return response.data.all_transactions;
        } catch (error) {
            console.log(error)
        }
    }

    async postDeposit(json: DepositType) {
        try {
            const response = await http.post('/deposit', json);
            return response.data;
        } catch (error: any) {
            console.log(error.message)
        }
    }

    async postWithdraw(json: DepositType) {
        try {
            const response = await http.post('/withdraw', json);
            return response.data;
        } catch (error: any) {
            console.log(error.message)
        }
    }
}