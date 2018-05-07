package cl.novuscreate.backend.entity;

import javax.persistence.*;

import static javax.persistence.GenerationType.IDENTITY;

@Entity
@Table(name="problems", uniqueConstraints = @UniqueConstraint(columnNames = "PROBLEM_ID"))
public class Problem {

    private int problemId;
    private String problemTitle;
    private String problemStatement;

    private User user;



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
}
