package com.david.h2setup.controller;

import java.sql.Blob;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import com.david.h2setup.model.Comprador;
import com.david.h2setup.model.Pedido;
import com.david.h2setup.model.Producto;
import com.david.h2setup.model.Vendedor;
import com.david.h2setup.repository.CompradorRepository;
import com.david.h2setup.repository.PedidoRepository;
import com.david.h2setup.repository.ProductoRepository;
import com.david.h2setup.repository.VendedorRepository;


@RestController
public class BarrioCovidController {
    private final CompradorRepository compradorRepository;
    private final VendedorRepository vendedorRepository;
    private final ProductoRepository productoRepository;
    private final PedidoRepository pedidoRepository;

    public static final Logger log = LoggerFactory.getLogger(BarrioCovidController.class);

    public BarrioCovidController(CompradorRepository comprador, VendedorRepository vendedor, ProductoRepository producto, PedidoRepository pedido){
        
        this.compradorRepository = comprador;

        Comprador david = new Comprador("david","davidmartin","david","abccd",1234L);
        comprador.save(david);

        this.vendedorRepository = vendedor;

        Vendedor dia = new Vendedor("dia","dia@hotmail.com","dia","dia1",15760L);
        vendedor.save(dia);

        this.productoRepository = producto;
        Blob imagen = null;
        Producto platanos = new Producto("platanos","platanos de canarias",0.5f,120L,imagen);
        producto.save(platanos);

        this.pedidoRepository = pedido;
        LocalDate horaDeRecogida = LocalDate.now().plusDays(1); // Esto lo que hace es fijar la hora de recogida para mañana
        List<Producto> productos = new ArrayList<>(); // Una lista de productos vacia
        
        Pedido pedido1 = new Pedido("pedid01",horaDeRecogida,productos,david);
        pedido.save(pedido1);
    }

// metodo para el registro de nuevos compradores 
@PostMapping("/api/registro")
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

}
