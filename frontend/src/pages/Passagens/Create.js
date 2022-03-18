import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import PassagensService from "../../services/PassagensService";

export default function Create() {
  const [origem, setOrigem] = useState("");
  const [destino, setDestino] = useState("");
  const [trecho, setTrecho] = useState("");
  const [dataIda, setDataIda] = useState("");
  const [dataVolta, setDataVolta] = useState("");
  const [qtdPassageiros, setQtdPassageiros] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const comprarOuEditarPassagens = (e) => {
    e.preventDefault();

    const passagens = { origem, destino, trecho, dataIda, dataVolta, qtdPassageiros};

    if (id) {
      PassagensService.updatePassagens(id, passagens)
        .then((response) => {
            navigate("/passagens")
        })

    } else {
      PassagensService.createPassagens(passagens)
        .then((response) => {
            navigate("/passagens")
        })
    }
  }

  useEffect(() => {
      function getPassagensById() {
        if (id) {
          PassagensService.getPassagensById(id)
            .then((response) => {
                setOrigem(response.data.origem);
                setDestino(response.data.destino);
                setTrecho(response.data.trecho);
                setDataIda(response.data.dataIda);
                setDataVolta(response.data.dataVolta);
                setQtdPassageiros(response.data.qtdPassageiros);
            })
            .catch((error) => {
                console.log(error);
            })
        }
      }
      getPassagensById()
  }, [id]);

  return (
    <div className="container py-3">
      <form>
        <fieldset>
          <legend>
            <h3 className="text-center">{id ? "Editar" : "Encontre os melhores voos"}</h3>
          </legend>
          <div className="mb-3">
            <label htmlFor="Origem" className="form-label">
              Origem
            </label>
            <input
              type="text"
              id="Origem"
              className="form-control"
              value={origem}
              onChange={(e) => setOrigem(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Destino" className="form-label">
              Destino
            </label>
            <input
              type="text"
              id="Destino"
              className="form-control"
              value={destino}
              onChange={(e) => setDestino(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Trecho" className="form-label">
              Trecho
            </label>
            <input
              type="text"
              id="Trecho"
              className="form-control"
              value={trecho}
              onChange={(e) => setTrecho(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Data de ida" className="form-label">
              Ida
            </label>
            <input
              type="date"
              id="Data de Ida"
              className="form-control"
              value={dataIda}
              onChange={(e) => setDataIda(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Data de Volta" className="form-label">
              Volta
            </label>
            <input
              type="date"
              id="Data de Volta"
              className="form-control"
              value={dataVolta}
              onChange={(e) => setDataVolta(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Qtd Passageiros" className="form-label">
             Qtd Passageiros
            </label>
            <input
              type="text"
              id="Qtd Passageiros"
              className="form-control"
              value={qtdPassageiros}
              onChange={(e) => setQtdPassageiros(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary" onClick={(e) => comprarOuEditarPassagens(e)}>
            Enviar
          </button>

          <Link
            to="/"
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