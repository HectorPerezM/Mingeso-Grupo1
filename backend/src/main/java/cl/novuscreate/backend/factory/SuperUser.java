package cl.novuscreate.backend.factory;

import cl.novuscreate.backend.entity.User;

public abstract class SuperUser {
    private int userId;
    private String userEmail;
    private String userPassword;
    private int userType = -1;


    public SuperUser(int userId, String userEmail, String userPassword, int userType) {
        this.userId = userId;
        this.userEmail = userEmail;
        this.userPassword = userPassword;
        this.userType = userType;
    }

    public SuperUser() {
    }

    public abstract void instanceWithPermission(User u);


    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public String getUserPassword() {
        return userPassword;
    }

    public void setUserPassword(String userPassword) {
        this.userPassword = userPassword;
    }

    public int getUserType() {
        return userType;
    }

    public void setUserType(int userType) {
        this.userType = userType;
    }
}
