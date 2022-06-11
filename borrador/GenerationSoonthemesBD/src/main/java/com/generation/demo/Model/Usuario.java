package com.generation.demo.Model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table (name="usuario")
public class Usuario {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(nullable= false, name="id_usuario")
	private Integer id;
	
	@Column(nullable= false, name="nombre")
	private String nombre;
	
	@Column (nullable= false, name="apellido")
	private String apellido;
	
	@Column (nullable=false, name="nombreUsuario")
	private String nombreUsuario;
	
	@Column (nullable=false, unique=true, name="email")
	private String email;
	
	@Column(nullable=false, name="contrasenia")
	private String contrasenia;
	
	//relacion
	
	@OneToMany(mappedBy="usuario")
	private List<ReciboCompra> recibosCompra;

	
	//Getters and setter
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getApellido() {
		return apellido;
	}

	public void setApellido(String apellido) {
		this.apellido = apellido;
	}

	public String getNombreUsuario() {
		return nombreUsuario;
	}

	public void setNombreUsuario(String nombreUsuario) {
		this.nombreUsuario = nombreUsuario;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getContrasenia() {
		return contrasenia;
	}

	public void setContrasenia(String contrasenia) {
		this.contrasenia = contrasenia;
	}

	public List<ReciboCompra> getRecibosCompra() {
		return recibosCompra;
	}

	public void setRecibosCompra(List<ReciboCompra> recibosCompra) {
		this.recibosCompra = recibosCompra;
	}

	

}
