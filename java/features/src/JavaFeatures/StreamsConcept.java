package JavaFeatures;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.stream.Stream;

public class StreamsConcept {


    public static void main(String[] args) {

        //JDK 8
        Stream.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
                .filter(e -> e % 2 == 0)
                .forEach(System.out::println);


        Stream.of("hello", "java")
                .map(t -> t + " world")
                .forEach(System.out::println);


        //Optional JDK8:
        String s[] = new String[5];
        s[2] = "Naveen";
        Optional<String> isnull = Optional.ofNullable(s[2]);


        if (isnull.isPresent()) {
            System.out.println(s[2] + " " + s[2].length());

        } else {
            System.out.println("value is not available");
        }

        Optional<String> nothing = Optional.empty();

        //Jshell JDK 9

        //factory methods for inmutable collections

        List<String> lang = List.of("java", "python", "ruby", "js");
        lang.stream().forEach(e -> System.out.println(e));

        //JDK 10
        var x = 10;
        System.out.println(x + 10);
        var h = new HashSet<String>();
        h.add("javaTest");
        var h1 = new ArrayList<String>();
        h1.add("geege");
        System.out.println(h1.get(0));


        //new switch case in JDK 12

        var n = 3;
        var m = switch (n) {
            case 1 -> "one";
            case 2 -> "two";
            case 3 -> "tree";
            case 4 -> "four";
            default -> throw new IllegalStateException("Unexpected value: " + n);
        };


        System.out.println(m);


        //JDK13

        var response = """
                {
                   "object_or_array": "object",
                   "empty": false,
                   "parse_time_nanoseconds": 19608,
                   "validate": true,
                   "size": 1
                }
                """;

        System.out.println(response);


        //JDK14
        Employee e1 = new Employee("rafa", 24, "ASDO");
        System.out.println(e1.name());
        System.out.println(e1.age());


        //JDK14 instanceof
        Object ob = new String("Rafael");
        if (ob instanceof String) {
            System.out.println(((String) ob).length());


        }





    }
}
