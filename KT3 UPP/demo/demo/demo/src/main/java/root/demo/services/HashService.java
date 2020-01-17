package root.demo.services;

import org.apache.commons.lang.RandomStringUtils;
import org.camunda.bpm.engine.delegate.DelegateExecution;
import org.camunda.bpm.engine.delegate.JavaDelegate;

import org.springframework.stereotype.Service;

import java.util.Random;


@Service
public class HashService implements JavaDelegate {
    @Override
    public void execute(DelegateExecution execution) throws Exception {

        String hash = RandomizeString(6);

        execution.setVariable("hashValue",hash);
    }

    public String RandomizeString(int n)
    {
        String AlphaNumericString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "0123456789" + "abcdefghijklmnopqrstuvxyz";

        StringBuilder sb = new StringBuilder(n);

        for(int i = 0; i < n ; i++)
        {
            int index =(int)(AlphaNumericString.length()*Math.random());

            sb.append(AlphaNumericString.charAt(index));
        }
        return sb.toString();
    }
}
