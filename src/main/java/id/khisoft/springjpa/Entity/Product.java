package id.khisoft.springjpa.Entity;

import lombok.*;

import javax.persistence.*;
import java.math.BigDecimal;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name = "product")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "productid", unique = true, nullable = false)
    private Long productId;

    @Column(name = "productName", unique = true, nullable = false)
    private String productName;

    @Column(name = "productPrice", nullable = false)
    private BigDecimal productPrice;

    @Column(name = "category_id")
    private Long category_id;


}
