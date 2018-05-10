package cl.novuscreate.backend.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

import static javax.persistence.GenerationType.IDENTITY;

@Entity
@Table(name="examples", uniqueConstraints = @UniqueConstraint(columnNames = "EXAMPLE_ID"))
public class Example {

    private int exampleId;
    private String exampleTitle;
    private Problem problem;


    @Id
    @GeneratedValue(strategy = IDENTITY)
    @Column(name = "EXAMPLE_ID", unique = true, nullable = false)
    public int getExampleId() {
        return exampleId;
    }

    public void setExampleId(int exampleId) {
        this.exampleId = exampleId;
    }

    @Column(name = "EXAMPLE_TITLE", nullable = false)
    public String getExampleTitle() {
        return exampleTitle;
    }

    public void setExampleTitle(String exampleTitle) {
        this.exampleTitle = exampleTitle;
    }

    @JsonBackReference
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "PROBLEM_ID")
    public Problem getProblem() {
        return problem;
    }

    public void setProblem(Problem problem) {
        this.problem = problem;
    }
}
