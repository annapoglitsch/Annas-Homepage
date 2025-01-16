
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;

public class CreateCard{

    public void writeToFile(){
            try (FileWriter fileWriter = new FileWriter("Entry1.txt")) {
                PrintWriter printWriter = new PrintWriter(fileWriter);
                printWriter.print("Some String");
                printWriter.printf("Product name is %s and its price is %d $", "iPhone", 1000);
                printWriter.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
    }
}