package cl.novuscreate.backend.entity;

import cl.novuscreate.backend.factory.SuperUser;

public class NullUser extends SuperUser {




    @Override
    public boolean isNil(){
        return true;
    }

    @Override
    public void instanceWithPermission(User u) {

    }
}
