<template>
    <div>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
        <div class="container contact-us mt-5">
            <section class="title">
                <h3>Kontakt</h3>
                <p class="mb-5">
                    Ako sa s nami viete spojiť?
                </p>
            </section>
            <section class="content">
                <p class="mb-5">
                    Neváhajte nás kontaktovať s otázkami alebo vašimi postrehmi ako zlepšiť finančnú <br> 
                    gramotnosť na Slovensku, každý nápad a postreh je pre nás veľmi cenný.
                </p>
            </section>
            <div class="contact-info">
                <p class="d-flex align-items-center mb-2">
                    <i class="bi bi-envelope-fill"/>
                    <a class="pl-3" href="mailto:info@financie.sk"><b>info@financie.sk</b></a>
                </p>
                <p class="d-flex align-items-center mb-2">
                    <i class="bi bi-geo-alt-fill"/>
                    <a class="pl-3" target="blank" href="https://www.google.com/maps/place/Bajkalsk%C3%A1,+821+01+Bratislava/@48.152781,17.1452394,17z/data=!3m1!4b1!4m5!3m4!1s0x476c892c2df4f095:0xca96defd36fbab4b!8m2!3d48.152781!4d17.1474281"><b>Bajkalská 18486/19B, 821 01  Bratislava</b></a>
                </p>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.contact-us h3 {
    color: #192949;
    font-size: 35px;
    font-weight: 600;
    font-family: Helvetica;
}
.contact-us p {
    color: #192949;
    font-family: Helvetica;
    font-weight: 300;
    font-size: 14px;
    line-height: 24px;
}

.contact-us .title p {
    font-weight: bold;
}

.contact-us .content p {
    font-style: italic;
}

.contact-info .bi  {
    color: #192949;
    font-size: 30px;
}
.contact-info a  {
    color: #192949;
    text-decoration: none !important;
    font-size: 20px;
    &:hover {
        color: #1eaee1
    }
}

</style>