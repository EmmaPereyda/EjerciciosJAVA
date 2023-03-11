
package Practicas;

import java.time.LocalTime;
public class Practicas { 
	
	
	//clase para obtener la circunferencia y el area de un circulo.
	public static class Circulo {
        double radio = 6;
        double perimetro = 2 * Math.PI * radio;
        double area = Math.PI * Math.pow(radio,2);
        
        
        
        
    }
	
	//metodo para calcular el volumen de un cono.
	public static double calcularVolumenCono(double radio2, double altura) {
	    double volumen = (Math.PI * radio2 * radio2 * altura) / 3.0;
	    return volumen;
	}
	
	//metodo para obtener el area superficial de un cubo.
	public static double areaS(double lado) {
	    double area3 = 6 * lado * lado;
	    return area3;
	}
	
	//metodo para saber el area de un triangulo dado sus lados y si es valido o no.
	public static double AreaTriangulo(double a, double b, double c) {
	    if (TrianguloValido(a, b, c)) {
	        
	        double s = (a + b + c) / 2;
	  
	        double area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
	        return area;
	    } else {
	        System.out.println("Triangulo invalido");
	        return 0;
	    }
	}
    

	public static boolean TrianguloValido(double a, double b, double c) {
	    
	    boolean esValido = (a < b + c) && (b < a + c) && (c < a + b);
	    return esValido;
	}
	
	//metodo para obtener la hora del sistema.
	public static void horaDelSistema(){
		LocalTime hora = LocalTime.now();
		System.out.println("la hora es:" + hora);
		
		
	}
	
	//metodo para convertir los segundos a minutos y horas.
	public static void segundosAMin(int segundos) {
		int horas = segundos/ 3600;
		int minutos = segundos/60;
	    System.out.println(horas + "horas" + minutos +"minutos");
		
		
	}
	
	//metodo para obtener el volumen de una esfera dado su radio.
	public static double VolumenEsfera(double radio3) {
	    double volumen3 = (4.0 / 3.0) * Math.PI * Math.pow(radio3, 3);
	    return volumen3;
	}
	
	//metodo para saber si un ano es bisisesto
	public static boolean Bisiesto(int anio) {
	    if (anio % 4 != 0) {
	        return false;
	    } else if (anio % 100 != 0) {
	        return true;
	    } else if (anio % 400 != 0) {
	        return false;
	    } else {
	        return true;
	    }
	}
	
	//metodo principal
	public static void main(String[] args) {
		
		   //llamamos a nuestro metodo para calcular area y perimetro de un circulo.
		 Circulo miCirculo = new Circulo();
	        System.out.println("El perímetro del círculo es: " + miCirculo.perimetro);
	        System.out.println("El area del circulo es: " + miCirculo.area);
		        
	        //valores de radio y altura del cono, mandamos a traer el metodo e imprimimos volumen.
	        double radio2 = 50;
	        double altura = 18;
	        double volumen = calcularVolumenCono(radio2, altura);
	        System.out.println("El volumen del cono es: " + volumen);
		
	        //valores de un lado del cubo y mandamos a llamar la funcion para imprimir area superficial.
	        double lado = 10;
	        double area3 = areaS(lado);
	        System.out.println("El área superficial del cubo es: " + area3);
	        
	        //valores de lados de triangulo y mandamosa traer metodo e imprimimos resultado
	        double lado1 = 3;
	        double lado2 = 5;
	        double lado3 = 9;
	        double area = AreaTriangulo(lado1, lado2, lado3);
	        System.out.println("El área del triángulo es: " + area);
	        
	        //mandamos a llamar el metodo para imprimir la hora del sistema
	        horaDelSistema();
	        
	        //mandamos a traer el metodo para imprimir el resultado de la conversion.
	        segundosAMin (120);
	        
	        //valor de variables y mandamos a traer metodo para imprimir el volumen de la esfera.
	        double radio3 = 14;
	        double volumen3 = VolumenEsfera(radio3);
	        System.out.println("El volumen de la esfera  es: " + volumen3);
	        
	        //valor del a;o que se va a usar como ejemplo e imprimimos si es bisisesto o no
	        int anio = 1998;
	        if (Bisiesto(anio)) {
	            System.out.println(anio + " es un año bisiesto");
	        } else {
	            System.out.println(anio + " no es un año bisiesto");
	        }
	        
	        //////////////////////////////////////////////////////////////////////////////////
            //declaramos el string a voltear
			String original = "emma";
			       //metodo
			       StringBuilder severla = new StringBuilder();
			       
			       severla.append(original);
			       severla = severla.reverse();
			       
			       //imprimos variable al reves (severla)
			       System.out.println( severla.toString());
			       


            /////////////////////////////////////////////////////////////////////////////////
			  //declaramnois varuiables
			       int x = 6;
			       int y =4;
			       
			       int acarreo;
			       //ciclo para moverla y sumarla por bits
			       while(y != 0) {
			       	acarreo = x & y;
			       	x = x ^ y;
			       	
			       	y = acarreo << 1;
			       }
			       //imprimimos resultado
			       System.out.println(x);
			       
			      ///////////////////////////////////////////////////////////////////////// 
			       //declaramos variables
			       int contador = 0;
			       int numero = 2;
			       

				   //inicio del ciclo while
			       while (contador < 100) {
					   //condicional if
			           if (Primo(numero)) {
			               System.out.println(numero);
			               contador++;
			           }
			           numero++;
			       }
			   }
			       
			      public static boolean Primo(int numero) {
			      if (numero <= 1) {
			           return false;
			       }
			      for (int i = 2; i <= Math.sqrt(numero); i++) {
			      if (numero % i == 0) {
			          return false;
			           }
			       }
			        return true;
					 
					 
					 
					 /////////////////////////////////////////////////////////////////////////////////////////
					 //programa para saber si un numero par es palindromo
					Scanner input = new Scanner(System.in);
			       //pedimos al usuario que ingrese un numero 
			       System.out.print("Ingrese un número de dos dígitos: ");
				   //guardamos el numero ingresado
			       int numero = input.nextInt();
			    
				   //condicional para que indica si es palindromo o no
			       if (esPalindromo(numero)) {
			           System.out.println(numero + " es un palíndromo.");
			       } else {
			           System.out.println(numero + " no es un palíndromo.");
			       }
			   }
			   //mandamos a llamar el metodo con un argumento
			   public static boolean esPalindromo(int numero) {
				//declaramnos variables
			       int original = numero;
			       int invertido = 0;
				   //iniciamos ciclo while
			       while (numero > 0) {
			           int digito = numero % 10;
			           invertido = invertido * 10 + digito;
			           numero = numero / 10;
			       }
				   //retornamos el resultado
			       return original == invertido && original >= 10 && original <= 99;
					
					
	        ///////////////////////////////////////////////////////////////////

			//ejercicio para encopntrar facotiral de un numero
			//metodo factorial
	public static int factorial(int n) {
		//condicional if para parametros del valor
	    if (n == 0 || n == 1) {
			//retorno de valor
	        return 1;
	    }
	    //retorno de la funcion factorial
	    return n * factorial(n - 1);
	}
	public static void main(String[] args) {
		

	        //asignacion del valor de las variables
		    int numero = 10;
		    int factorial = factorial(numero);
		    //impresion del resultado
		    System.out.println("El factorial de " + numero + " es " + factorial);
		}



        ////////////////////////////////////////////////////////////////////////////
		//metodo para eliminar los espacios de un String
        String textoConEspacios = "   e m m a   ";
        String textoSinEspacios = textoConEspacios.replaceAll("\\s+", "");
        System.out.println(textoSinEspacios); 

		//////////////////////////////////////////////////////////////////////////////

        
	}
	        
	        
	        
	        
	        
	        
	        
	        
	        
	        
	        
	            
	        }
	    
	        

		
	
		}
	