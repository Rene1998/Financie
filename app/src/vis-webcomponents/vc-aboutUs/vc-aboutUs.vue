<template>
    <div>
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
        <div class="container-fluid about-us-welcome d-flex align-items-center justify-content-center">
            <h2 class="text-center mb-3">
                Sme Vašou cestou <br>
                financiami
            </h2>
            <p>
                Zistite o nás viac
            </p>
            <p>
                <i class="bi bi-arrow-down"></i>
            </p>
        </div>
        <div class="container about-us mt-5">
            <section class="title">
                <h3>O nás</h3>
                <p class="mb-5">
                    Kto sme a čo je naše poslanie?
                </p>
            </section>
            <section class="content">
                <p class="mb-3">
                    Sme nezisková organizácia Financie Slovensko. Našim cieľom a poslaním je prispievať k zlepšovaniu finančnej gramotnosti na školách a medzi obyvateľmi.
                </p>
                <p class="mb-3">
                    Financie sú pre nás vášňou a napĺňa nás o nich vzdelávať a pomáhať ľuďom, aby peniaze neboli jadrom ich starostí.
                </p>
                <p class="mb-1">
                    Vidíme ako kľúčové o financiách vzdelávať a rozprávať sa už na základnej škole. Chceme, <br> 
                    preto učiteľom čo najviac zjednodušiť ich prácu, aby vedeli študentom poskytnúť to najlepšie finančné vzdelanie.
                </p>
            </section>
            <section>
                <p class="mt-5 mb-3">
                    <b>Názov organizácie:</b> Financie Slovensko n. o. 
                </p>
                <p class="mb-3">
                    <b>Právna forma:</b> Nezisková organizácia poskytujúca všeobecne prospešné služby
                </p>
                <p class="mb-3">
                    <b>IČO:</b> 53870425
                </p>
                <p class="mb-5">
                    <b>Registrový úrad:</b> Okresný úrad Bratislava
                </p>
                <p class="mb-3">
                    V prípade že by ste nás chceli finančne podporiť a podporiť tak finančnú gramotnosť na Slovensku, môžete tak učiniť na tento účet:
                </p>
                <p class="mb-3">
                    IBAN Financie Slovensko n. o. : <b>SK82 0900 0000 0051 8147 5269</b>
                </p> 
            </section>
        </div>
    </div>
</template>

<style lang="scss">
.about-us-welcome {
    font-family: "Helvetica Neue" sans-serif !important;
    color: #FFFFFF;
    flex-direction: column;
    background: url('./assets/about-us-image.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 750px;
}

.about-us-welcome h2 {
    font-weight: bold;
    font-size: 40px;
}

@media (max-width: 800px) {
  .about-us-welcome {
    min-height: 250px;
  }

  .about-us-welcome h2 {
    font-size: 35px;
  }
}

.about-us h3 {
    color: #192949;
    font-size: 35px;
    font-weight: 600;
    font-family: "Helvetica Neue" sans-serif !important;
}

.about-us p {
    max-width: 1000px !important;
    color: #192949;
    font-family: "Helvetica Neue" sans-serif !important;
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