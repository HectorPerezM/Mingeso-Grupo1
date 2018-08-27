package cl.novuscreate.backend.factory;

import cl.novuscreate.backend.entity.NullUser;
import cl.novuscreate.backend.entity.ProfessorUser;
import cl.novuscreate.backend.entity.User;

public class UserFactory {


    public static SuperUser getUser(String type, String userEmail, String userPassword, Integer userCarrer, Integer userSection){
//        if("user".equalsIgnoreCase(type)) return new User("estudiante@usach.cl","password",0,1,1);
//        if("user".equalsIgnoreCase(type)) return new User("estudiante@usach.cl","password",0,1,1);
//        else if("professor".equalsIgnoreCase(type)) return new ProfessorUser("estudiante@usach.cl","password",1,1,1);

        if("user".equalsIgnoreCase(type))
            return new User(userEmail,userPassword,0,userCarrer,userCarrer);
        else if("professor".equalsIgnoreCase(type))
            return new User(userEmail,userPassword,1,userCarrer,userCarrer);
        else
            return new NullUser();

    }

}
