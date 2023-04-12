package com.david.h2setup.repository;

import com.david.h2setup.model.Vendedor;

import java.util.List;

import org.springframework.data.repository.CrudRepository;


public interface VendedorRepository extends CrudRepository<Vendedor, Long> {
    // hace un select de todos los campos from comprador where compradorId='[param]'
    List<Vendedor> findByVendedorId(Long id);
    List<Vendedor> findByNombreComercio(String nombreComercio);

}

