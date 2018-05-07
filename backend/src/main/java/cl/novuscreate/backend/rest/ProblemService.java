package cl.novuscreate.backend.rest;

//import cl.novuscreate.backend.entity.User;
//import cl.novuscreate.backend.repository.UserRepository;
import cl.novuscreate.backend.entity.Problem;
import cl.novuscreate.backend.repository.ProblemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/problems")
public class ProblemService {


    @Autowired
    private ProblemRepository problemRepository;


    @GetMapping
    public Iterable<Problem> getAllProducts() {

        return problemRepository.findAll();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    @ResponseBody
    public Problem findOne(@PathVariable("id") Integer id) {

        return problemRepository.findOne(id);

    }


    @RequestMapping(method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.CREATED)
    @ResponseBody
    public Problem create(@RequestBody Problem resource) {
        System.out.println(resource);
        return problemRepository.save(resource);
    }


//    @PutMapping("/{id}")
//    public User updateNote(@PathVariable(value = "id") Integer productId,
//                               @Valid @RequestBody User userDetails) {
//
//        User user = userRepository.findOne(productId);
//
//
//        user.setCategoryName(categoryDetails.getCategoryName());
//
//
//        Category updatedCategory = categoryRepository.save(category);
//        return updatedCategory;
//    }



    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable(value = "id") Integer Id) {
        Problem problem = problemRepository.findOne(Id);

        problemRepository.delete(problem);

        return ResponseEntity.ok().build();
    }




}

