import axios from "axios";

const PESSOAS_API_BASE_URL = "http://localhost:8080/pessoas";

class PessoasService {
  getAllPessoas() {
    return axios.get(PESSOAS_API_BASE_URL);
  }

  createPessoas(pessoas) {
    return axios.post(PESSOAS_API_BASE_URL, pessoas);
  }

  getPessoasById(pessoasId) {
    return axios.get(PESSOAS_API_BASE_URL + "/" + pessoasId);
  }

  updatePessoas(pessoasId, pessoas) {
    return axios.put(PESSOAS_API_BASE_URL + "/" + pessoasId, pessoas);
  }

  deletePessoas(pessoasId) {
    return axios.delete(PESSOAS_API_BASE_URL + "/" + pessoasId);
  }
}

export default new PessoasService();