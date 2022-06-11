package com.generation.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.generation.demo.Model.Producto;

public interface ProductoRepository extends JpaRepository<Producto,Integer>{

}
