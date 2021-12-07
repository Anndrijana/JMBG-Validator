# JMBG-Validator
Kreirana je aplikacija koja će na osnovu unetog imena, prezimena i JMBG-a vratiti sve informacije koje iza sebe ima ovaj broj. Takođe je izvršena i validacija, te ukoliko se unese nevalidan JMBG, prikazuju se odgovarajuće poruke o grešci. Aplikacija poseduje interfejs u kojem će se unositi ulazni podaci, pri čemu omogućuje prikaz dobijenih informacija na osnovu unetog broja.

Izgled početne strane aplikacije:
![1](https://user-images.githubusercontent.com/61964257/145045391-503b56f9-782a-4937-879b-623ee2a7617f.PNG)

Ukoliko se unese samo ime korisnika, bez unosa prezimena i JMBG-a, prikazaće se poruka o grešci kao na sledećoj fotografiji:
![2](https://user-images.githubusercontent.com/61964257/145045556-ea193684-4b79-45ab-b663-b3a4be638951.PNG)

JMBG je napravljen od 13 cifara u formi „DDMMGGGRRBBBK“, gde su: DD – dan rođenja, MM – mesec rođenja, GGG – poslednje tri cifre godine rođenja, RR – politički regija rođenja (za građane rođene pre 1976. godine politički regija gde su trenutno živeli).
Na narednoj fotografiji prikazan je slučaj kada je za dan rođenja unet broj koji je veći od broja 31, mesec rođenja koji je veći od broja 12 i godina rođenja koja je veća od 1900. godine, gde će se pritom prikazi poruka o sledećim greškama:
![3](https://user-images.githubusercontent.com/61964257/145045623-a0d38bd3-b027-4423-9379-4a6cf67b4324.PNG)

Ukoliko su svi uneti podaci ispravni prikazaće se izlazni podaci, kao na primeru na sledećoj fotografiji:
![4](https://user-images.githubusercontent.com/61964257/145045664-75304d66-eaee-4b2d-bf34-c229387710f2.PNG)
