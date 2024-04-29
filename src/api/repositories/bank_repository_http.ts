import { http } from "../http";

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
}