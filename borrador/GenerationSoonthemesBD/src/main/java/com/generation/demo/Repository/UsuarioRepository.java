package com.generation.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.generation.demo.Model.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {

}
