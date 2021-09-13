<template>
    <div>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
        <section class="partners">
            <div class="container">
                <div class="heading-section">
                    <h3>Spolupráce</h3>
                    <p class="mb-1">
                        Organizácie, s ktorými spolupracujeme:
                    </p>
                </div>
                <div class="logos-row d-flex justify-content-center">
                    <a href="https://www.finax.eu/sk" target="_blank">
                        <img src="./assets/finax.png" alt="Finax">
                    </a>
                    <a href="https://euba.sk/" target="_blank">
                        <img src="./assets/nhp.png" alt="Ekonomicka univerzita Bratislava">
                    </a>
                    <a href="https://www.ef.umb.sk/" target="_blank">
                        <img src="./assets/efu.png" alt="Ekonomicka fakulta univerzity Mateja Bela">
                    </a>
                    <a href="https://mladypodnikavec.sk/" target="_blank">
                        <img src="./assets/mp.png" alt="Mlady podnikavec">
                    </a>
                    <a href="https://knowmorefinance.sk/" target="_blank">
                        <img src="./assets/kf.png" alt="Knowmore finance">
                    </a>
                </div>
            </div>
        </section>
    </div>
</template>

<style lang="scss">
@import '../../../_theme/index.scss';
.partners .container a{
  padding: 80px 0 50px 0;
  border-bottom: 1px solid rgba(137, 137, 137, 0.2);
}

.partners .container .logos-row {
  flex-wrap: wrap;
}

.partners .container .logos-row img {
  height: 100px;
  margin: 0 10px 30px 10px;
}

.heading-section {
    margin-top: 50px;
}

.heading-section h3 {
    color: #192949;
    font-size: 35px;
    font-weight: 600;
    font-family: "Helvetica Neue" sans-serif;
}
.heading-section p {
    color: #192949;
    font-family: "Helvetica Neue" sans-serif;
    font-weight: 300;
    font-size: 14px;
    line-height: 24px;
    font-weight: bold;
}
</style>