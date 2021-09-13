<template>
    <div>
        <div>
            <div class="d-none">
                <img style="border: 5px solid red" src="../wp-content/plugins/reusable-blocks-extended/assets/byvanie-img.png"/>
            </div>
        </div>
        <div class="container-fluid byvanie-main">
            <div class="container">
                <div class="byvanie-welcome-text">
                    <div class="col d-flex flex-column b-arrow mb-5">
                        <a class="mb-5 d-flex align-items-center" href="./home">
                            <i class="bi bi-arrow-left mr-2"></i> 
                            Späť na hlavnú stránku
                        </a>
                        <h1>
                            Financujte svoje túžby
                        </h1>
                        <p class="mt-4 content">
                            Úrokové sadzby – p.a., p.m., p.s., Refinancovanie
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <div class="d-none">
                <img style="border: 5px solid red" src="../wp-content/plugins/reusable-blocks-extended/assets/progress-bar.png"/>
            </div>
        </div>
        <div id="progressBar">
            <!-- wp:html -->
                <wc-progress-bar></wc-progress-bar>
            <!-- /wp:html -->
        </div>
        <div>
            <div class="d-none">
                <img class="aligncenter" style="border: 5px solid red" src="../wp-content/plugins/reusable-blocks-extended/assets/carousel.png"/>
            </div>
        </div>
        <div id="vedeliSte">
            <!-- wp:html -->
                <wc-carousel></wc-carousel>
            <!-- /wp:html -->
        </div>
        <div id="zakladneInformacie">
            <div class="container text-center mt-5 mb-5 hardcode-text">
                <h4 style="text-align: center">
                    Základné články
                </h4>
                <p style="text-align: center">
                    Pripravili sme pre vás všetky možné finančné otázky a odpovede <br>
                    na ktoré môžete naraziť vo vašom živote.
                </p>
            </div>

            <!-- wp:wp-bootstrap-blocks/container {"className":"mt-5 mb-5 d-none d-md-block d-lg-block d-xl-block"} -->
                <!-- wp:columns -->
                    <div class="wp-block-columns">
                        <!-- wp:column {"width":"25%"} -->
                            <div class="wp-block-column" style="flex-basis: 25%">
                                <!-- wp:freeform -->
                                    <div>
                                        <div class="d-none">
                                            <img class="aligncenter" style="border: 5px solid red" src="../wp-content/plugins/reusable-blocks-extended/assets/mini-card.png"/>
                                        </div>
                                    </div>
                                <!-- /wp:freeform -->

                                <!-- wp:html -->
                                    <wc-mini-card title="Základy investovania" desc="Kedy začať investovať" img="Blue-home.svg" link="/osobne-financie-investovanie-zaklady-investovania-clanok"></wc-mini-card>
                                <!-- /wp:html -->
                            </div>
                        <!-- /wp:column -->

                        <!-- wp:column {"width":"25%"} -->
                            <div class="wp-block-column" style="flex-basis: 25%">
                                <!-- wp:freeform -->
                                    <div>
                                        <div class="d-none">
                                            <img class="aligncenter" style="border: 5px solid red" src="../wp-content/plugins/reusable-blocks-extended/assets/mini-card.png"/>
                                        </div>
                                    </div>
                                <!-- /wp:freeform -->

                                <!-- wp:html -->
                                    <wc-mini-card title="Základné Investičné Príležitosti" desc="Investovanie do akcií" img="Blue-home.svg" link="/osobne-financie-investovanie-zakladne-investicne-prilezitosti-clanok"></wc-mini-card>
                                <!-- /wp:html -->
                            </div>
                        <!-- /wp:column -->

                        <!-- wp:column {"width":"25%"} -->
                            <div class="wp-block-column" style="flex-basis: 25%">
                                <!-- wp:freeform -->
                                    <div>
                                        <div class="d-none">
                                            <img class="aligncenter" style="border: 5px solid red" src="../wp-content/plugins/reusable-blocks-extended/assets/mini-card.png"/>
                                        </div>
                                    </div>
                                <!-- /wp:freeform -->

                                <!-- wp:html -->
                                   <wc-mini-card title="Investičné princípy" desc="Rozdiel medzi investovaním a sporením" img="Blue-home.svg" link="/osobne-financie-investovanie-investicne-principy-clanok"></wc-mini-card>
                                <!-- /wp:html -->
                            </div>
                        <!-- /wp:column -->

                        <!-- wp:column {"width":"25%"} -->
                            <div class="wp-block-column" style="flex-basis: 25%">
                                <!-- wp:freeform -->
                                    <div>
                                        <div class="d-none">
                                            <img class="aligncenter" style="border: 5px solid red" src="../wp-content/plugins/reusable-blocks-extended/assets/mini-card.png"/>
                                        </div>
                                </div>
                                <!-- /wp:freeform -->

                                <!-- wp:html -->
                                    <wc-mini-card title="Aktívne vs. pasívne investovanie" desc="Aké je to akívne investovanie -výhody anevýhody" img="Blue-home.svg" link="/osobne-financie-investovanie-aktivne-vs-pasivne-investovanie-clanok"></wc-mini-card>
                                <!-- /wp:html -->
                            </div>
                        <!-- /wp:column -->
                    </div>
                <!-- /wp:columns -->
            <!-- /wp:wp-bootstrap-blocks/container -->

            <!-- wp:wp-bootstrap-blocks/container {"className":"carousel-wrapper d-block d-sm-block d-md-none"} -->
                <!-- wp:freeform -->
                    <div>
                        <div class="d-none">
                            <img style="border: 5px solid red" class="aligncenter" src="../wp-content/plugins/reusable-blocks-extended/assets/mini-cards-carousel.png"/>
                        </div>
                    </div>
                <!-- /wp:freeform -->

                <!-- wp:html -->
                    <wc-osobne-financie-carousel
                        card1_title="Základy investovania"
                        card1_desc="Kedy začať investovať"
                        card1_img="Blue-home.svg"
                        card1_link="/osobne-financie-investovanie-zaklady-investovania-clanok"

                        card2_title="Základné Investičné Príležitosti"
                        card2_desc="Investovanie do akcií"
                        card2_img="Blue-home.svg"
                        card2_link="/osobne-financie-investovanie-zakladne-investicne-prilezitosti-clanok"

                        card3_title="Investičné princípy"
                        card3_desc="Rozdiel medzi investovaním a sporením"
                        card3_img="Blue-home.svg"
                        card3_link="/osobne-financie-investovanie-investicne-principy-clanok"

                        card4_title="Aktívne vs. pasívne investovanie"
                        card4_desc="Aké je to akívne investovanie -výhody anevýhody"
                        card4_img="Blue-home.svg"
                        card4_link="/osobne-financie-investovanie-aktivne-vs-pasivne-investovanie-clanok">
                    </wc-osobne-financie-carousel>
                <!-- /wp:html -->
            <!-- /wp:wp-bootstrap-blocks/container -->
        </div>
        <div id="najnovsieClanky">
            <div class="container text-center mt-5 mb-5 hardcode-text">
                <h4 style="text-align: center">
                    Najnovšie články o investovani
                </h4>
                <p style="text-align: center">
                    Pripravili sme pre vás všetky možné finančné otázky a odpovede <br>
                    na ktoré môžete naraziť vo vašom živote.
                </p>
            </div>
        </div>
        <div id="najnovsieProdukty">
            <div class="container text-center mt-5 mb-5 hardcode-text">
                <h4 style="text-align: center">
                    Najlepšie produkty na našom trhu
                </h4>
                <p style="text-align: center">
                    Pripravili sme si pre vás tie najlepšie produkty v rámci investovania
                </p>
            </div>
        </div>
        <div id="uzitocneLinky">
            <!-- wp:wp-bootstrap-blocks/container -->
                <!-- wp:freeform -->
                <div>
                    <div class="d-none">
                        <img style="border: 5px solid red" src="../wp-content/plugins/reusable-blocks-extended/assets/link-cards.png">
                    </div>
                </div>
                <!-- /wp:freeform -->

                <!-- wp:html -->
                    <wc-link-cards></wc-link-cards>
                <!-- /wp:html -->
                
            <!-- /wp:wp-bootstrap-blocks/container -->
        </div>
    </div>
</template>