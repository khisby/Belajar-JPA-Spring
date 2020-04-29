package id.khisoft.springjpa.Repository;

import id.khisoft.springjpa.Entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    List<Product> findByProductPriceGreaterThan(BigDecimal price);
}
