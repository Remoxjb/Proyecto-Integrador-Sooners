package com.generation.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.generation.demo.Model.UsuarioCreador;
import com.generation.demo.Service.UsuarioCreadorService;

import net.bytebuddy.asm.Advice.Return;

@RestController
@RequestMapping("api/usuariocreador")


public class UsuarioCreadorController {

	private final UsuarioCreadorService usuarioCreadorService;
	
	public UsuarioCreadorController(@Autowired UsuarioCreadorService usuarioCreadorService) {
		this.usuarioCreadorService=usuarioCreadorService;
	}
	
	//leer
	
	
	@GetMapping("/{id}")
	public UsuarioCreador obtenerUsuarioC(@PathVariable Integer id) {
		
		return usuarioCreadorService.obtenerUsuariosC(id);
	}
	@GetMapping("/all")
	public List<UsuarioCreador> obtenerUsuariosCreadores(){
		
		return usuarioCreadorService.obtenerUsuariosCreadores();
	}
	
	
	//Crear
	@PostMapping
	public UsuarioCreador guarUsuarioCreador(@RequestBody UsuarioCreador usuarioCreador) {
		return usuarioCreadorService.guardarUsuarioC(usuarioCreador) ;
	}
	
	//Borrar	
	@DeleteMapping("delete/{id}")
	public void borrarUsuarioCreador(@PathVariable Integer id) {
		usuarioCreadorService.borrarUsuarioCreador(id);
	}
	
	//Actualizar
	@PutMapping
	public UsuarioCreador actualizarUsuarioCreador(@RequestBody UsuarioCreador usuarioCreador) {
		return usuarioCreadorService.actualizarUsuarioCreador(usuarioCreador);
	}
	
	
	
}
