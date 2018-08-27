package cl.novuscreate.backend.Singleton;

import cl.novuscreate.backend.common.BussinessException;
import cl.novuscreate.backend.common.ErrorResult;
import com.google.common.base.Preconditions;

import java.nio.charset.StandardCharsets;
import java.util.Base64;

public class Settings {
    private String host;
    private int port;
    private String context;
    private String username;
    private String password;

    private static Settings instance = new Settings();

    private Settings() {
    }

    public static Settings getInstance() {
        return instance;
    }

    public String getHost() {
        return host;
    }

    public void setHost(String host) {
        this.host = host;
    }

    public int getPort() {
        return port;
    }

    public void setPort(int port) {
        this.port = port;
    }

    public String getContext() {
        return context;
    }

    public void setContext(String context) {
        this.context = context;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUrl() {
        Preconditions.checkNotNull(host,
                new BussinessException(String.format(ErrorResult.EMPTRY_RESULT.getMessage(), "host")));
        return host + ":" + port + context;
    }

    public String getCredentials() {
        return "Basic ".concat(Base64.getEncoder()
                .encodeToString(username.concat(":").concat(password).getBytes(StandardCharsets.UTF_8)));
    }
}
