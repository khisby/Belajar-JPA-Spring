package id.khisoft.springjpa.Controller;

import id.khisoft.springjpa.Entity.Category;
import id.khisoft.springjpa.Repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@Transactional
public class CategoryController {

    @Autowired
    CategoryRepository categoryRepository;

    @GetMapping("/category")
    public List<Category> getAllCategories(){
        return categoryRepository.findAll();
    }

    @GetMapping("/category/{id}")
    public Optional<Category> getCategoryById(@PathVariable("id") Long id){
        Optional<Category> category = categoryRepository.findById(id);
        return category;
    }

    @PostMapping("/category")
    public Category saveCategory(@RequestBody Category category){
        return categoryRepository.save(category);
    }

    @PutMapping("/category")
    public Category updateCategory(@RequestBody Category category){
        return categoryRepository.save(category);
    }

    @DeleteMapping("/category")
    public ResponseEntity deleteCategory(@RequestParam("id") Long id){
        if(!categoryRepository.findById(id).isPresent()){
            ResponseEntity.badRequest().build();
        }
        categoryRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
