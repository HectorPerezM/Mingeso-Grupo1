package cl.novuscreate.backend.entity;

import javax.persistence.*;

import static javax.persistence.GenerationType.IDENTITY;

@Entity
@Table(name="solutions", uniqueConstraints = @UniqueConstraint(columnNames = "SOLUTION_ID"))
public class Solution {

    private int solutionId;
    private String solutionCode;
    private UserProblem userProblem;

    @Id
    @GeneratedValue(strategy = IDENTITY)
    @Column(name = "SOLUTION_ID", unique = true, nullable = false)
    public int getSolutionId() {
        return solutionId;
    }

    public void setSolutionId(int solutionId) {
        this.solutionId = solutionId;
    }

    @Column(name = "SOLUTION_CODE", nullable = false)
    public String getSolutionCode() {
        return solutionCode;
    }

    public void setSolutionCode(String solutionCode) {
        this.solutionCode = solutionCode;
    }

    @OneToOne(fetch = FetchType.LAZY,
            cascade =  CascadeType.ALL,
            mappedBy = "solution")
    public UserProblem getUserProblem() {
        return userProblem;
    }

    public void setUserProblem(UserProblem userProblem) {
        this.userProblem = userProblem;
    }
}
