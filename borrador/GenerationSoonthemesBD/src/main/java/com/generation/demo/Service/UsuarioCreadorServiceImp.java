package com.generation.demo.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.generation.demo.Model.UsuarioCreador;

import com.generation.demo.Repository.UsuarioCreadorRepository;


@Service
public class UsuarioCreadorServiceImp implements UsuarioCreadorService{
	
	UsuarioCreadorRepository usuarioCreadorRepository;
	
	public UsuarioCreadorServiceImp(@Autowired UsuarioCreadorRepository usuarioCreadorRepository) {
		this.usuarioCreadorRepository=usuarioCreadorRepository;
	}

	@Override
	public UsuarioCreador obtenerUsuariosC(Integer Id) {
		Optional<UsuarioCreador> UsuarioCreador = usuarioCreadorRepository.findById(Id);
		return UsuarioCreador.orElse(null);
	}

	@Override
	public List<UsuarioCreador> obtenerUsuariosCreadores() {
		return usuarioCreadorRepository.findAll();
	}

	//Crear
	@Override
	public UsuarioCreador guardarUsuarioC(UsuarioCreador usuarioCreador) {
		return usuarioCreadorRepository.save(usuarioCreador);
	}

	@Override
	public Boolean borrarUsuarioCreador(Integer id) {
		try {
			usuarioCreadorRepository.deleteById(id);
			return true;
		}
		catch(Exception e){
			return false;
		}
		
	}

	@Override
	public UsuarioCreador actualizarUsuarioCreador(UsuarioCreador usuarioCreador) {
		
		return usuarioCreadorRepository.save(usuarioCreador);
	}

}
