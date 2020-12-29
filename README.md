1. Klonirati link lokalno sa repozitorijuma ("https://github.com/milan7705/my-recipe-book")

2. Instalirati lokalno na računaru "NodeJS" najvnoviju verziju ("https://nodejs.org/en/download/current/")

3. U root-u direktorijuma gde se nalazi projekat, preko terminala izvršiti sledeće komande:
	
	3.1) npm install -g @angular/cli
	3.2) ng new <naziv_projekta>
	3.3) cd <naziv_projekta>




4.U root folderu projekta (gde se nalazi package.json) otvoriti terminal i instalirati neophodne module za pokretanje projekta komandom:
	
	4.1) npm install --save


5.Kada se zavriši dodavanje modula, sledi pokretanje projekta, koje se izvršava preko terminala.
  
	5.1)Za pokretanje klijentske strane otvoriti terminal u root folderu projekta komandom:
	
		5.1.1) ng serve	

	5.2)Za pokretanje serverske strane otvoriti terminal u Root folderu projekta uporedno sa terminalom zaduženim za klijentsku stranu
	    i pokrenuti server komandom:
		
		5.2.1) npm run server
 