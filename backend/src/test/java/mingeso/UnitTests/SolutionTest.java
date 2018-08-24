package mingeso.UnitTests;

import cl.novuscreate.backend.Application;
import cl.novuscreate.backend.entity.Solution;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.context.web.WebAppConfiguration;

import static junit.framework.TestCase.assertNotNull;


@RunWith(SpringRunner.class)
@WebAppConfiguration
@SpringBootTest(classes = Application.class)
public class SolutionTest {
    
    @Test
    public void solutionLanguajeMustExists() {
        Solution solution = new Solution();

        assertNull("Solucion sin encontrar", solution.getLanguage());
    }   
}
