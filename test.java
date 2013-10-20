public class test {

    public static Scanner kb = new Scanner(System.in);

    public static void main(String[] args) {
	Integer amount = kb.nextInt();
	Boolean answers[] = new Boolean[amount];
	for(int i = 0; i < amount; i++)
	    answers[i] = calc();
    }

    public static Boolean calc() {

    }


    public static Integer decode(String pow) {
	int number = 0;
	for(int i = pow.length() -1; i > -1; i--) {
	    int power = pow.length() -1 -i;
	    int numberAdding = 0;
	    if(pow.charAt(i) == 'V')
		numberAdding = 0;
	    else if(pow.charAt(i) == 'U')

		numberAdding = 1;
	    else if(pow.charAt(i) == 'C')
		numberAdding = 2;
	    else if(pow.charAt(i) == 'D')
		numberAdding = 3;
	    number += numberAdding * Math.pow(4, power);
	}
	return number;
    }

}