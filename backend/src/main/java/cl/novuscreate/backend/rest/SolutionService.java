package cl.novuscreate.backend.rest;


import cl.novuscreate.backend.entity.Solution;
import cl.novuscreate.backend.repository.ProblemRepository;
import cl.novuscreate.backend.repository.SolutionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/solutions")
public class SolutionService {

    @Autowired
    private SolutionRepository solutionRepository;

    @GetMapping
    public Iterable<Solution> getAllSolutions() {

        return solutionRepository.findAll();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    @ResponseBody
    public Solution findOne(@PathVariable("id") Integer id) {

        Solution solution = solutionRepository.findOne(id);
//        solution.execPythonScript("def factorial(n):\n" +
//                "    if n == 0:\n" +
//                "        return 1\n" +
//                "    else:\n" +
//                "        return n * factorial(n-1)\n" +
//                "number3 = factorial(number1)");
        solution.execPythonScript(solution.getSolutionCode());


        return solutionRepository.findOne(id);

    }


    @RequestMapping(method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.CREATED)
    @ResponseBody
    public Solution create(@RequestBody Solution resource) {
        System.out.println(resource);
        return solutionRepository.save(resource);
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteSolution(@PathVariable(value = "id") Integer Id) {
        Solution problem = solutionRepository.findOne(Id);

        solutionRepository.delete(problem);

        return ResponseEntity.ok().build();
    }


}
