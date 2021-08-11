<template>
    <div>
        <div class="preskoly-wrapper">
            <div class="d-none">
                <img
                style="border: 5px solid red"
                src="../wp-content/uploads/2021/08/Group-1.png"
                />
            </div>
            <div class="container home-main d-flex align-items-center">
                <div>
                    <h1>
                        Prevedieme vás životnou<br />finančnou cestou.
                    </h1>
                    <p class="p-0 mt-4 mb-5">
                        Získajte odborníka na kľúčové finančné momenty<br />vo vašom živote.
                    </p>
                </div>
            </div>
        </div>

        <!-- wp:wp-bootstrap-blocks/container {"className":"carousel-wrapper d-none d-md-block d-lg-block d-xl-block"} -->
            <!-- wp:wp-bootstrap-blocks/row {"template":"1-1-1","className":"category-cards"} -->
                <!-- wp:wp-bootstrap-blocks/column {"sizeMd":4} -->
                    <!-- wp:freeform -->
                        <div>
                            <div class="d-none">
                                <img style="border: 5px solid red" src="../wp-content/uploads/2021/08/home-category-card.png"/>
                            </div>
                        </div>
                    <!-- /wp:freeform -->

                    <!-- wp:html -->
                    <vc-home-category-card title="Bývanie" img="Home.svg" link="./osobne-financie-byvanie"></vc-home-category-card>
                    <!-- /wp:html -->

                <!-- /wp:wp-bootstrap-blocks/column -->

                <!-- wp:wp-bootstrap-blocks/column {"sizeMd":4} -->
                    <!-- wp:freeform -->
                        <div>
                            <div class="d-none">
                                <img style="border: 5px solid red" src="../wp-content/uploads/2021/08/home-category-card.png"/>
                            </div>
                        </div>
                    <!-- /wp:freeform -->

                    <!-- wp:html -->
                        <vc-home-category-card title="Rodina a deti" img="Family-group.svg" link="./osobne-financie-rodina-a-deti"></vc-home-category-card>
                    <!-- /wp:html -->

                <!-- /wp:wp-bootstrap-blocks/column -->

                <!-- wp:wp-bootstrap-blocks/column {"sizeMd":4} -->
                    <!-- wp:freeform -->
                        <div>
                            <div class="d-none">
                                <img style="border: 5px solid red" src="../wp-content/uploads/2021/08/home-category-card.png"/>
                            </div>
                        </div>
                    <!-- /wp:freeform -->

                    <!-- wp:html -->
                        <vc-home-category-card title="Auto" img="Car.svg" link="./osobne-financie-auto"></vc-home-category-card>
                    <!-- /wp:html -->

                <!-- /wp:wp-bootstrap-blocks/column -->
            <!-- /wp:wp-bootstrap-blocks/row -->

            <!-- wp:wp-bootstrap-blocks/row {"template":"1-1-1"} -->
                <!-- wp:wp-bootstrap-blocks/column {"sizeMd":4,"className":"mt-4"} -->
                    <!-- wp:freeform -->
                        <div>
                            <div class="d-none">
                                <img style="border: 5px solid red" src="../wp-content/uploads/2021/08/home-category-card.png"/>
                            </div>
                        </div>
                    <!-- /wp:freeform -->

                    <!-- wp:html -->
                        <vc-home-category-card title="Dôchodok" img="OldFamily-group.svg" link="./osobne-financie-dochodok"></vc-home-category-card>
                    <!-- /wp:html -->

                <!-- /wp:wp-bootstrap-blocks/column -->

                <!-- wp:wp-bootstrap-blocks/column {"sizeMd":4,"className":"mt-4"} -->
                    <!-- wp:freeform -->
                        <div>
                            <div class="d-none">
                                <img style="border: 5px solid red" src="../wp-content/uploads/2021/08/home-category-card.png"/>
                            </div>
                        </div>
                    <!-- /wp:freeform -->

                    <!-- wp:html -->
                        <vc-home-category-card title="Exekúcia" img="Execution.svg" link="./osobne-financie-exekucia"></vc-home-category-card>
                    <!-- /wp:html -->

                <!-- /wp:wp-bootstrap-blocks/column -->

                <!-- wp:wp-bootstrap-blocks/column {"sizeMd":4,"className":"mt-4"} -->
                    <!-- wp:freeform -->
                        <div>
                            <div class="d-none">
                                <img style="border: 5px solid red" src="../wp-content/uploads/2021/08/home-category-card.png"/>
                            </div>
                        </div>
                    <!-- /wp:freeform -->

                    <!-- wp:html -->
                        <vc-home-category-card title="Práca a dane" img="Work.svg" link="./osobne-financie-praca-a-dane"></vc-home-category-card>
                    <!-- /wp:html -->

                <!-- /wp:wp-bootstrap-blocks/column -->
            <!-- /wp:wp-bootstrap-blocks/row -->
        <!-- /wp:wp-bootstrap-blocks/container -->

        <!-- wp:wp-bootstrap-blocks/container {"className":"carousel-wrapper d-block d-sm-block d-md-none"} -->
            <!-- wp:freeform -->
                <div>
                    <div class="d-none">
                        <img class="aligncenter" style="border: 5px solid red" src="../wp-content/uploads/2021/08/home-carousel.png"/>
                    </div>
                </div>
            <!-- /wp:freeform -->

            <!-- wp:html -->
                <vc-home-carousel></vc-home-carousel>
            <!-- /wp:html -->
            
        <!-- /wp:wp-bootstrap-blocks/container -->

        <div>
            <div class="d-none">
                <img class="aligncenter" style="border: 5px solid red" src="../wp-content/uploads/2021/08/carousel.png"/>
            </div>
        </div>

        <!-- wp:html -->
            <vc-carousel></vc-carousel>
        <!-- /wp:html -->

        <div class="container text-center mt-5 mb-5 hardcode-text">
            <h4 style="text-align: center">
                Budeme pri vás, počas toho ako si plníte vaše sny a ciele
            </h4>
            <p style="text-align: center">
                Pripravili sme pre vás všetky možné finančné otázky a odpovede <br />na
                ktoré môžete naraziť vo vašom živote.
            </p>
        </div>

        <!-- wp:wp-bootstrap-blocks/container -->
            <!-- wp:freeform -->
                <div>
                    <div class="d-none">
                        <img class="aligncenter" style="border: 5px solid red" src="../wp-content/uploads/2021/08/advanced-img-home-cards.png"/>
                    </div>
                </div>
            <!-- /wp:freeform -->

            <!-- wp:html -->
                <vc-advanced-img-home-cards></vc-advanced-img-home-cards>
            <!-- /wp:html -->
        <!-- /wp:wp-bootstrap-blocks/container -->

        <div>
            <div class="container text-center mt-5 mb-5 hardcode-text">
                <h4 style="text-align: center">
                    Informácie ktoré vám pomôžu k správnemu investovaniu.
                </h4>
                <p style="text-align: center">
                    Pripravili sme pre vás všetky možné finančné otázky a odpovede<br>
                    na ktoré móžete naraziť vo vašom živote.
                </p>
                <p style="text-align: center">
                    <a class="fake">
                        Zobraziť všetky články
                    </a>
                </p>
            </div>
        </div>
    </div>
</template>