package cl.novuscreate.backend.factory;

import cl.novuscreate.backend.entity.ProfessorUser;
import cl.novuscreate.backend.entity.User;

public class UserFactory {


    public static SuperUser getUser(String type, String ram, String hdd, String cpu){
//        if("user".equalsIgnoreCase(type)) return new User("estudiante@usach.cl","password",0,1,1);
        if("user".equalsIgnoreCase(type)) return new User("estudiante@usach.cl","password",0,1,1);

        else if("professor".equalsIgnoreCase(type)) return new ProfessorUser("estudiante@usach.cl","password",1,1,1);

        return null;
    }

}
