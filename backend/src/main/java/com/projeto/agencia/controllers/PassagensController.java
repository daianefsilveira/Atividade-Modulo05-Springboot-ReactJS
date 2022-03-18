package com.projeto.agencia.controllers;

import com.projeto.agencia.entities.Passagens;
import com.projeto.agencia.repositories.PassagensRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(value = "/passagens")
public class PassagensController {

    @Autowired
    private PassagensRepository passagensRepository;

    public PassagensController(PassagensRepository passagensRepository) {
        this.passagensRepository = passagensRepository;
    }

    @GetMapping
    public List<Passagens> getPassagens() {
        return passagensRepository.findAll();
    }

    @GetMapping("{id}")
    public ResponseEntity<Passagens> findById(@PathVariable Long id){
        Passagens getPassagens = passagensRepository.findById(id).get();

        return ResponseEntity.ok().body(getPassagens);
    }

    @PostMapping
    public Passagens create(@RequestBody Passagens passagens) {
        return passagensRepository.save(passagens);
    }

    @PutMapping("{id}")
    public ResponseEntity<Passagens> update(@PathVariable long id, @RequestBody Passagens passagens) {
        Passagens updatePassagens = passagensRepository.findById(id).get();

        updatePassagens.setOrigem(passagens.getOrigem());
        updatePassagens.setDestino(passagens.getDestino());
        updatePassagens.setTrecho(passagens.getTrecho());
        updatePassagens.setDataIda(passagens.getDataIda());
        updatePassagens.setDataVolta(passagens.getDataVolta());
        updatePassagens.setQtdPassageiros(passagens.getQtdPassageiros());

        passagensRepository.save(updatePassagens);

        return ResponseEntity.ok(updatePassagens);
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable long id) {

        passagensRepository.deleteById(id);
    }
}
