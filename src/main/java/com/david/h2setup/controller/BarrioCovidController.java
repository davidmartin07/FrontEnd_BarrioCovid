package com.david.h2setup.controller;

import java.sql.Blob;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import com.david.h2setup.model.Comprador;
import com.david.h2setup.model.Pedido;
import com.david.h2setup.model.Producto;
import com.david.h2setup.model.Vendedor;
import com.david.h2setup.model.DatosUsuario;
import com.david.h2setup.repository.CompradorRepository;
import com.david.h2setup.repository.PedidoRepository;
import com.david.h2setup.repository.ProductoRepository;
import com.david.h2setup.repository.VendedorRepository;

@CrossOrigin(origins = "http://localhost:3000")

@RequestMapping("/BarrioCovid")
@RestController
public class BarrioCovidController {

    private final CompradorRepository compradorRepository;
    private final VendedorRepository vendedorRepository;
    private final ProductoRepository productoRepository;
    private final PedidoRepository pedidoRepository;

    public static final Logger log = LoggerFactory.getLogger(BarrioCovidController.class);

    /**
     * @param compradorRepository
     * @param vendedorRepository
     * @param productoRepository
     * @param pedidoRepository
     */
    public BarrioCovidController(CompradorRepository compradorRepository, VendedorRepository vendedorRepository, ProductoRepository productoRepository, PedidoRepository pedidoRepository) {
      this.compradorRepository = compradorRepository;
      Comprador david = new Comprador("david","davidmartin@gmail.com","david","abccd",1234L);
      compradorRepository.save(david);
      this.vendedorRepository = vendedorRepository;
      Vendedor dia = new Vendedor("dia","dia@hotmail.com","dia","dia1",15760L); 
      vendedorRepository.save(dia);  
      this.productoRepository = productoRepository;
      Blob imagen = null;      
      Producto platanos = new Producto("platanos","platanos de canarias",0.5f,120L,imagen);   
      productoRepository.save(platanos);
      this.pedidoRepository = pedidoRepository;     
      LocalDate horaDeRecogida = LocalDate.now().plusDays(1); // Esto lo que hace es fijar la hora de recogida para mañana
      List<Producto> productos = new ArrayList<>(); // Una lista de productos vacia
      Pedido pedido1 = new Pedido("pedid01",horaDeRecogida,productos,david);      
      pedidoRepository.save(pedido1);      
    }

// metodo para el registro de nuevos compradores 
@PostMapping("//registro")
    public Comprador registroComprador(@RequestBody Comprador comprador){
     return compradorRepository.save(comprador);
    }

// Metodo para conseguir una lista de todos los compradores
    @GetMapping("/comprador")
    public List<Comprador> getCompradores() {
      return (List<Comprador>) compradorRepository.findAll();
    }



// Metodo para conseguir una lista de todos los vendedores, para asi los 
// compradores puedan elegir la tienda en la que quieren realizar su pedido.
    @GetMapping("/vendedor")
    public List<Vendedor> getVendedores() {
      return (List<Vendedor>) vendedorRepository.findAll();
    }

    //Método para una vez logueado, redirija al usuario a su respectiva ventana
    @PostMapping("/login")
      public ResponseEntity<Map<String, String>> iniciarSesion(@RequestBody DatosUsuario datosUsuario) {
      // Aquí se pueden realizar las validaciones correspondientes para verificar si el usuario existe y si la contraseña es correcta
      // En este ejemplo, se asume que el usuario es correcto y se devuelve la respuesta correspondiente
      Map<String, String> response = new HashMap<>();
        if (datosUsuario.getCorreoElectronico().equals("pepito@gmail.com") && datosUsuario.getContrasena().equals("pepito")) {
          response.put("mensaje", "comprador");
          response.put("id", "12345"); // El ID del usuario autenticado
        }
     
      return ResponseEntity.ok(response);
    }

}
