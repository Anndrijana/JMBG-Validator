const form = document.getElementById('form');
const ime = document.getElementById('ime');
const prezime = document.getElementById('prezime');
const jmbg = document.getElementById('jmbg');
const form2 = document.getElementById('form2');
const title1 = documet.getElementById('title1');

function proveriUnos() {
    const poljeIme = ime.value.trim();
    const poljePrezime = prezime.value.trim();
    const poljeJmbg = jmbg.value.trim();

    let DR = poljeJmbg[0] + poljeJmbg[1];
    var MR = poljeJmbg[2] + poljeJmbg[3];
    var GR = poljeJmbg[4] + poljeJmbg[5] + poljeJmbg[6];
    var RR = poljeJmbg[7] + poljeJmbg[8];

    if(poljeIme === '' && poljePrezime === '' && poljeJmbg === '') {
        porukaOGresci(ime, 'Polje za unos Vašeg imena ne može ostati prazno.');
        porukaOGresci(prezime, 'Polje za unos Vašeg prezimena ne može ostati prazno.');
        porukaOGresci(jmbg, 'Polje za unos Vašeg JMBG-a ne može ostati prazno.');
    } else if(poljeIme === '' && poljePrezime === '') {
        porukaOGresci(ime, 'Polje za unos Vašeg imena ne može ostati prazno.');
        porukaOGresci(prezime, 'Polje za unos Vašeg prezimena ne može ostati prazno.');
        if(jmbg.value.length != 13) {
            porukaOGresci(jmbg, 'JMBG MORA imati 13 cifara!');
        } 
        else {
            if(DR == 0 || DR > 31 && MR < 1 || MR > 12 && GR < 1900 || GR > 2100 && (RR > 50 && RR < 70) || RR > 99) {
                porukaOGresci(jmbg, "Uneli ste neispravan podatak o DANU rođenja!")
                porukaOGresci2(jmbg, "Uneli ste neispravan podatak o MESECU rođenja!")
                porukaOGresci3(jmbg, "Uneli ste neispravan podatak o GODINI rođenja!")
                porukaOGresci4(jmbg, "Uneli ste neispravan podatak o REGIJI rođenja!")
            } else if (DR == 0 || DR > 31 && MR < 1 || MR > 12) {
                porukaOGresci(jmbg, "Uneli ste neispravan podatak o DANU rođenja!")
                porukaOGresci2(jmbg, "Uneli ste neispravan podatak o MESECU rođenja!")
            }
            else if (DR == 0 || DR > 31 && GR < 1900 || GR > 2100) {
                porukaOGresci(jmbg, "Uneli ste neispravan podatak o DANU rođenja!")
                porukaOGresci3(jmbg, "Uneli ste neispravan podatak o GODINI rođenja!")
            }
            else if (DR == 0 || DR > 31 && (RR > 50 && RR < 70) || RR > 99) {
                porukaOGresci(jmbg, "Uneli ste neispravan podatak o DANU rođenja!")
                porukaOGresci4(jmbg, "Uneli ste neispravan podatak o REGIJI rođenja!")
            }
            else if (MR < 1 || MR > 12 && GR < 1900 || GR > 2100) {
                porukaOGresci2(jmbg, "Uneli ste neispravan podatak o MESECU rođenja!")
                porukaOGresci3(jmbg, "Uneli ste neispravan podatak o GODINI rođenja!")
            }
            else if (GR < 1900 || GR > 2100 && (RR > 50 && RR < 70) || RR > 99) {
                porukaOGresci3(jmbg, "Uneli ste neispravan podatak o GODINI rođenja!")
                porukaOGresci4(jmbg, "Uneli ste neispravan podatak o REGIJI rođenja!")
            }
            else if (MR < 1 || MR > 12) {
                porukaOGresci(jmbg, "Uneli ste neispravan podatak o MESECU rođenja!")
            } else if (GR < 1900 || GR > 2100) {
                porukaOGresci(jmbg, "Uneli ste neispravan podatak o GODINI rođenja!")
            } else if ((RR > 50 && RR < 70) || RR > 99) {
                porukaOGresci(jmbg, "Uneli ste neispravan podatak o REGIJI rođenja!")
            } 
            else {
                porukaOUspehu(jmbg);
            }
        }
    } else if(poljeIme === '' && poljeJmbg === '') {
        porukaOGresci(ime, 'Polje za unos Vašeg imena ne može ostati prazno.');
        porukaOGresci(jmbg, 'Polje za unos Vašeg JMBG-a ne može ostati prazno.');
        if(!samoSlova(poljePrezime)) {
            porukaOGresci(prezime, 'Dozvoljen je unos SAMO slovnih znakova!');
        }
        else {
            porukaOUspehu(prezime);
        }
    } else if(poljeIme === '') {
        porukaOGresci(ime, 'Polje za unos Vašeg imena ne može ostati prazno.');
        if(!samoSlova(poljePrezime)) {
            porukaOGresci(prezime, 'Dozvoljen je unos SAMO slovnih znakova!');
        }
        else {
            porukaOUspehu(prezime);
        }
        if(jmbg.value.length != 13) {
            porukaOGresci(jmbg, 'JMBG MORA imati 13 cifara!');
        }
        else {
            if(DR == 0 || DR > 31 && MR < 1 || MR > 12 && GR < 1900 || GR > 2100 && (RR > 50 && RR < 70) || RR > 99) {
                porukaOGresci(jmbg, "Uneli ste neispravan podatak o DANU rođenja!")
                porukaOGresci2(jmbg, "Uneli ste neispravan podatak o MESECU rođenja!")
                porukaOGresci3(jmbg, "Uneli ste neispravan podatak o GODINI rođenja!")
                porukaOGresci4(jmbg, "Uneli ste neispravan podatak o REGIJI rođenja!")
            } else if (DR == 0 || DR > 31 && MR < 1 || MR > 12) {
                porukaOGresci(jmbg, "Uneli ste neispravan podatak o DANU rođenja!")
                porukaOGresci2(jmbg, "Uneli ste neispravan podatak o MESECU rođenja!")
            }
            else if (DR == 0 || DR > 31 && GR < 1900 || GR > 2100) {
                porukaOGresci(jmbg, "Uneli ste neispravan podatak o DANU rođenja!")
                porukaOGresci3(jmbg, "Uneli ste neispravan podatak o GODINI rođenja!")
            }
            else if (DR == 0 || DR > 31 && (RR > 50 && RR < 70) || RR > 99) {
                porukaOGresci(jmbg, "Uneli ste neispravan podatak o DANU rođenja!")
                porukaOGresci4(jmbg, "Uneli ste neispravan podatak o REGIJI rođenja!")
            }
            else if (MR < 1 || MR > 12 && GR < 1900 || GR > 2100) {
                porukaOGresci2(jmbg, "Uneli ste neispravan podatak o MESECU rođenja!")
                porukaOGresci3(jmbg, "Uneli ste neispravan podatak o GODINI rođenja!")
            }
            else if (GR < 1900 || GR > 2100 && (RR > 50 && RR < 70) || RR > 99) {
                porukaOGresci3(jmbg, "Uneli ste neispravan podatak o GODINI rođenja!")
                porukaOGresci4(jmbg, "Uneli ste neispravan podatak o REGIJI rođenja!")
            }
            else if (MR < 1 || MR > 12) {
                porukaOGresci(jmbg, "Uneli ste neispravan podatak o MESECU rođenja!")
            } else if (GR < 1900 || GR > 2100) {
                porukaOGresci(jmbg, "Uneli ste neispravan podatak o GODINI rođenja!")
            } else if ((RR > 50 && RR < 70) || RR > 99) {
                porukaOGresci(jmbg, "Uneli ste neispravan podatak o REGIJI rođenja!")
            } 
            else {
                porukaOUspehu(jmbg);
            }
        }
    } else if(poljePrezime === '') {
        porukaOGresci(prezime, 'Polje za unos Vašeg prezimena ne može ostati prazno.');
        if(!samoSlova(poljeIme)) {
            porukaOGresci(ime, 'Dozvoljen je unos SAMO slovnih znakova!');
        } else {
            porukaOUspehu(ime);
        }
        if(jmbg.value.length != 13) {
            porukaOGresci(jmbg, 'JMBG MORA imati 13 cifara!');
        }
        else {
            if(DR == 0 || DR > 31 && MR < 1 || MR > 12 && GR < 1900 || GR > 2100 && (RR > 50 && RR < 70) || RR > 99) {
                porukaOGresci(jmbg, "Uneli ste neispravan podatak o DANU rođenja!")
                porukaOGresci2(jmbg, "Uneli ste neispravan podatak o MESECU rođenja!")
                porukaOGresci3(jmbg, "Uneli ste neispravan podatak o GODINI rođenja!")
                porukaOGresci4(jmbg, "Uneli ste neispravan podatak o REGIJI rođenja!")
            } else if (DR == 0 || DR > 31 && MR < 1 || MR > 12) {
                porukaOGresci(jmbg, "Uneli ste neispravan podatak o DANU rođenja!")
                porukaOGresci2(jmbg, "Uneli ste neispravan podatak o MESECU rođenja!")
            }
            else if (DR == 0 || DR > 31 && GR < 1900 || GR > 2100) {
                porukaOGresci(jmbg, "Uneli ste neispravan podatak o DANU rođenja!")
                porukaOGresci3(jmbg, "Uneli ste neispravan podatak o GODINI rođenja!")
            }
            else if (DR == 0 || DR > 31 && (RR > 50 && RR < 70) || RR > 99) {
                porukaOGresci(jmbg, "Uneli ste neispravan podatak o DANU rođenja!")
                porukaOGresci4(jmbg, "Uneli ste neispravan podatak o REGIJI rođenja!")
            }
            else if (MR < 1 || MR > 12 && GR < 1900 || GR > 2100) {
                porukaOGresci2(jmbg, "Uneli ste neispravan podatak o MESECU rođenja!")
                porukaOGresci3(jmbg, "Uneli ste neispravan podatak o GODINI rođenja!")
            }
            else if (GR < 1900 || GR > 2100 && (RR > 50 && RR < 70) || RR > 99) {
                porukaOGresci3(jmbg, "Uneli ste neispravan podatak o GODINI rođenja!")
                porukaOGresci4(jmbg, "Uneli ste neispravan podatak o REGIJI rođenja!")
            }
            else if (MR < 1 || MR > 12) {
                porukaOGresci(jmbg, "Uneli ste neispravan podatak o MESECU rođenja!")
            } else if (GR < 1900 || GR > 2100) {
                porukaOGresci(jmbg, "Uneli ste neispravan podatak o GODINI rođenja!")
            } else if ((RR > 50 && RR < 70) || RR > 99) {
                porukaOGresci(jmbg, "Uneli ste neispravan podatak o REGIJI rođenja!")
            } 
            else {
                porukaOUspehu(jmbg);
            }
            /*if(DR == 0 || DR > 31) {
                porukaOGresci(jmbg, "Uneli ste neispravan podatak o DANU rođenja!")
            } else if (MR < 1 || MR > 12) {
                porukaOGresci(jmbg, "Uneli ste neispravan podatak o MESECU rođenja!")
            } else if (GR < 1900 || GR > 2100) {
                porukaOGresci(jmbg, "Uneli ste neispravan podatak o GODINI rođenja!")
            } else if ((RR > 50 && RR < 70) || RR > 99) {
                porukaOGresci(jmbg, "Uneli ste neispravan podatak o REGIJI rođenja!")
            } 
            else {
                porukaOUspehu(jmbg);
            }*/
        }
    } else if(poljeJmbg === '') {
        porukaOGresci(jmbg, 'Polje za unos Vašeg JMBG-a ne može ostati prazno.');
        if(!samoSlova(poljeIme)) {
            porukaOGresci(ime, 'Dozvoljen je unos SAMO slovnih znakova!');
        } else {
            porukaOUspehu(ime);
        }
        if(!samoSlova(poljePrezime)) {
            porukaOGresci(prezime, 'Dozvoljen je unos SAMO slovnih znakova!');
        }
        else {
            porukaOUspehu(prezime);
        }
    }
    else {
        porukaOUspehu(ime);
        porukaOUspehu(prezime);
        porukaOUspehu(jmbg);
        document.getElementById("form").style.display="none";
        document.getElementById("title1").style.display="none";
        document.getElementById("title2").style.display="none";
        document.getElementById("form2").style.visibility='visible';
        checkJMBG();
    }

   /* if(poljeIme === '') {
        porukaOGresci(ime, 'Polje za unos Vašeg imena ne može ostati prazno.');
    } else if(!samoSlova(poljeIme)) {
        porukaOGresci(ime, 'Dozvoljen je unos SAMO slovnih znakova!');
    }
    else {
        porukaOUspehu(ime);
    }

    if(poljePrezime === '') {
        porukaOGresci(prezime, 'Polje za unos Vašeg prezimena ne može ostati prazno.');
    } else if(!samoSlova(poljePrezime)) {
        porukaOGresci(prezime, 'Dozvoljen je unos SAMO slovnih znakova!');
    }
    else {
        porukaOUspehu(prezime);
    }

    if(poljeJmbg === '') {
        porukaOGresci(jmbg, 'Polje za unos Vašeg JMBG-a ne može ostati prazno.');
    } else if(jmbg.value.length != 13) {
        porukaOGresci(jmbg, 'JMBG MORA imati 13 cifara!');
    }
    else {
        porukaOUspehu(jmbg);
    }

    /*document.getElementById("form").style.display="none";*/
}

function porukaOGresci(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form-control error';
}

function porukaOGresci2(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("#smallDrugi");

    small.innerText = message;

    formControl.className = 'form-control error';
}

function porukaOGresci3(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("#smallTreci");

    small.innerText = message;

    formControl.className = 'form-control error';
}

function porukaOGresci4(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("#smallCetvrti");

    small.innerText = message;

    formControl.className = 'form-control error';
}

function porukaOUspehu(input) {
    const formControl = input.parentElement; 
    formControl.className = 'form-control success';
}

function samoSlova(input) {
    return /^[a-zA-Z \ć \š \đ \ž \č]+$/.test(input);
}

function validateJMBG(JMBG) {
    var output = [];
    var number = JMBG.toString();

    for (var i = 0, len = number.length; i < len; i += 1) {
        output.push(+number.charAt(i));
    }

    var sum = (7 * output[0] + 6 * output[1] + 5 * output[2] + 4 * output[3] + 3 * output[4] + 2 * output[5] + 7 * output[6] + 6 * output[7] + 5 * output[8] + 4 * output[9] + 3 * output[10] + 2 * output[11]) % 11;


    if (sum > 1 && ((11 - sum) == output[12]) || ((11 - sum) && output[12]) == 0) {
        return true;
    } else {
        return false;
    }
}

function checkJMBG() {
    var jmbg = document.getElementById("jmbg").value;

        if (jmbg.toString().length == 13) {
        if (validateJMBG(jmbg)) {

            calculateJMBG(jmbg);

        } else {
            porukaOGresci(jmbg, "JMBG nije validan!");
        }

    } else {
        porukaOGresci(jmbg, "JMBG MORA da sadrži 13 cifara!");
    }
}

function calculateJMBG(JMBG) {
    var output = [];
    var number = JMBG.toString();

    for (var i = 0, len = number.length; i < len; i += 1) {
        output.push(+number.charAt(i));
    }

    var sexNum = Number(output[9] + "" + output[10] + "" + output[11]);

    let inputValue1 = document.getElementById("ime").value;
    let inputValue2 = document.getElementById("prezime").value; 

    document.getElementById("ime1").innerHTML = inputValue1; 
    document.getElementById("prezime1").innerHTML = inputValue2;
    document.getElementById("dr1").innerHTML = output[0] + "" + output[1] + " " + returnMonth(output[2] + "" + output[3]) + " " + returnYear(output[4]) + "" + output[5] + "" + output[6];
    document.getElementById("mr1").innerHTML = returnPlace(output[7] + "" + output[8]);
    document.getElementById("pol1").innerHTML = returnSex(sexNum);
    document.getElementById("rb1").innerHTML = returnSerialNumber(output[9] + "" + output[10] + "" + output[11]) + ". beba po redu" ;
}

function returnSerialNumber(bbb) {
    if(bbb >= 0 && bbb <= 499) {
        return bbb + 1;
    }
    else return bbb - 499;
}

function returnSex(num) {
    if (num < 500) {
        return "muški";
    } else {
        return "ženski";
    }
}

function returnYear(num) {
    if (num == 0) {
        return "2" + num;
    } else {
        return "1" + num;
    }
}

function returnMonth(num) {
    switch (num) {
        case "01":
            return "Januar";
            break;
        case "02":
            return "Februar";
            break;
        case "03":
            return "Mart";
            break;
        case "04":
            return "April";
            break;
        case "05":
            return "Maj";
            break;
        case "06":
            return "Jun";
            break;
        case "07":
            return "Jul";
            break;
        case "08":
            return "Avgust";
            break;
        case "09":
            return "Septembar";
            break;
        case "10":
            return "Oktobar";
            break;
        case "11":
            return "Novembar";
            break;
        case "12":
            return "Decembar";
            break;
        default:
            return "N/A";

    }
}

function returnPlace(num) {
    switch (num) {
        //stranci
        case "01":
            return "stranci u BiH";
            break;
        case "02":
            return "stranci u Crnoj Gori";
            break;
        case "03":
            return "stranci u Hrvatskoj";
            break;
        case "04":
            return "stranci u Makedoniji";
            break;
        case "05":
            return "stranci u Sloveniji";
            break;
        case "07":
            return "stranci u Srbiji (bez pokrajina)";
            break;
        case "08":
            return "stranci u Vojvodini";
            break;
        case "09":
            return "stranci na Kosovu i Metohiji";
            break;
            //BIH
        case "10":
            return "Banja Luka";
            break;
        case "11":
            return "Bihać";
            break;
        case "12":
            return "Doboj";
            break;
        case "13":
            return "Goražde";
            break;
        case "14":
            return "Livno";
            break;
        case "15":
            return "Mostar";
            break;
        case "16":
            return "Prijedor";
            break;
        case "17":
            return "Sarajevo";
            break;
        case "18":
            return "Tuzla";
            break;
        case "19":
            return "Zenica";
            break;

            //Crna Gora
        case "21":
            return "Podgorica";
            break;
        case "26":
            return "Nikšić";
            break;
        case "29":
            return "Pljevlja";
            break;
            //Hrvatska
        case "30":
            return "Osijek, Slavonija region";
            break;
        case "31":
            return "Bjelovar, Virovitica, Koprivnica, Pakrac, Podravina region";
            break;
        case "32":
            return "Varaždin, Međimurje region";
            break;
        case "33":
            return "Zagreb";
            break;
        case "34":
            return "Karlovac";
            break;
        case "35":
            return "Gospić, Lika region";
            break;
        case "36":
            return "Rijeka, Pula, Istra i Primorje region";
            break;
        case "37":
            return "Sisak, Banovina region";
            break;
        case "38":
            return "Split, Zadar, Dubrovnik, Dalmacija region";
            break;
        case "39":
            return "mešano";
            break;
            //Macedonia
        case "41":
            return "Bitola";
            break;
        case "42":
            return "Kumanovo";
            break;
        case "43":
            return "Ohrid";
            break;
        case "44":
            return "Prilep";
            break;
        case "45":
            return "Skopje";
            break;
        case "46":
            return "Strumica";
            break;
        case "47":
            return "Tetovo";
            break;
        case "48":
            return "Veles";
            break;
        case "49":
            return "Štip";
            break;
            //Slovenia used from 50-59 but only 50 was used
        case "50":
            return "Slovenija";
            break;

            //Centralna Srbija
        case "71":
            return "Beograd region";
            break;
        case "72":
            return "Šumadija i Pomoravlje regioni (Šumadijski okrug: Aranđelovac, Batočina, Knić, Kragujevac, Rača, Lapovo, Topola), (Pomoravski okrug: Despotovac, Paraćin, Rekovac, Jagodina, Svilajnac, Ćuprija)";
            break;
        case "73":
            return "Niš region (Nišavski okrug: Aleksinac, Svrljig, Niš, Gadžin Han, Doljevac, Merošina, Ražanj), (Pirotski okrug: Babušnica, Bela Palanka, Dimitrovgrad, Pirot), (Toplički okrug: Blace, Žitorađa, Prokuplje, Kuršumlija)";
            break;
        case "74":
            return "Južna Morava region (Jablanički okrug: Leskovac, Vlasotince, Medveđa, Lebane, Bojnik, Crna Trava), (Pčinjski okrug: Vranje, Bujanovac, Surdulica, Bosilegrad, Preševo, Trgovište, Vladičin Han)";
            break;
        case "75":
            return "Zaječar region (Zaječarski okrug: Zaječar, Boljevac, Knjaževac, Sokobanja), (Borski okrug: Bor, Majdanpek, Kladovo, Negotin)";
            break;
        case "76":
            return "Podunavlje region (Podunavski okrug: Smederevska Palanka, Velika Plana, Smederevo), (Braničevski okrug: Veliko Gradište, Kučevo, Petrovac na Mlavi, Požarevac, Žagubica, Golubac, Žabari, Malo Crniće)";
            break;
        case "77":
            return "Podrinje i Kolubara regioni (Mačvanski okrug: Loznica, Krupanj, Ljubovija, Šabac, Bogatić, Koceljeva, Vladimirci, Mali Zvornik), (Kolubarski okrug: Valjevo, Lajkovac, Ljig, Ub, Osečina, Mionoca)";
            break;
        case "78":
            return "Kraljevo region (Raški okrug: Kraljevo, Vrnjačka Banja, Novi Pazar, Raška, Tutin), (Moravički okrug: Gornji Milanovac, Čačak, Ivanjica, Lučani), (Rasinski okrug: Aleksandrovac, Brus, Kruševac, Trstenik, Varvarin, Ćićevac)";
            break;
        case "79":
            return "Užice region (Zlatiborski okrug: Arilje, Bajina Bašta, Kosjerić, Nova Varoš, Požega, Priboj, Prijepolje, Sjenica, Užice, Čajetina)";
            break;
            //Vojvodina
        case "80":
            return "Novi Sad region (Južnobački okrug: Bač, Bačka Palanka, Bački Petrovac, Vrbas, Žabalj, Novi Sad, Srbobran, Sremski Karlovci, Temerin, Titel, Bečej, Beočin)";
            break;
        case "81":
            return "Sombor region (Zapadnobački okrug: Apatin, Kula, Odžaci, Sombor)";
            break;
        case "82":
            return "Subotica region (Severnobački okrug: Bačka Topola, Subotica, Mali Iđoš)";
            break;
        case "85":
            return "Zrenjanin region (Srednjebanatski okrug: Zrenjanin, Nova Crnja, Novi Bečej, Sečanj, Žitište)";
            break;
        case "86":
            return "Pančevo region (Južnobanatski okrug: Alibunar, Bela Crkva, Vršac, Kovačica, Kovin, Pančevo, Opovo, Plandište)";
            break;
        case "87":
            return "Kikinda region (Severnobanatski okrug: Ada, Kikinda, Kanjiža, Novi Kneževac, Senta, Čoka)";
            break;
        case "88":
            return "Ruma region (Sremski okrug: Inđija, Pećinci, Ruma, Sremska Mitrovica, Stara Pazova, Šid, Irig)";
            break;
        case "89":
            return "Sremska Mitrovica region (Sremski okrug: Inđija, Pećinci, Ruma, Sremska Mitrovica, Stara Pazova, Šid, Irig)";
            break;
            //Kosovo
        case "91":
            return "Priština region (Kosovski okrug: Priština, Obilić, Podujevo, Štrpce, Lipljan, Glogovac, Kačanik, Kosovo Polje, Uroševac, Štimlje)";
            break;
        case "92":
            return "Kosovska Mitrovica region (Kosovsko Mitrovački okrug: Kosovska Mitrovica, Zvečan, Leposavić, Zubin Potok, Vučitrn, Srbica)";
            break;
        case "93":
            return "Peć region (Pećki okrug: Peć, Istok, Klina)";
            break;
        case "94":
            return "Đakovica region (Pećki okrug: Dečani, Đakovica)";
            break;
        case "95":
            return "Prizren region (Prizrenski okrug: Gora-Dragaš, Orahovac, Prizren, Suva Reka)";
            break;
        case "96":
            return "Kosovsko Pomoravski okrug: (Gnjilane, Kosovska Kamenica, Vitina, Novo Brdo)";
            break;
        default:
            return "N/A";
    }
}