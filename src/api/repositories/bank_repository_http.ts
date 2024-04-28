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
}