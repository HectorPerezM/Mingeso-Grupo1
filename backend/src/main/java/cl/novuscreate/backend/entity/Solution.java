package cl.novuscreate.backend.entity;

import org.python.core.PyInteger;
import org.python.core.PyObject;
import org.python.util.PythonInterpreter;

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

    @Column(name = "SOLUTION_CODE", nullable = false, columnDefinition = "TEXT")
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




    public void execPythonScript(String code){
        PythonInterpreter python = new PythonInterpreter();

        int number1 = 10;
//        int number2 = 32;

        python.set("number1", new PyInteger(number1));
//        python.set("number2", new PyInteger(number2));

//        python.exec("def factorial(n):\n" +
//                "    if n == 0:\n" +
//                "        return 1\n" +
//                "    else:\n" +
//                "        return n * factorial(n-1)\n" +
//                "number3 = factorial(number1)");

        python.exec(code);

//        python.exec("number3 = number1+number2");
        PyObject number3 = python.get("number3");
        System.out.println("val : "+number3.toString());
    }

}
