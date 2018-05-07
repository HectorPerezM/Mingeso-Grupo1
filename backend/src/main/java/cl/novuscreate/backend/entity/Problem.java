package cl.novuscreate.backend.entity;

import javax.persistence.*;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import static javax.persistence.GenerationType.IDENTITY;

@Entity
@Table(name="problems", uniqueConstraints = @UniqueConstraint(columnNames = "PROBLEM_ID"))
public class Problem {

    private int problemId;
    private String problemTitle;
    private String problemStatement;

    private User user;
//
//    @OneToMany(
//            mappedBy = "problem",
//            cascade = CascadeType.ALL,
//            orphanRemoval = true
//    )
    private Set<UserProblem> userProblems = new HashSet<UserProblem>();



    @Id
    @GeneratedValue(strategy = IDENTITY)
    @Column(name = "PROBLEM_ID", unique = true, nullable = false)
    public int getProblemId() {
        return problemId;
    }

    public void setProblemId(int problemId) {
        this.problemId = problemId;
    }

    @Column(name = "PROBLEM_TITLE", nullable = false)
    public String getProblemTitle() {
        return problemTitle;
    }

    public void setProblemTitle(String problemTitle) {
        this.problemTitle = problemTitle;
    }

    @Column(name = "PROBLEM_STATEMENT", nullable = false)
    public String getProblemStatement() {
        return problemStatement;
    }

    public void setProblemStatement(String problemStatement) {
        this.problemStatement = problemStatement;
    }

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "USER_ID")
    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @OneToMany(fetch = FetchType.EAGER, mappedBy = "problem", orphanRemoval=true)
    public Set<UserProblem> getUserProblems() {
        return userProblems;
    }

    public void setUserProblems(Set<UserProblem> userProblems) {
        this.userProblems = userProblems;
    }
}
