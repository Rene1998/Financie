<template>
    <div>
        <div>
            <div class="container-fluid preskoly-main">
                <div class="d-none">
                    <img style="border: 5px solid red" src="../wp-content/plugins/reusable-blocks-extended/assets/group1.png"/>
                </div>
                <div class="container">
                    <div class="preskoly-welcome-text mb-5">
                        <h1 class="title">
                            Základná škola 1. stupeň
                        </h1>
                        <p class="content">
                            Pripravili sme pre vás materiály pre učiteľov z prvého stupňa základných škôl.
                        </p>
                        <p>
                            <a class="pr-2 isActiveA" href="./pre-skoly-zakladna-skola-1-stupen-1-rocnik-ucebne-materialy">
                                Základná škola 1. stupeň
                            </a>
                            •
                            <a class="p-2" href="./pre-skoly-zakladna-skola-2-stupen-5-rocnik-ucebne-materialy">
                                Základná škola 2. stupeň
                            </a>
                            •
                            <a class="p-2" href="./pre-skoly-stredna-skola-1-rocnik-ucebne-materialy">
                                Stredná škola
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- wp:wp-bootstrap-blocks/container {"className":"carousel-wrapper d-none d-md-block d-lg-block d-xl-block"} -->
            <!-- wp:columns -->
                <div class="wp-block-columns">
                    <!-- wp:column {"width":"25%"} -->
                        <div class="wp-block-column" style="flex-basis: 25%">
                            <!-- wp:freeform -->
                                <div>
                                    <div class="d-none">
                                        <img class="aligncenter" style="border: 5px solid red" src="../wp-content/plugins/reusable-blocks-extended/assets/category-card.png"/>
                                    </div>
                                </div>
                            <!-- /wp:freeform -->

                            <!-- wp:html -->
                                <vc-category-card title="1. Ročník" img="rocnik1.svg" link="./pre-skoly-zakladna-skola-1-stupen-1-rocnik-ucebne-materialy" isactive="true"></vc-category-card>
                            <!-- /wp:html -->
                        </div>
                    <!-- /wp:column -->

                    <!-- wp:column {"width":"25%"} -->
                        <div class="wp-block-column" style="flex-basis: 25%">
                            <!-- wp:freeform -->
                                <div>
                                    <div class="d-none">
                                        <img class="aligncenter" style="border: 5px solid red" src="../wp-content/plugins/reusable-blocks-extended/assets/category-card.png"/>
                                    </div>
                                </div>
                            <!-- /wp:freeform -->

                            <!-- wp:html -->
                                <vc-category-card title="2. Ročník" img="rocnik2.svg" link="./pre-skoly-zakladna-skola-1-stupen-2-rocnik-ucebne-materialy"></vc-category-card>
                            <!-- /wp:html -->
                        </div>
                    <!-- /wp:column -->

                    <!-- wp:column {"width":"25%"} -->
                        <div class="wp-block-column" style="flex-basis: 25%">
                            <!-- wp:freeform -->
                                <div>
                                    <div class="d-none">
                                        <img class="aligncenter" style="border: 5px solid red" src="../wp-content/plugins/reusable-blocks-extended/assets/category-card.png"/>
                                    </div>
                                </div>
                            <!-- /wp:freeform -->

                            <!-- wp:html -->
                                <vc-category-card title="3. Ročník" img="rocnik3.svg" link="./pre-skoly-zakladna-skola-1-stupen-3-rocnik-ucebne-materialy"></vc-category-card>
                            <!-- /wp:html -->
                        </div>
                    <!-- /wp:column -->

                    <!-- wp:column {"width":"25%"} -->
                        <div class="wp-block-column" style="flex-basis: 25%">
                            <!-- wp:freeform -->
                                <div>
                                    <div class="d-none">
                                        <img class="aligncenter" style="border: 5px solid red" src="../wp-content/plugins/reusable-blocks-extended/assets/category-card.png"/>
                                    </div>
                                </div>
                            <!-- /wp:freeform -->

                            <!-- wp:html -->
                                <vc-category-card title="4. Ročník" img="rocnik4.svg" link="./pre-skoly-zakladna-skola-1-stupen-4-rocnik-ucebne-materialy"></vc-category-card>
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
                        <img class="aligncenter" style="border: 5px solid red" src="../wp-content/plugins/reusable-blocks-extended/assets/pre-skoly-carousel.png"/>
                    </div>
                </div>
            <!-- /wp:freeform -->

            <!-- wp:html -->
                <vc-pre-skoly-carousel
                    isactive="card1"
                    card1_title="1. Ročník"
                    card1_img="rocnik1.svg"
                    card1_link="./pre-skoly-zakladna-skola-1-stupen-1-rocnik-ucebne-materialy"

                    card2_title="2. Ročník"
                    card2_img="rocnik2.svg"
                    card2_link="./pre-skoly-zakladna-skola-1-stupen-2-rocnik-ucebne-materialy"

                    card3_title="3. Ročník"
                    card3_img="rocnik3.svg"
                    card3_link="./pre-skoly-zakladna-skola-1-stupen-3-rocnik-ucebne-materialy"

                    card4_title="4. Ročník"
                    card4_img="rocnik4.svg"
                    card4_link="./pre-skoly-zakladna-skola-1-stupen-4-rocnik-ucebne-materialy">
                </vc-pre-skoly-carousel>
            <!-- /wp:html -->
        <!-- /wp:wp-bootstrap-blocks/container -->

        <div class="container text-center mt-5 mb-5 hardcode-text">
            <h4 style="text-align: center">
                Boli by sme radi, aby už na základnej škole mali deti finančné
                vzdelávanie
            </h4>
            <p style="text-align: center">
                A preto sme učiteľom a ich žiakom na základných a stredných školách
                pripravili príručky, cvičenia a videá, ktoré vás <br>prevedú finančným vzdelaním.
            </p>
        </div>

        <div class="container">
            <div class="switch-wrapper mb-5">
                <div class=" row switch d-flex justify-content-center align-items-center text-center" style="text-align: center">
                <a class=" switch-button p-0 col-6 d-flex justify-content-center align-items-center text-center" href="./pre-skoly-zakladna-skola-1-stupen-1-rocnik-ucebne-materialy">
                    Učebné materiály
                </a>
                <a class="switch-button p-0 switchIsActive col-6 d-flex justify-content-center align-items-center text-center" href="./pre-skoly-zakladna-skola-1-stupen-1-rocnik-videa">
                    Videá
                </a>
                </div>
            </div>
        </div>

        <!-- wp:wp-bootstrap-blocks/container -->
            <!-- wp:freeform -->
                <div>
                    <div class="d-none">
                        <img class="aligncenter" style="border: 5px solid red" src="../wp-content/plugins/reusable-blocks-extended/assets/advanced-img-card.png"/>
                    </div>
                </div>
            <!-- /wp:freeform -->

            <!-- wp:html -->
                <vc-advanced-img-cards page="zakladna-skola-1.stupen" year="1-rocnik" category="advancedImgCardVideo"></vc-advanced-img-cards>
            <!-- /wp:html -->
        <!-- /wp:wp-bootstrap-blocks/container -->
    </div>
</template>