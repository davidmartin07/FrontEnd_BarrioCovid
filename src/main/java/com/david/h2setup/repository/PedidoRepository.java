package com.david.h2setup.repository;



import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.david.h2setup.model.Pedido;

public interface PedidoRepository extends CrudRepository<Pedido, Long> {
    // hace un select de todos los campos from comprador where compradorId='[param]'
    List<Pedido> findByPedidoId(Long id);

}

