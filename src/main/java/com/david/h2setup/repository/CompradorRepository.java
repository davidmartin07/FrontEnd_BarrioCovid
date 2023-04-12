package com.david.h2setup.repository;



import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.david.h2setup.model.Comprador;

public interface CompradorRepository extends CrudRepository<Comprador, Long> {
    // hace un select de todos los campos from comprador where compradorId='[param]'
    List<Comprador> findBycompradoId(Long id);

}
