package com.generation.demo.Model;

import java.math.BigDecimal;
import java.sql.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

@Entity
@Table(name="producto")
public class Producto {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(nullable = false, name="id_producto")
	private Integer id;
	
	@Column (nullable = false, name= "nombre")
	private String nombre;
	
	@Column (nullable = false, name ="categoria")
	private String categoria;
	
	@Column (nullable = false, name="costo")
	private BigDecimal costo;
	
	@Column (nullable = false, name="fechadecreacion")
	private Date fechaDeCreacion;
	
	@Column (nullable = false, name="secciones")
	private Integer secciones;
	
	@Column (nullable = false, name="formularios")
	private String formularios;
	
	@Column (nullable = false, name="stock")
	private boolean stock;
	
	@Column (nullable = false, name="tienda")
	private boolean tienda;
	
	@Column (nullable = false, name="galeria")
	private boolean galeria;
	
	
	// especificar la relacion
	
	@ManyToOne
	@JoinColumn(nullable = false, name="id_usuarioCreador")
	@JsonProperty(access = Access.WRITE_ONLY)
	private UsuarioCreador usuarioCreador;

	@OneToMany(mappedBy="producto")
	private List<ReciboCompra> reciboCompra;
	// Getters y Setters

	public List<ReciboCompra> getReciboCompra() {
		return reciboCompra;
	}


	public void setReciboCompra(List<ReciboCompra> reciboCompra) {
		this.reciboCompra = reciboCompra;
	}


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


	public String getCategoria() {
		return categoria;
	}


	public void setCategoria(String categoria) {
		this.categoria = categoria;
	}


	public BigDecimal getCosto() {
		return costo;
	}


	public void setCosto(BigDecimal costo) {
		this.costo = costo;
	}


	public Date getFechaDeCreacion() {
		return fechaDeCreacion;
	}


	public void setFechaDeCreacion(Date fechaDeCreacion) {
		this.fechaDeCreacion = fechaDeCreacion;
	}


	public Integer getSecciones() {
		return secciones;
	}


	public void setSecciones(Integer secciones) {
		this.secciones = secciones;
	}


	public String getFormularios() {
		return formularios;
	}


	public void setFormularios(String formularios) {
		this.formularios = formularios;
	}


	public boolean isStock() {
		return stock;
	}


	public void setStock(boolean stock) {
		this.stock = stock;
	}


	public boolean isTienda() {
		return tienda;
	}


	public void setTienda(boolean tienda) {
		this.tienda = tienda;
	}


	public boolean isGaleria() {
		return galeria;
	}


	public void setGaleria(boolean galeria) {
		this.galeria = galeria;
	}


	public UsuarioCreador getUsuarioCreador() {
		return usuarioCreador;
	}


	public void setUsuarioCreador(UsuarioCreador usuarioCreador) {
		this.usuarioCreador = usuarioCreador;
	}
	

	
	
	
}
