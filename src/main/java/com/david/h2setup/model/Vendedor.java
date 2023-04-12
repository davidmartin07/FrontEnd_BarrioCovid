package com.david.h2setup.model;



import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Vendedor {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long vendedorId;

    @Column(length = 25, nullable = false)
    private String nombreComercio;

    @Column(length = 25, nullable = false, unique = true)
    private String email;

    @Column(length = 25, nullable = false)
    private String password;

    @Column(length = 255, nullable = false)
    private String direccion;

    @Column(length = 25, nullable = false)
    private Long cp;

    public Vendedor() {
    }

    public Vendedor(String nombreComercio, String email, String password, String direccion, Long cp) {
        this.nombreComercio = nombreComercio;
        this.email = email;
        this.password = password;
        this.direccion = direccion;
        this.cp = cp;
    }

    public Long getId() {
        return vendedorId;
    }

    public void setId(Long id) {
        this.vendedorId = id;
    }

    public String getNombreComercio() {
        return nombreComercio;
    }

    public void setNombreComercio(String nombreComercio) {
        this.nombreComercio = nombreComercio;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public Long getCp() {
        return cp;
    }

    public void setCp(Long cp) {
        this.cp = cp;
    }

    @Override
    public String toString() {
        return "Vendedor [id=" + vendedorId + ", nombreComercio=" + nombreComercio + ", email=" + email + ", password="
                + password + ", direccion=" + direccion + ", cp=" + cp + "]";
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((vendedorId == null) ? 0 : vendedorId.hashCode());
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
        Vendedor other = (Vendedor) obj;
        if (vendedorId == null) {
            if (other.vendedorId != null)
                return false;
        } else if (!vendedorId.equals(other.vendedorId))
            return false;
        return true;
    }

    
}
