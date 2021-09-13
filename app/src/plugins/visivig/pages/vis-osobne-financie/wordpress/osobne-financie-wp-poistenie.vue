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
                            Nenechaj všetko na náhodu
                        </h1>
                        <p class="mt-4 content">
                           Prečo si uzavrieť poistenie? Kedy možno vypovedať zmluvu?
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
                                    <wc-mini-card title="Životné poistenie" desc="Hlavné parametre životného postenia" img="Blue-home.svg" link="/osobne-financie-poistenie-zivotne-poistenie-clanok"></wc-mini-card>
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
                                    <wc-mini-card title="Poistenie auta (neživotné poistenie)" desc="Prečo si uzavrieť havarijné poistenie keď mám PZP?" img="Blue-home.svg" link="/osobne-financie-poistenie-auta-clanok"></wc-mini-card>
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
                                   <wc-mini-card title="Poistenie nehnuteľnosti/domácnosti" desc="Na čo si dávať pozor pri uzatváraní poistenia na dom?" img="Blue-home.svg" link="/osobne-financie-poistenie-nehnutelnosti-clanok"></wc-mini-card>
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
                                    <wc-mini-card title="Cestovné poistenie" desc="Kedy a prečo sa oplatí?" img="Blue-home.svg" link="/osobne-financie-poistenie-cestovne-poistenie-clanok"></wc-mini-card>
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
                        card1_title="Životné poistenie"
                        card1_desc="Hlavné parametre životného postenia"
                        card1_img="Blue-home.svg"
                        card1_link="/osobne-financie-poistenie-zivotne-poistenie-clanok"

                        card2_title="Poistenie auta (neživotné poistenie)"
                        card2_desc="Prečo si uzavrieť havarijné poistenie keď mám PZP?"
                        card2_img="Blue-home.svg"
                        card2_link="/osobne-financie-poistenie-auta-clanok"

                        card3_title="Poistenie nehnuteľnosti/domácnosti"
                        card3_desc="Na čo si dávať pozor pri uzatváraní poistenia na dom?"
                        card3_img="Blue-home.svg"
                        card3_link="/osobne-financie-poistenie-nehnutelnosti-clanok"

                        card4_title="Cestovné poistenie"
                        card4_desc="Kedy a prečo sa oplatí?"
                        card4_img="Blue-home.svg"
                        card4_link="/osobne-financie-poistenie-cestovne-poistenie-clanok">
                    </wc-osobne-financie-carousel>
                <!-- /wp:html -->
            <!-- /wp:wp-bootstrap-blocks/container -->
        </div>
        <div id="najnovsieClanky">
            <div class="container text-center mt-5 mb-5 hardcode-text">
                <h4 style="text-align: center">
                    Najnovšie články o poisteni
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
                    Pripravili sme si pre vás tie najlepšie produkty v rámci poistenia
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