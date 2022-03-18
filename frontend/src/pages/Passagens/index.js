import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PassagensService from "../../services/PassagensService";

export default function Index() {
  const [passagens, setPassagens] = useState([]);

  const getAllPassagens = () => {
    PassagensService.getAllPassagens()
      .then((response) => {
        setPassagens(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllPassagens();
  }, []);

  const deletePassagens = (passagensId) => {
    PassagensService.deletePassagens(passagensId)
      .then((response) => {
        setPassagens(response.data.passagens);
        getAllPassagens();
      })
      .catch((error) => {
        console.log(error);
        const { data } = error.response;
        if (data.status === 500) {
          alert("Erro na API");
        }
      });
  };

  return (
    <>
      <header className="header"><br/>
        <h1 className="container">Bem-vindo à sua próxim viagem!</h1>
      </header>
      <div className="container p-5">
        <Link to="/Passagens-Create" className="btn btn-primary mb-2">
          Comprar
        </Link>
        <div className="table-responsive">
          <table className="table table-hover table-sm">
            <thead>
              <tr>
                <th>ID</th>
                <th>Origem</th>
                <th>Destino</th>
                <th>Trecho</th>
                <th>Data de ida</th>
                <th>Data de volta</th>
                <th>Qtd Passageiros</th>
                <th>Opções</th>
              </tr>
            </thead>
            <tbody>
              {passagens.map((passagens) => (
                <tr key={passagens.codPassagens}>
                  <td>{passagens.codPassagens}</td>
                  <td>{passagens.origem}</td>
                  <td>{passagens.destino}</td>
                  <td>{passagens.trecho}</td>
                  <td>{passagens.dataIda}</td>
                  <td>{passagens.dataVolta}</td>
                  <td>{passagens.qtdPassageiros}</td>
                  <td className="d-flex">
                    <Link
                      to={`/Passagens-Update/${passagens.codPassagens}`}
                      className="btn btn-info"
                    >
                      Editar
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => deletePassagens(passagens.codPassagens)}
                      style={{ marginLeft: "10px" }}
                    >
                      Deletar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}