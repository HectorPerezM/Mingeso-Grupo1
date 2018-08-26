package mingeso.UnitTests;


import cl.novuscreate.backend.Application;
import cl.novuscreate.backend.entity.User;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.context.web.WebAppConfiguration;

import static junit.framework.TestCase.assertEquals;


@RunWith(SpringRunner.class)
@WebAppConfiguration
@SpringBootTest(classes = Application.class)
public class UserTest {

    @Test
    public void userEmailMustExists() {
        User user = new User();

        user.setUserPassword("q1w2e3r4");
        user.setUserType(1);

        assertEquals("The User instance is invalid",false,user.verificateUser());

    }

    @Test
    public void userPasswordlMustExists() {
        User user = new User();

        user.setUserEmail("grupo1@gmail.com");
        user.setUserType(1);

        assertEquals("The User instance is invalid",false,user.verificateUser());

    }


}
