package com.david.h2setup.model;

public class DatosUsuario {
    private String correoElectronico;
    private String contrasena;
    private String nombreUsuario;

    public DatosUsuario() {
    }

    public DatosUsuario(String correoElectronico, String contrasena) {
        this.correoElectronico = correoElectronico;
        this.contrasena = contrasena;
        this.nombreUsuario = correoElectronico.substring(0, correoElectronico.indexOf("@"));
    }

    public String getCorreoElectronico() {
        return correoElectronico;
    }

    public void setCorreoElectronico(String correoElectronico) {
        this.correoElectronico = correoElectronico;
        this.nombreUsuario = correoElectronico.substring(0, correoElectronico.indexOf("@"));
    }

    public String getContrasena() {
        return contrasena;
    }

    public void setContrasena(String contrasena) {
        this.contrasena = contrasena;
    }

    public String getNombreUsuario() {
        return nombreUsuario;
    }

    public void setNombreUsuario(String nombreUsuario) {
        this.nombreUsuario = nombreUsuario;
    }
}