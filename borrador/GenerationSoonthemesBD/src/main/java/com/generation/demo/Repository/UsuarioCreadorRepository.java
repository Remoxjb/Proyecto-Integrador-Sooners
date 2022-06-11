package com.generation.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.generation.demo.Model.UsuarioCreador;

@Repository
public interface UsuarioCreadorRepository extends JpaRepository<UsuarioCreador,Integer>{
	

}
