package org.example;

import com.sun.org.apache.xalan.internal.lib.ExsltStrings;

import java.util.HashMap;
import java.util.Map;

import static com.sun.org.apache.xalan.internal.lib.ExsltStrings.split;

public class Main {
    public static void main(String[] args) {
//        HashMap<Integer, String> map = new HashMap<Integer, String>();
//        map.put(1, "one");
//        map.put(2, "two");
//        String number = map.get(2);
//        System.out.println(number);
//        map.remove(2);

        String text ="aplld.aplld.jgjj.njnk.uewn.njnk.jgjj";
        HashMap<String, Integer> map2 = new HashMap<>();
        for(String word : text.split("\\.")){
            map2.put(word, map2.getOrDefault(word, 0) + 1);
        }
        System.out.println(map2);

    }
}