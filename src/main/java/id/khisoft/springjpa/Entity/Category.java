package id.khisoft.springjpa.Entity;


import lombok.*;
import sun.font.TrueTypeFont;

import javax.persistence.*;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name = "category")
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "categori_id")
    private Long id;

    @Column(name = "category_name", unique = true)
    private String Category;

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "category_id")
    private List<Product> products;
}
