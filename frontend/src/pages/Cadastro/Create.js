import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import PessoasService from "../../services/PessoasService";

export default function Create() {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const cadastrarOuEditarPessoas = (e) => {
    e.preventDefault();

    const pessoas = { nome, cpf};

    if (id) {
        PessoasService.updatePessoas(id, pessoas)
        .then((response) => {
            navigate("/Cadastro")
        })

    } else {
        PessoasService.createPessoas(pessoas)
        .then((response) => {
            navigate("/Cadastro")
        })
    }
  }

  useEffect(() => {
      function getPessoasById() {
        if (id) {
            PessoasService.getPessoasById(id)
            .then((response) => {
                setNome(response.data.nome);
                setCpf(response.data.cpf);
            })
            .catch((error) => {
                console.log(error);
            })
        }
      }
      getPessoasById()
  }, [id]);

  return (
    <div className="container py-3">
      <form>
        <fieldset>
          <legend>
            <h3 className="text-center">{id ? "Editar" : "É rápido e simples, basta informar alguns dados"}</h3>
          </legend>
          <div className="mb-3">
            <label htmlFor="Nome" className="form-label">
              Nome
            </label>
            <input
              type="text"
              id="Nome"
              className="form-control"
              placeholder="Insira seu nome completo"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Cpf" className="form-label">
              CPF
            </label>
            <input
              type="text"
              id="Cpf"
              className="form-control"
              placeholder="Somente números"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary" onClick={(e) => cadastrarOuEditarPessoas(e)}>
            Enviar
          </button>
          <Link
            to="/Cadastro"
            className="btn btn-danger"
            style={{ marginLeft: "10px" }}
          >
            Cancelar
          </Link>
        </fieldset>
      </form>
    </div>
  );
}