package com.projeto.agencia.entities;

import javax.persistence.*;

import java.io.Serializable;
import java.util.Objects;

@Entity
@Table(name = "pessoas")
public class Pessoas implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long codPessoa;
    private String nome;
    private String cpf;

    public Pessoas() {

        super();
    }

    public Pessoas(Long codPessoa, String nome, String cpf) {
        super();
        this.codPessoa = codPessoa;
        this.nome = nome;
        this.cpf = cpf;
    }

    public Long getCodPessoa() {
        return codPessoa;
    }

    public void setCodPessoa(Long codPessoa) {
        codPessoa = codPessoa;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Pessoas pessoas = (Pessoas) o;
        return codPessoa.equals(pessoas.codPessoa);
    }

    @Override
    public int hashCode() {
        return Objects.hash(codPessoa);
    }
}