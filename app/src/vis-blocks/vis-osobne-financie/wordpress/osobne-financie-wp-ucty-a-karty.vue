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
                            Orientujte sa v bankách
                        </h1>
                        <p class="mt-4 content">
                            IBAN, SEPA, SWIFT-BIC, Embosovaná platobná karta
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
                                    <vc-mini-card title="Bežný Účet" desc="Ako mať bankový účet zadarmo" img="Blue-home.svg" link="/osobne-financie-ucty-a-karty-bezny-ucet-clanok"></vc-mini-card>
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
                                    <vc-mini-card title="Sporiaci Účet" desc="Ako sa odlišuje sporiaci účet od bežného účtu" img="Blue-home.svg" link="/osobne-financie-ucty-a-karty-sporiaci-ucet-clanok"></vc-mini-card>
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
                                   <vc-mini-card title="Kreditná Karta" desc="Čo je kreditná karta?" img="Blue-home.svg" link="/osobne-financie-ucty-a-karty-kreditna-karta-clanok"></vc-mini-card>
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
                                    <vc-mini-card title="Debetná Karta" desc="Čo je debetná karta?" img="Blue-home.svg" link="/osobne-financie-ucty-a-karty-debetna-karta-clano"></vc-mini-card>
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
                        card1_title="Bežný Účet"
                        card1_desc="Ako mať bankový účet zadarmo"
                        card1_img="Blue-home.svg"
                        card1_link="/osobne-financie-ucty-a-karty-bezny-ucet-clanok"

                        card2_title="Sporiaci Účet"
                        card2_desc="Ako sa odlišuje sporiaci účet od bežného účtu"
                        card2_img="Blue-home.svg"
                        card2_link="/osobne-financie-ucty-a-karty-sporiaci-ucet-clanok"

                        card3_title="Kreditná Karta"
                        card3_desc="Čo je kreditná karta?"
                        card3_img="Blue-home.svg"
                        card3_link="/osobne-financie-ucty-a-karty-kreditna-karta-clanok"

                        card4_title="Debetná Karta"
                        card4_desc="Čo je debetná karta?"
                        card4_img="Blue-home.svg"
                        card4_link="/osobne-financie-ucty-a-karty-debetna-karta-clanok">
                    </vc-osobne-financie-carousel>
                <!-- /wp:html -->
            <!-- /wp:wp-bootstrap-blocks/container -->
        </div>
        <div id="najnovsieClanky">
            <div class="container text-center mt-5 mb-5 hardcode-text">
                <h4 style="text-align: center">
                    Najnovšie články o účtoch a kartách
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
                    Pripravili sme si pre vás tie najlepšie produkty v rámci účtov a kariet
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