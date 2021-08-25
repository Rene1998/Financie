<template>
    <div>
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
        <section class="two-columns">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md-6">
                        <img src="./assets/credit-card.png" alt="icon">
                        <h3>Aby peniaze neboli príčina vašich problémov</h3>
                        <p>
                            Tvoríme pre vás nezávislú stránku, tvorenú komunitou odborníkov, ktorá vám pomôže s každodennými
                            finančnými rozhodnutiami a priniesie užitočné tipi ako:
                        </p>
                        <ul>
                            <li>investovaním zhodnotiť prostriedky a zabezpečiť budúcnosť</li>
                            <li>poistením sa zabezpečiť pred nečakanými situáciami</li>
                            <li>financovať svoje túžby najlepšou cestou</li>
                            <li>financovať bývanie vo vlastnom</li>
                            <li>vytvoriť finančné rezervy</li>
                            <li>pripraviť sa na dôchodok</li>
                            <li>vyhnúť sa exekúciám</li>
                            <li>orientáciu v daniach</li>
                            <li>najnovšie technológie v oblasti financií</li>
                        </ul>
                    </div>
                    <div class="col-sm-12 col-md-6">
                        <img src="./assets/teacher.png" alt="icon">
                        <h3>Pripravujeme pre školy</h3>
                        <p>
                            Učebné materiály na výučbu finančnej gramotnosti, ktoré sú vyhotovené v súlade s Národným
                            štandardom finančnej gramotnosti v spolupráci s Ekonomickou fakultou Univerzity Mateja Bela a
                            Ekonomickou univerzitou v Bratislave. Cieľom je čo najviac zjednodušiť a spríjemniť prácu
                            učiteľov a zlepšiť úroveň finančnej gramotnosti. Materiály obsahujú:
                        </p>
                        <ul>
                            <li>vysvetlenie problematiky pre učiteľa</li>
                            <li>pracovný list s aktivitami pre žiakov</li>
                            <li>prepojenie s praktickými cvičeniami na internete</li>
                            <li>videa priradené k jednotlivým témám</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </div>
    
</template>

<style lang="scss">
.two-columns {
    .container {
         padding: 50px 15px 70px 15px;
    }
}

.two-columns .container img {
  height: 66px;
  margin-bottom: 25px;
}

.two-columns .container h3 {
  margin-bottom: 15px;
  color: #192949;
  font-family: "Helvetica Neue" sans-serif;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;

}

.two-columns .container p {
  margin-bottom: 32px;
  color: #192949;
  font-family: "Helvetica Neue" sans-serif;
  font-weight: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 24px;
}

ul li {
  color: #19283B;
  font-family: "Helvetica Neue" sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 28px;
}
</style>