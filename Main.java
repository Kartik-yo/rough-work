import java.io.FileWriter;
import java.io.IOException;

public class Main {
    public static void main(String[] args) {
        try (FileWriter writer = new FileWriter("/home/ubuntu/java-repo/output.txt")) {
            // Your logic here
            writer.write("Program executed successfully!\n");
            // If there are errors, write them to the file as well
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
