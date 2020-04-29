package id.khisoft.springjpa.Controller;

import id.khisoft.springjpa.Entity.Product;
import id.khisoft.springjpa.Repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.List;

@RequestMapping
@CrossOrigin
@RestController
public class ProductController {

    @Autowired
    ProductRepository productRepository;

    @GetMapping("/")
    public List<Product> getAll(){
        return productRepository.findAll();
    }

    @GetMapping("/price")
    public List<Product> findGreaterThenPrice(@RequestParam("price")BigDecimal price){
        return productRepository.findByProductPriceGreaterThan(price);
    }

    @PostMapping("/")
    public Product save(@RequestBody Product product){
        return productRepository.save(product);
    }
}
