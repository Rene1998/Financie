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
                            Bývanie
                        </h1>
                        <p class="mt-4 content">
                            Hypotéka, refinancovanie, dofinancovanie
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
                <vc-progress-bar></vc-progress-bar>
            <!-- /wp:html -->
        </div>
        <div>
            <div class="d-none">
                <img class="aligncenter" style="border: 5px solid red" src="../wp-content/plugins/reusable-blocks-extended/assets/carousel.png"/>
            </div>
        </div>
        <div id="vedeliSte">
            <!-- wp:html -->
                <vc-carousel></vc-carousel>
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
                                    <vc-mini-card title="Kúpa alebo prenájom" desc="Je lepšie kúpiť alebo prenajať?" img="Blue-home.svg" link="/osobne-financie-byvanie-kupa-alebo-prenajom-clanok"></vc-mini-card>
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
                                    <vc-mini-card title="Financovanie kúpy" desc="Ako dofinancovať úver?" img="Blue-home.svg" link="/osobne-financie-byvanie-financovanie-kupy-clanok"></vc-mini-card>
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
                                    <vc-mini-card title="Poistenie" desc="Ako zabezpečiť dom?" img="Blue-home.svg" link="/osobne-financie-byvanie-poistenie-clanok"></vc-mini-card>
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
                                    <vc-mini-card title="Technológie čo vedia ušetriť" desc="Presvedčte sa ako môžete ušetri’t využívaním moderných technológii" img="Blue-home.svg" link="/osobne-financie-byvanie-technologie-clanok"></vc-mini-card>
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
                    <vc-osobne-financie-carousel
                        card1_title="Kúpa alebo prenájom"
                        card1_desc="Je lepšie kúpiť alebo prenajať?"
                        card1_img="Blue-home.svg"
                        card1_link="/osobne-financie-byvanie-kupa-alebo-prenajom-clanok"

                        card2_title="Financovanie kúpy"
                        card2_desc="Ako dofinancovať úver?"
                        card2_img="Blue-home.svg"
                        card2_link="/osobne-financie-byvanie-financovanie-kupy-clanok"

                        card3_title="Poistenie"
                        card3_desc="Ako zabezpečiť dom?"
                        card3_img="Blue-home.svg"
                        card3_link="/osobne-financie-byvanie-poistenie-clanok"

                        card4_title="Technológie čo vedia ušetriť"
                        card4_desc="Presvedčte sa ako môžete ušetri’t využívaním moderných technológii"
                        card4_img="Blue-home.svg"
                        card4_link="/osobne-financie-byvanie-technologie-clanok">
                    </vc-osobne-financie-carousel>
                <!-- /wp:html -->
            <!-- /wp:wp-bootstrap-blocks/container -->
        </div>
        <div id="najnovsieClanky">
            <div class="container text-center mt-5 mb-5 hardcode-text">
                <h4 style="text-align: center">
                    Najnovšie články o bývaní
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
                    Pripravili sme si pre vás tie najlepšie produkt v rámci hypoték
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
                    <vc-link-cards></vc-link-cards>
                <!-- /wp:html -->
                
            <!-- /wp:wp-bootstrap-blocks/container -->
        </div>
    </div>
</template>