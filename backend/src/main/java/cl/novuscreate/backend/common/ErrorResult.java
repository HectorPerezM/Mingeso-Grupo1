package cl.novuscreate.backend.common;

public enum ErrorResult {
    EMPTRY_RESULT("%s cannot be null"),
    INVALID_ARGUMENT("%s is not a valid type");
    private String message;

    private ErrorResult(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
