package com.projeto.agencia.controllers;

import com.projeto.agencia.entities.Pessoas;
import com.projeto.agencia.repositories.PessoasRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(value = "/pessoas")
public class PessoasController {

    @Autowired
    private PessoasRepository pessoasRepository;

    public PessoasController(PessoasRepository pessoasRepository) {
        this.pessoasRepository = pessoasRepository;
    }

    @GetMapping
    public List<Pessoas> getPessoas(){
        return pessoasRepository.findAll();
    }

    @GetMapping("{id}")
    public ResponseEntity<Pessoas> findById(@PathVariable Long id){
        Pessoas getPessoas = pessoasRepository.findById(id).get();

        return ResponseEntity.ok().body(getPessoas);
    }

    @PostMapping
    public Pessoas create(@RequestBody Pessoas pessoas) {
        return pessoasRepository.save(pessoas);
    }

    @PutMapping("{id}")
    public ResponseEntity<Pessoas> update(@PathVariable long id, @RequestBody Pessoas pessoas) {
        Pessoas updatePessoas = pessoasRepository.findById(id).get();

        updatePessoas.setNome(pessoas.getNome());
        updatePessoas.setCpf(pessoas.getCpf());

        pessoasRepository.save(updatePessoas);

        return ResponseEntity.ok(updatePessoas);
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable long id) {

        pessoasRepository.deleteById(id);
    }
}

