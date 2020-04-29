package id.khisoft.springjpa.Repository;

import id.khisoft.springjpa.Entity.Category;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface CategoryRepository extends JpaRepository<Category,  Long> {


}
