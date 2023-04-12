package com.david.h2setup.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Comprador {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long compradoId;

    @Column(length = 25, nullable = false)
    private String nombre;

    @Column(length = 25, nullable = false, unique = true)
    private String email;

    @Column(length = 25, nullable = false)
    private String password;

    @Column(length = 255, nullable = false)
    private String direccion;

    @Column( nullable = false)
    private Long cp;

    public Comprador() {
    }

    public Comprador(String nombre, String email, String password, String direccion, Long cp) {
        this.nombre = nombre;
        this.email = email;
        this.password = password;
        this.direccion = direccion;
        this.cp = cp;
    }

    public Long getId() {
        return compradoId;
    }

    public String getNombre() {
        return nombre;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public String getDireccion() {
        return direccion;
    }

    public Long getCp() {
        return cp;
    }

    public void setId(Long id) {
        this.compradoId = id;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public void setCp(Long cp) {
        this.cp = cp;
    }

    @Override
    public String toString() {
        return "Comprador [id=" + compradoId + ", nombre=" + nombre + ", email=" + email + ", password=" + password
                + ", direccion=" + direccion + ", cp=" + cp + "]";
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((compradoId == null) ? 0 : compradoId.hashCode());
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
        Comprador other = (Comprador) obj;
        if (compradoId == null) {
            if (other.compradoId != null)
                return false;
        } else if (!compradoId.equals(other.compradoId))
            return false;
        return true;
    }

}


