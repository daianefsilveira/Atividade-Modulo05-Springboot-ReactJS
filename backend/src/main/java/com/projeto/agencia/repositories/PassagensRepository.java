package com.projeto.agencia.repositories;

import com.projeto.agencia.entities.Passagens;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PassagensRepository extends JpaRepository<Passagens, Long> {
}
