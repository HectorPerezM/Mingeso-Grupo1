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




    public void execPythonScript(String code) {
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

    public void staticCodeAnalysisInC(String code) {
        int expectedIdentation = 0, currentIdentation = 0;
        int currentLineCode = 1;

        //Check for comentaries in format:  //comentary
        boolean isHalfComentary = false;
        //Check for comentaries in format:  /*comentary*/
        boolean isTrueComentary = false;

        //Check code structuration and identation letter for letter
        int i = 0;
        int currentState = 1;
        int codeLenght = code.length();
        char currentLetter = code.charAt(0);
        /*DEBUG*/System.out.println("Code Lenght: "+codeLenght);
        while (i<codeLenght) {

            if (currentLetter == '\t') {
                currentIdentation++;
            }
            else if (currentLetter == '\n') {
                if (currentIdentation < expectedIdentation) {
                    System.out.println("Buenas prácticas: Se esperaba identación en línea: "+currentLineCode);System.out.println("Code Lenght: "+codeLenght);
                }
                currentLineCode++;
                currentIdentation = 0;
                isHalfComentary = false;
                /*DEBUG*/System.out.println("New line: "+currentLineCode);
            }

            //check for half and complete comentaries
            if (i+1<codeLenght && code.charAt(i) == '/' && code.charAt(i+1) == '/') {
                isHalfComentary = true;
            }
            else if (i+1<codeLenght && code.charAt(i) == '/' && code.charAt(i+1) == '*') {
                isTrueComentary = true;
            }
            else if (i+1<codeLenght && code.charAt(i) == '*' && code.charAt(i+1) == '/') {
                isTrueComentary = false;
            }

            //if a object in the code is not commented
            if (isHalfComentary == false && isTrueComentary == false){
                switch (code.charAt(i)) {
                    case 1:
                        if (currentLetter == '(') {
                            currentState = 2;
                        }
                        else if (currentLetter == '\t') {
                            System.out.println("Buenas prácticas: No es necesario generar identación en línea: "+currentLineCode);
                        }
                        break;
                    case 2:
                        if (currentLetter == ')') {
                            currentState = 3;
                        }
                        else if (!(currentLetter == ' ' || currentLetter == '\t' || currentLetter == '\n'))
                        {
                            currentState = 1;
                        }
                        break;
                    case 3:
                        if (currentLetter == '{') {
                            currentState = 4;
                            expectedIdentation++;
                        }
                        break;
                    case 4:
                        if (currentLetter == '\n') {
                            currentState = 5;
                        }
                        else if (currentLetter == '}') {
                            expectedIdentation--;
                        }
                        else if (currentLetter == '{') {
                            expectedIdentation++;
                            System.out.println("Buenas prácticas: Se esperaba nueva línea en línea : "+currentLineCode);
                        }
                        break;
                    case 5:
                        if (currentLetter == '{') {
                            currentState = 4;
                            expectedIdentation++;
                        }
                        else if (currentLetter == ';') {
                            currentState = 4;
                        }
                        break;
                    default:
                        currentState = 1;
                        break;
                }
            }
            i++;
            currentLetter = code.charAt(i);
        }

        String[] codeWords = code.split("[A-Za-z][A-Za-z0-9_]*");
        for (i = 0; i < codeWords.length; i++) {
            if (codeWords[i].length() == 1 && (codeWords[i]).charAt(0)<'i') {
                System.out.println("Buenas prácticas: Nombre no representativo en línea : "+currentLineCode);
            }
            else if (codeWords[i].length() < 4) {
                System.out.println("Buenas prácticas: Nombre demasiado corto en línea : "+currentLineCode);
            }
        }
        return;
    }

}
