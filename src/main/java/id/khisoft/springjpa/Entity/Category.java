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
    @Column(name = "categoriId")
    private Long id;

    @Column(name = "categoryName")
    private String Category;

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "categoryId")
    private List<Product> product;
}
