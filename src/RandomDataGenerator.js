function getRandom(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)

  return Math.floor(Math.random() * (max - min)) + min
}

export default function randomData() {
  let dane = {};
  const imiona = [
    "Adam","Bartosz","Cezary","Damian","Emil","Filip","Grzegorz","Henryk","Igor","Jan",
    "Kamil","Lukasz","Mateusz","Norbert","Oskar","Patryk","Rafal","Szymon","Tomasz","Wiktor",
    "Zbigniew","Alicja","Beata","Celina","Daria","Ewa","Faustyna","Gabriela","Hanna","Iga",
    "Joanna","Karolina","Lena","Magda","Natalia","Oliwia","Paulina","Roksana","Sara","Tatiana",
    "Ula","Wanda","Zofia","Milena","Anita","Jagoda","Klaudia","Julia","Martyna","Weronika"
  ];
  const nazwiska = [
    "Kowalski","Nowak","Wisniewski","Wojcik","Kowalczyk","Kaminski","Lewandowski","Zielinski","Szymanski","Dabrowski",
    "Ostrowski","Baran","Pawlak","Sikora","Walczak","Krupa","Zajac","Wrona","Sawicki","Maj",
    "Czarnecki","Wasilewski","Kubiak","Mazur","Adamski","Krawczyk","Borkowski","Chmielewski","Mroz","Lis",
    "Malinowski","Pietrzak","Sobczak","Zawadzki","Kaczmarek","Jankowski","Borowski","Bialek","Urban","Danek",
    "Krol","Madej","Konopka","Stasiak","Janik","Michalski","Markiewicz","Olejniczak","Wolski","Bednarek"
  ];
  const ulice = [
    "Akacjowa","Brzozowa","Cicha","Dolna","Energetykow","Fabryczna","Gorska","Handlowa","Jagodowa","Kolejowa",
    "Lesna","Miodowa","Nadrzeczna","Ogrodowa","Polna","Radosna","Sloneczna","Topolowa","Ustronna","Wiosenna",
    "Zielona","Jasminowa","Zeglarska","Kwiatowa","Kasztanowa","Srebrna","Zlota","Szeroka","Wodna","Spokojna",
    "Letnia","Jesienna","Wrzosowa","Bukowa","Lipowa","Sadowa","Dzialkowa","Promienna","Zbozowa","Morelowa",
    "Porzeczkowa","Debowa","Modrzewiowa","Szkolna","Krucza","Sarnia","Jagielonska","Warszawska","Krakowska","Poznanska"
  ];
  const miasta = [
    "Warszawa","Krakow","Lodz","Wroclaw","Poznan","Gdansk","Szczecin","Bydgoszcz","Lublin","Bialystok",
    "Katowice","Gdynia","Czestochowa","Radom","Sosnowiec","Torun","Kielce","Gliwice","Rzeszow","Opole",
    "Elblag","Zielona Gora","Pila","Koszalin","Plock","Legnica","Olsztyn","Tarnow","Zamosc","Krosno",
    "Suwalki","Jelenia Gora","Walbrzych","Nowy Sacz","Tychy","Mielec","Sieradz","Swinoujscie","Gorzow","Leszno",
    "Pruszkow","Ostroda","Lubin","Grudziadz","Malbork","Zakopane","Sopot","Wloclawek","Jaworzno","Belchatow"
  ];
  const leki = [
    "Paracetamol","Ibuprofen","Aspirin","No-Spa","Ketonal","Metafen","Gripex","Fervex","Amol","Apap",
    "Rutinoscorbin","Neosine","Zyrtec","Allertec","Melatonin Forte","Xanobex","Tobrix","DexaFlu","AlergoStop","Polopiryna",
    "Sinudor","Cardiolmax","Neurovit","Biotarsin","Maxflu","Thermocold","Flexostin","Anginol","GastroProtect","Pulmoterol",
    "Amoxicillin","Ciloxan","Duloxetine","Meloxicam","Loratadine","OsteoPlus","HemoRelief","Bactrim","Antotalgin","Strepsils",
    "Nervolon","Flucontrol","Paragrin","Zinox","Metronidazol","Glucoster","Renovital","Controlin","Amlodipine","Xylorin"
  ];

  dane.imie = imiona[getRandom(0, 49)]
  dane.nazwisko = nazwiska[getRandom(0, 49)]
  dane.wiek = getRandom(5, 90)
  dane.pesel = Math.floor((Math.random() * 100000000000))
  dane.adres = miasta[getRandom(0, 49)] + ", " + ulice[getRandom(0, 49)] + " nr. " + getRandom(1, 20)
  dane.wystawil = "Dr. " + imiona[getRandom(0, 49)] + nazwiska[getRandom(0, 49)]
  dane.wystawiono = "2025-" + getRandom(1, 12).toString().padStart(2, "0") + "-" + getRandom(1, 31).toString().padStart(2, "0")
  dane.lek = leki[getRandom(0, 49)] + " " + getRandom(50, 600) % 1000 + " mg"
  dane.status = getRandom(0, 100) > 50 ? "aktywne" : "nie aktywne"


  console.log(dane.imie)
  return dane
}
