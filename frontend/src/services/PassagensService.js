import axios from "axios";

const PASSAGENS_API_BASE_URL = "http://localhost:8080/passagens";

class PassagensService {
  
  getAllPassagens() {
    return axios.get(PASSAGENS_API_BASE_URL);
  }

  createPassagens(passagens) {
    return axios.post(PASSAGENS_API_BASE_URL, passagens);
  }

  getPassagensById(passagensId) {
    return axios.get(PASSAGENS_API_BASE_URL + "/" + passagensId);
  }

  updatePassagens(passagensId, passagens) {
    return axios.put(PASSAGENS_API_BASE_URL + "/" + passagensId, passagens);
  }

  deletePassagens(passagensId) {
    return axios.delete(PASSAGENS_API_BASE_URL + "/" + passagensId);
  }
}

export default new PassagensService();