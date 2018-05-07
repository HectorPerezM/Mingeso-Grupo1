package cl.novuscreate.backend.entity;

import javax.persistence.*;

import static javax.persistence.GenerationType.IDENTITY;


@Entity
@Table(name="users", uniqueConstraints = @UniqueConstraint(columnNames = "USER_ID"))
public class User {


    private int userId;
    private String userEmail;
    private int userType;


    public User(int userId, String userEmail, int userType) {
        this.userId = userId;
        this.userEmail = userEmail;
        this.userType = userType;
    }

    @Id
    @GeneratedValue(strategy = IDENTITY)
    @Column(name = "USER_ID", unique = true, nullable = false)
    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    @Column(name = "USER_EMAIL", unique = true, nullable = false)
    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    @Column(name = "USER_TYPE", nullable = false)
    public int getUserType() {
        return userType;
    }

    public void setUserType(int userType) {
        this.userType = userType;
    }
}
