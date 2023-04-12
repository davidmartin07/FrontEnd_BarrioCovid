package com.david.h2setup.model;


import java.time.LocalDate;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity
public class Pedido {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long pedidoId;

    @Column(length = 255, nullable = false)
    private String descripcion;

    @Column(nullable = false)
    private LocalDate horaDeRecogida;

    @OneToMany
    @JoinColumn(name="productList")
    private List<Producto> productos;

    @ManyToOne
    @JoinColumn(name="id_comprador")
    private Comprador comprador;

    public Pedido() {
    }

    public Pedido(String descripcion, LocalDate horaDeRecogida, List<Producto> productos, Comprador comprador) {
        this.descripcion = descripcion;
        this.horaDeRecogida = horaDeRecogida;
        this.productos = productos;
        this.comprador = comprador;
    }

    public Long getPedidoId() {
        return pedidoId;
    }

    public void setPedidoId(Long pedidoId) {
        this.pedidoId = pedidoId;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public LocalDate getHoraDeRecogida() {
        return horaDeRecogida;
    }

    public void setHoraDeRecogida(LocalDate horaDeRecogida) {
        this.horaDeRecogida = horaDeRecogida;
    }

    public List<Producto> getProductos() {
        return productos;
    }

    public void setProductos(List<Producto> productos) {
        this.productos = productos;
    }

    public Comprador getComprador() {
        return comprador;
    }

    public void setComprador(Comprador comprador) {
        this.comprador = comprador;
    }

    @Override
    public String toString() {
        return "Pedido [pedidoId=" + pedidoId + ", descripcion=" + descripcion + ", horaDeRecogida=" + horaDeRecogida
                + ", productos=" + productos + ", comprador=" + comprador + "]";
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((pedidoId == null) ? 0 : pedidoId.hashCode());
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Pedido other = (Pedido) obj;
        if (pedidoId == null) {
            if (other.pedidoId != null)
                return false;
        } else if (!pedidoId.equals(other.pedidoId))
            return false;
        return true;
    }

    
}
