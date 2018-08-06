package cl.novuscreate.backend.Singleton;

public class Sample {

    /**
     * @param args
     */
    public static void main(String[] args) {
        Settings settings = Settings.getInstance();
        System.out.println("Setting default settings.");
        settings.setHost("http://localhost");
        settings.setPort(8080);
        settings.setContext("/rest");
        settings.setUsername("user");
        settings.setPassword("SecretPassword");

        System.out.println(Settings.getInstance().getUrl());
        System.out.println(Settings.getInstance().getCredentials());

        System.out.println("Updating settings.");
        settings = Settings.getInstance();
        settings.setHost("http://192.168.5.1");
        settings.setUsername("prodUser");
        settings.setPassword("UltraSecretPassword");

        System.out.println(Settings.getInstance().getUrl());
        System.out.println(Settings.getInstance().getCredentials());
    }
}