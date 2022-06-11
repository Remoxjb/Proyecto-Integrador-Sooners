package com.generation.demo.Model;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

@Entity
@Table(name="recibo_compra")
public class ReciboCompra {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(nullable=false, name="id_recibo")
	private Integer id;
	
	@Column(nullable=false,name="fecha")
	private Date fecha;
	
	@ManyToOne
	@JoinColumn(nullable=false,name="id_usuario")
	@JsonProperty(access = Access.WRITE_ONLY)
	private Usuario usuario;
	
	
	@ManyToOne
	@JoinColumn(nullable=false,name="producto_id")
	@JsonProperty(access = Access.WRITE_ONLY)
	private Producto producto;


	
	// Getters y Setters
	public Integer getId() {
		return id;
	}


	public void setId(Integer id) {
		this.id = id;
	}


	public Date getFecha() {
		return fecha;
	}


	public void setFecha(Date fecha) {
		this.fecha = fecha;
	}


	public Usuario getUsuario() {
		return usuario;
	}


	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}


	public Producto getProducto() {
		return producto;
	}


	public void setProducto(Producto producto) {
		this.producto = producto;
	}
	
	
	
}
