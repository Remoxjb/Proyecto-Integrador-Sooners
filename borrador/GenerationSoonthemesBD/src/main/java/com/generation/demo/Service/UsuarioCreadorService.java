package com.generation.demo.Service;

import java.util.List;

import com.generation.demo.Model.UsuarioCreador;

public interface UsuarioCreadorService {
	
	//leer
	
	UsuarioCreador obtenerUsuariosC(Integer Id);
	
	List<UsuarioCreador> obtenerUsuariosCreadores();
	
	//guardar
	UsuarioCreador guardarUsuarioC(UsuarioCreador usuarioCreador );
		
	
	//borrar
	Boolean borrarUsuarioCreador(Integer id);
	
	
	//actualizar
	UsuarioCreador actualizarUsuarioCreador(UsuarioCreador usuarioCreador);
	
	
	

}
