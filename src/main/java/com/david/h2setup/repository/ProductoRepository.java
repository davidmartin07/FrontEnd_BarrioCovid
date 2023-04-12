package com.david.h2setup.repository;

import com.david.h2setup.model.Producto;
import java.util.List;

import org.springframework.data.repository.CrudRepository;



public interface ProductoRepository extends CrudRepository<Producto, Long> {
    // hace un select de todos los campos from comprador where compradorId='[param]'
    List<Producto> findByProductoId(Long id);

}
