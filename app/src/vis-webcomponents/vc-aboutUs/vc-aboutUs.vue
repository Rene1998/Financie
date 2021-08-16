<template>
    <div>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
        <div class="container-fluid about-us-welcome"/>
        <div class="container about-us mt-5">
            <section class="title">
                <h3>O nás</h3>
                <p class="mb-5">
                    Kto sme a čo je naše poslanie?
                </p>
            </section>
            <section class="content">
                <p class="mb-3">
                    Sme nezisková organizácia Financie Slovensko. Našim cieľom a poslaním je prispievať k zlepšovaniu finančnej gramotnosti <br> na školách a medzi obyvateľmi.
                </p>
                <p class="mb-3">
                    Financie sú pre nás vášňou a napĺňa nás o nich vzdelávať a pomáhať ľuďom, aby peniaze neboli jadrom <br> ich starostí.
                </p>
                <p class="mb-1">
                    Vidíme ako kľúčové o financiách vzdelávať a rozprávať sa už na základnej škole. Chceme, <br> 
                    preto učiteľom čo najviac zjednodušiť ich prácu, aby vedeli študentom poskytnúť to najlepšie finančné vzdelanie.
                </p>
            </section>
        </div>
    </div>
</template>

<style lang="scss">
.about-us-welcome {
    background: url('./assets/image 3.svg');
    background-size: cover;
    min-height: 650px;
}

@media (max-width: 800px) {
  .about-us-welcome {
    min-height: 250px;
  }
}

.about-us h3 {
    color: #192949;
    font-size: 35px;
    font-weight: 600;
    font-family: Helvetica;
}

.about-us p {
    color: #192949;
    font-family: Helvetica;
    font-weight: 300;
    font-size: 14px;
    line-height: 24px;
}

.about-us .title p {
    font-weight: bold;
}

.about-us .content p {
    font-style: italic;
}
</style>