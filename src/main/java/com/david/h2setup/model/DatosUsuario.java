package com.david.h2setup.model;

public class DatosUsuario {
    private String correoElectronico;
    private String contrasena;
    String nombreUsuario = correoElectronico.substring(0, correoElectronico.indexOf("@"));

    public DatosUsuario() {
    }

    public DatosUsuario(String correoElectronico, String contrasena) {
        this.correoElectronico = correoElectronico;
        this.contrasena = contrasena;
    }

    public String getCorreoElectronico() {
        return correoElectronico;
    }

    public void setCorreoElectronico(String correoElectronico) {
        this.correoElectronico = correoElectronico;
    }

    public String getContrasena() {
        return contrasena;
    }

    public void setContrasena(String contrasena) {
        this.contrasena = contrasena;
    }
}
