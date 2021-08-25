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
                            Cesta k prvej investícií
                        </h1>
                        <p class="mt-4 content">
                            Čo sú dividendy? Akcia? Dlhopis?
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
                                    <vc-mini-card title="Spotrebný úver" desc="Ako funguje spotrebný úver" img="Blue-home.svg" link="/osobne-financie-uver-na-spotrebu-spotrebny-uver-clanok"></vc-mini-card>
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
                                    <vc-mini-card title="Krátkodobé úvery" desc="Nástrahy, úrokové sadzby" img="Blue-home.svg" link="/osobne-financie-uver-na-spotrebu-kratkodobe-uvery-clanok"></vc-mini-card>
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
                                   <vc-mini-card title="Čerpanie a splácanie" desc="Ako dlho trvá čerpanie úverov" img="Blue-home.svg" link="/osobne-financie-uver-na-spotrebu-cerpanie-a-splacanie-clanok"></vc-mini-card>
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
                                    <vc-mini-card title="Nebankové úvery a pôžičky" desc="Aký je rozdiel medzi bankovou anebankovou pôžičkou" img="Blue-home.svg" link="/osobne-financie-uver-na-spotrebu-nebankove-uvery-a-pozicky-clanok"></vc-mini-card>
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
                        card1_title="Spotrebný úver"
                        card1_desc="Ako funguje spotrebný úver"
                        card1_img="Blue-home.svg"
                        card1_link="/osobne-financie-uver-na-spotrebu-spotrebny-uver-clanok"

                        card2_title="Krátkodobé úvery"
                        card2_desc="Nástrahy, úrokové sadzby"
                        card2_img="Blue-home.svg"
                        card2_link="/osobne-financie-uver-na-spotrebu-kratkodobe-uvery-clanok"

                        card3_title="Čerpanie a splácanie"
                        card3_desc="Ako dlho trvá čerpanie úverov"
                        card3_img="Blue-home.svg"
                        card3_link="/osobne-financie-uver-na-spotrebu-cerpanie-a-splacanie-clanok"

                        card4_title="Nebankové úvery a pôžičky"
                        card4_desc="Aký je rozdiel medzi bankovou anebankovou pôžičkou"
                        card4_img="Blue-home.svg"
                        card4_link="/osobne-financie-uver-na-spotrebu-nebankove-uvery-a-pozicky-clanok">
                    </vc-osobne-financie-carousel>
                <!-- /wp:html -->
            <!-- /wp:wp-bootstrap-blocks/container -->
        </div>
        <div id="najnovsieClanky">
            <div class="container text-center mt-5 mb-5 hardcode-text">
                <h4 style="text-align: center">
                    Najnovšie články o úveroch na spotrebu
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
                    Pripravili sme si pre vás tie najlepšie produkty v rámci spotrebných úverov
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