import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PessoasService from "../../services/PessoasService";

export default function Index() {
  const [pessoas, setPessoas] = useState([]);

  const getAllPessoas = () => {
    PessoasService.getAllPessoas()
      .then((response) => {
        setPessoas(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllPessoas();
  }, []);

  const deletePessoas = (pessoasId) => {
    PessoasService.deletePessoas(pessoasId)
      .then((response) => {
        getAllPessoas();
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
        <h1 className="container">Não tem cadastro?</h1>
      </header>
      <div className="container p-5">
        <Link to="/Cadastro-Create" className="btn btn-primary mb-2">
          Cadastrar
        </Link>
        <div className="table-responsive">
          <table className="table table-hover table-sm">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>CPF</th>
                <th>Opções</th>
              </tr>
            </thead>
            <tbody>
              {pessoas.map((pessoas) => (
                <tr key={pessoas.codPessoa}>
                  <td>{pessoas.codPessoa}</td>
                  <td>{pessoas.nome}</td>
                  <td>{pessoas.cpf}</td>
                  <td className="d-flex">
                    <Link
                      to={`/Cadastro-Update/${pessoas.codPessoa}`}
                      className="btn btn-info"
                    >
                      Editar
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => deletePessoas(pessoas.codPessoa)}
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