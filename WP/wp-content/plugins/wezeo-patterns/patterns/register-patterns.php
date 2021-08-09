<?php
/**
 * Register patterns.
 */

add_action( 'init', 'wzo_register_block_pattern_categories' );
add_action( 'init', 'wzo_register_block_patterns' );

/**
 * Register Patterns
 */
function wzo_register_block_patterns() {

    if ( function_exists( 'register_block_pattern' ) ) {

        //Bloky celych stranok

        register_block_pattern(
            'bpc/vis-home',
            [
                'title'       => __( 'Homepage', 'block-patterns-collection' ),
                'description' => __( 'financie.sk Homepage', 'block-patterns-collection' ),
                'categories'  => [ 'wezeo-patterns' ],
                'content'     => <<<pattern
<div><div class="preskoly-wrapper"><div class="container home-main d-flex align-items-center"><div><h1> Prevedieme vás životnou <br />finančnou cestou.</h1><p class="p-0 mt-4 mb-5"> Získajte odborníka na kľúčové finančné momenty <br />vo vašom živote.</p></div></div></div><div class="container carousel-wrapper d-none d-md-block d-lg-block d-xl-block"><div class="row category-cards"><div class="col-4 mb-3"> <img class="d-none" src="http://wp.test/wp-content/uploads/2021/07/Snímka-obrazovky-2021-08-03-o-15.50.37.png" alt=""> <vc-home-category-card title="Bývanie" img="Home.svg" link="./osobne-financie-byvanie"/></div><div class="col-4 mb-3"> <img class="d-none" src="http://wp.test/wp-content/uploads/2021/07/Snímka-obrazovky-2021-08-03-o-15.50.37.png" alt=""> <vc-home-category-card title="Rodina a deti" img="Family-group.svg" link="./osobne-financie-rodina-a-deti"/></div><div class="col-4 mb-3"> <img class="d-none" src="http://wp.test/wp-content/uploads/2021/07/Snímka-obrazovky-2021-08-03-o-15.50.37.png" alt=""> <vc-home-category-card title="Auto" img="Car.svg" link="./osobne-financie-auto"/></div><div class="col-4 mb-3"> <img class="d-none" src="http://wp.test/wp-content/uploads/2021/07/Snímka-obrazovky-2021-08-03-o-15.50.37.png" alt=""> <vc-home-category-card title="Dôchodok" img="OldFamily-group.svg" link="./osobne-financie-dochodok"/></div><div class="col-4 mb-3"> <img class="d-none" src="http://wp.test/wp-content/uploads/2021/07/Snímka-obrazovky-2021-08-03-o-15.50.37.png" alt=""> <vc-home-category-card title="Exekúcia" img="Execution.svg" link="./osobne-financie-exekucia"/></div><div class="col-4 mb-3"> <img class="d-none" src="http://wp.test/wp-content/uploads/2021/07/Snímka-obrazovky-2021-08-03-o-15.50.37.png" alt=""> <vc-home-category-card title="Práca a dane" img="Work.svg" link="./osobne-financie-praca-a-dane"/></div></div></div><div class="d-block d-sm-block d-md-none"><div class="carousel-wrapper"> <vc-home-carousel/></div></div><vc-carousel/><div class="container text-center mt-5 mb-5 hardcode-text"><h4> Budeme pri vás, počas toho ako si plníte vaše sny a ciele</h4><p> Pripravili sme pre vás všetky možné finančné otázky a odpovede <br />na ktoré móžete naraziť vo vašom živote.</p></div><div class="container"> <vc-advanced-img-home-cards/></div><div class="container text-center mt-5 mb-5 hardcode-text"><h4> Informácie ktoré vám pomôžu k správnemu investovaniu.</h4><p> Pripravili sme pre vás všetky možné finančné otázky a odpovede <br> na ktoré móžete naraziť vo vašom živote.</p> <a class="fake" href="">Zobraziť všetky články</a></div></div>
pattern
            ]
        );

        register_block_pattern(
            'bpc/vis-pre-skoly',
            [
                'title'       => __( 'Pre-skoly', 'block-patterns-collection' ),
                'description' => __( 'financie.sk Pre-skoly', 'block-patterns-collection' ),
                'categories'  => [ 'wezeo-patterns' ],
                'content'     => <<<pattern
<div><div><div class="container-fluid preskoly-main"><div class="container"><div class="preskoly-welcome-text mb-5"><h1 class="title"> Stredná škola</h1><p class="content"> Pripravili sme pre vás materiály pre učiteľov zo stredných škôl.</p><p> <a class="pr-2" href="./pre-skoly-zakladna-skola-1-stupen-1-rocnik-ucebne-materialy"> Základná škola 1. stupeň </a> • <a class="p-2" href="./pre-skoly-zakladna-skola-2-stupen-5-rocnik-ucebne-materialy"> Základná škola 2. stupeň </a> • <a class="p-2 isActiveA" href="./pre-skoly-stredna-skola-1-rocnik-ucebne-materialy"> Stredná škola </a></p></div></div></div></div><div class="container carousel-wrapper d-none d-md-block d-lg-block d-xl-block"><div class="row"><div class="col-3"> <vc-category-card title="1. Ročník" img="rocnik1.svg" link="./pre-skoly-stredna-skola-1-rocnik-ucebne-materialy" isactive="true"></vc-category-card></div><div class="col-3"> <vc-category-card title="2. Ročník" img="rocnik2.svg" link="./pre-skoly-stredna-skola-2-rocnik-ucebne-materialy"></vc-category-card></div><div class="col-3"> <vc-category-card title="3. Ročník" img="rocnik3.svg" link="./pre-skoly-stredna-skola-3-rocnik-ucebne-materialy"></vc-category-card></div><div class="col-3"> <vc-category-card title="4. Ročník" img="rocnik4.svg" link="./pre-skoly-stredna-skola-4-rocnik-ucebne-materialy"></vc-category-card></div></div></div><div class="d-block d-sm-block d-md-none"><div class="carousel-wrapper"> <vc-pre-skoly-carousel card1_title="1. Ročník" card1_img="rocnik1.svg" card1_link="./pre-skoly-stredna-skola-1-rocnik-ucebne-materialy"card2_title="2. Ročník" card2_img="rocnik2.svg" card2_link="./pre-skoly-stredna-skola-2-rocnik-ucebne-materialy"card3_title="3. Ročník" card3_img="rocnik3.svg" card3_link="./pre-skoly-stredna-skola-3-rocnik-ucebne-materialy"card4_title="4. Ročník" card4_img="rocnik4.svg" card4_link="./pre-skoly-stredna-skola-4-rocnik-ucebne-materialy" /></div></div><div class="container text-center mt-5 mb-5 hardcode-text"><h4> Boli by sme radi, aby už na základnej škole mali deti finančné vzdelávanie.</h4><p> A preto sme učiteľom a ich žiakom na základných a stredných školách pripravili príručky, cvičenia a videá, ktoré vás <br />prevedú finančným vzdelaním.</p></div><div class="container"><div class="switch-wrapper mb-5"><div class="row switch d-flex justify-content-center align-items-center text-center"> <a class="switch-button p-0 switchIsActive col-6 d-flex justify-content-center align-items-center text-center" href="./pre-skoly-stredna-skola-1-rocnik-ucebne-materialy">Učebné materiály </a> <a class="switch-button p-0 col-6 d-flex justify-content-center align-items-center text-center" href="./pre-skoly-stredna-skola-1-rocnik-videa">Videá </a></div></div></div><div class="container"> <vc-advanced-img-cards page="stredna-skola" year="1-rocnik" category="advancedImgCardLink"/></div><div class="container text-center mb-5"> <button class="btn-primary download-all mb-5"> Stiahnuť všetky dokumenty </button></div><div class="container text-center mt-5 mb-5 hardcode-text"><h4> Informácie ktoré vám pomôžu k správnemu investovaniu.</h4><p> Pripravili sme pre vás všetky možné finančné otázky a odpovede <br> na ktoré móžete naraziť vo vašom živote.</p> <a class="fake" href="">Zobraziť všetky články</a></div></div>
pattern
            ]
        );

        register_block_pattern(
            'bpc/vis-osobne-financie',
            [
                'title'       => __( 'Osobne-financie', 'block-patterns-collection' ),
                'description' => __( 'financie.sk Osobne financie', 'block-patterns-collection' ),
                'categories'  => [ 'wezeo-patterns' ],
                'content'     => <<<pattern
<div><div class="container-fluid byvanie-main"><div class="container"><div class="byvanie-welcome-text"><div class="col d-flex flex-column mb-5 b-arrow"> <a href="./home" class="mb-5 d-flex align-items-center"> <i class="bi bi-arrow-left mr-2"></i> Späť na hlavnú stránku </a><h1 mt-5> Auto</h1><p class="mt-4 content"> Leasing, finančný lízing, operatívny lízing, akontácia, amortizácia</p><div class="mb-5"></div></div></div></div></div><div id="progressBar"> <vc-progress-bar/></div><div id="vedeliSte"> <vc-carousel/></div><div id="zakladneInformacie"><div class="container text-center mt-5 mb-5 hardcode-text"><h4> Základné články</h4><p> Pripravili sme pre vás všetky možné finančné otázky a odpovede <br /> na ktoré môžete naraziť vo vašom živote.</p></div><div class="container mt-5 mb-5 d-none d-md-block d-lg-block d-xl-block"><div class="row"><div class="col-md-3"> <vc-mini-card title="Financovanie auta" desc="Ako financovať kúpu auta? Leasing/Úver (pôžička)? Ktoré sa oplatí viac?" img="Blue-home.svg" link="/osobne-financie-auto-financovanie-auta-clanok"/></div><div class="col-md-3"> <vc-mini-card title="Poistenie Auta" desc="Prečo si kedy si uzavrieť havarijné poistenie keď mám PZP?" img="Blue-home.svg" link="/osobne-financie-auto-poistenie-auta-clanok"/></div><div class="col-md-3"> <vc-mini-card title="Kúpa a predaj" desc="Na čo myslieť pri predaji auta? Ktoré dane súvisia s vlastníctvom motorového vozidla?" img="Blue-home.svg" link="/osobne-financie-auto-kupa-a-predaj-clanok"/></div><div class="col-md-3"> <vc-mini-card title="Údržba auta" desc="Nerobte si starosti súdržbou vášho auta" img="Blue-home.svg" link="/osobne-financie-auto-udrzba-auta-clanok"/></div></div></div><div class="d-block d-sm-block d-md-none"><div class="carousel-wrapper"> <vc-osobne-financie-carousel card1_title="Financovanie auta" card1_desc="Ako financovať kúpu auta? Leasing/Úver (pôžička)? Ktoré sa oplatí viac?" card1_img="Blue-home.svg" card1_link="/osobne-financie-auto-financovanie-auta-clanok"card2_title="Poistenie Auta" card2_desc="Prečo si kedy si uzavrieť havarijné poistenie keď mám PZP?" card2_img="Blue-home.svg" card2_link="/osobne-financie-auto-poistenie-auta-clanok"card3_title="Kúpa a predaj" card3_desc="Na čo myslieť pri predaji auta? Ktoré dane súvisia s vlastníctvom motorového vozidla?" card3_img="Blue-home.svg" card3_link="/osobne-financie-auto-kupa-a-predaj-clanok"card4_title="Údržba auta" card4_desc="Nerobte si starosti súdržbou vášho auta" card4_img="Blue-home.svg" card4_link="/osobne-financie-auto-udrzba-auta-clanok"/></div></div></div><div id="najnovsieClanky"><div class="container text-center mt-5 mb-5 hardcode-text"><h4> Najnovšie články o autách</h4><p> Pripravili sme pre vás všetky možné finančné otázky a odpovede <br /> na ktoré môžete naraziť vo vašom živote.</p></div></div><div id="najnovsieProdukty"><div class="container text-center mt-5 mb-5 hardcode-text"><h4> Najlepšie produkty na našom trhu</h4><p> Pripravili sme pre vás tie najlepšie produkty v ramci bývania...</p></div></div><div id="uzitocneLinky"><div class="container"><div class="row border-center mb-5"> <vc-link-cards/></div></div></div></div>
pattern
            ]
        );

        //welcome contenty ku kazdej stranke

        register_block_pattern(
            'bpc/home-page-welcome-content',
            [
                'title'       => __( 'Home-page-welcome-content', 'block-patterns-collection' ),
                'description' => __( 'home-page-welcome-content(text & background)', 'block-patterns-collection' ),
                'categories'  => [ 'wezeo-patterns' ],
                'content'     => <<<pattern
<div class="preskoly-wrapper"><div class="container home-main d-flex align-items-center"><div><h1> Prevedieme vás životnou <br />finančnou cestou.</h1><p class="p-0 mt-4 mb-5"> Získajte odborníka na kľúčové finančné momenty <br />vo vašom živote.</p></div></div></div>
pattern
            ]
        );


        register_block_pattern(
            'bpc/osobne-financie-welcome-content',
            [
                'title'       => __( 'Osobne-financie-welcome-content', 'block-patterns-collection' ),
                'description' => __( 'osobne-financie-welcome-content(text & background)', 'block-patterns-collection' ),
                'categories'  => [ 'wezeo-patterns' ],
                'content'     => <<<pattern
<div class="container-fluid byvanie-main"><div class="container"><div class="byvanie-welcome-text"><div class="col d-flex flex-column mb-5 b-arrow"> <a href="./home" class="mb-5 d-flex align-items-center"> <i class="bi bi-arrow-left mr-2"></i> Späť na hlavnú stránku </a><h1 mt-5> Auto</h1><p class="mt-4 content"> Leasing, finančný lízing, operatívny lízing, akontácia, amortizácia</p><div class="mb-5"></div></div></div></div></div>
pattern
            ]
        );

        register_block_pattern(
            'bpc/pre-skoly-welcome-content',
            [
                'title'       => __( 'Pre-skoly-welcome-content', 'block-patterns-collection' ),
                'description' => __( 'pre-skoly-welcome-content(text & background)', 'block-patterns-collection' ),
                'categories'  => [ 'wezeo-patterns' ],
                'content'     => <<<pattern
<div><div class="container-fluid preskoly-main"><div class="container"><div class="preskoly-welcome-text mb-5"><h1 class="title"> Stredná škola</h1><p class="content"> Pripravili sme pre vás materiály pre učiteľov zo stredných škôl.</p><p> <a class="pr-2" href="./pre-skoly-zakladna-skola-1-stupen-1-rocnik-ucebne-materialy"> Základná škola 1. stupeň </a> • <a class="p-2" href="./pre-skoly-zakladna-skola-2-stupen-5-rocnik-ucebne-materialy"> Základná škola 2. stupeň </a> • <a class="p-2 isActiveA" href="./pre-skoly-stredna-skola-1-rocnik-ucebne-materialy"> Stredná škola </a></p></div></div></div></div>
pattern
            ]
        );

        //editovatelne tecty vo wp


        //Plne editovatelna H4 a p
        register_block_pattern(
            'bpc/osobne-financie-h4&p',
            [
                'title'       => __( 'osobne-financie-h4&p', 'block-patterns-collection' ),
                'description' => __( 'osobne-financie-h4&p', 'block-patterns-collection' ),
                'categories'  => [ 'wezeo-patterns' ],
                'content'     => <<<pattern
<div class="container text-center mt-5 mb-5 hardcode-text"><h4> Základné články</h4><p> Pripravili sme pre vás všetky možné finančné otázky a odpovede <br /> na ktoré môžete naraziť vo vašom živote.</p></div>
pattern
            ]
        );

        //Plne editovatelna H4, p a a
        register_block_pattern(
            'bpc/home-pre-skoly-h4,p,a',
            [
                'title'       => __( 'Home-pre-skoly-h4,p,a', 'block-patterns-collection' ),
                'description' => __( 'home-pre-skoly-h4,p,a', 'block-patterns-collection' ),
                'categories'  => [ 'wezeo-patterns' ],
                'content'     => <<<pattern
<div><div class="container text-center mt-5 mb-5 hardcode-text"><h4> Informácie ktoré vám pomôžu k správnemu investovaniu.</h4><p> Pripravili sme pre vás všetky možné finančné otázky a odpovede <br> na ktoré móžete naraziť vo vašom živote.</p> <a class="fake" href="">Zobraziť všetky články</a></div></div>
pattern
            ]
        );

        /**
         * Intro Section
         */
        register_block_pattern(
            'bpc/three-columns',
            [
                'title'       => __( 'Three columns', 'block-patterns-collection' ),
                'description' => __( 'Section with three columns', 'block-patterns-collection' ),
                'categories'  => [ 'wezeo-patterns' ],
                'content'     => <<<pattern
<div class="row"><div class="col-lg-4"> <img src="http://placehold.jp/150x150.png" alt=""><h2>Heading</h2><p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p><p><a class="btn btn-secondary" href="#">View details &raquo;</a></p></div><div class="col-lg-4"> <img src="http://placehold.jp/150x150.png" alt=""><h2>Heading</h2><p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p><p><a class="btn btn-secondary" href="#">View details &raquo;</a></p></div><div class="col-lg-4"> <img src="http://placehold.jp/150x150.png" alt=""><h2>Heading</h2><p>And lastly this, the third column of representative placeholder content.</p><p><a class="btn btn-secondary" href="#">View details &raquo;</a></p></div></div>
pattern
            ]
        );
        /**
         * Section with three columns
         */
        register_block_pattern(
            'bpc/feature-image-right',
            [
                'title'       => __( 'Feature image right', 'block-patterns-collection' ),
                'description' => __( 'Feature with image - right', 'block-patterns-collection' ),
                'categories'  => [ 'wezeo-patterns' ],
                'content'     => <<<pattern
<div class="row featurette"><div class="col-md-7"><h2 class="featurette-heading">First featurette heading. <span class="text-muted">It’ll blow your mind.</span></h2><p class="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p></div><div class="col-md-5"> <img src="http://placehold.jp/500x500.png" alt=""></div></div>
pattern

            ]
        );

        /**
         * Section with three columns
         */
        register_block_pattern(
            'bpc/qweasd',
            [
                'title'       => __( 'qweasd', 'block-patterns-collection' ),
                'description' => __( 'qweasd', 'block-patterns-collection' ),
                'categories'  => [ 'wezeo-patterns' ],
                'content'     => <<<pattern
<!-- wp:group {"align":"full","className":"eplus-VtnPR1","epCustomPadding":{"value":{"top":"80","right":"","bottom":"80","left":""},"unit":"px","important":false},"epGeneratedClass":"eplus-VtnPR1","epCustomBackground":{"solid":"rgba(0, 0, 0, 0.53)","gradient":"","media":{"backgroundPositionX":0.5,"backgroundPositionY":0.5,"position":"relative","background":{"id":30839,"unsplash_order":11,"title":"","filename":"fernando-%c3%a1lvarez-rodr%c3%adguez-m7gddpqjowg-unsplash.jpeg","url":"https://demo.gutenberghub.com/templates/wp-content/uploads/sites/10/2021/01/fernando-c3a1lvarez-rodrc3adguez-m7gddpqjowg-unsplash.jpeg","link":"https://unsplash.com/photos/M7GddPqJowg","alt":"blue body of water in front of building near trees during nighttime","author":"Fernando Álvarez Rodríguez","unsplashAuthorLink":"https://unsplash.com/@nando0515","description":"blue body of water in front of building near trees during nighttime","caption":"Photo by \u003ca href=\u0022https://unsplash.com/@nando0515\u0022 rel=\u0022nofollow\u0022\u003eFernando Álvarez Rodríguez\u003c/a\u003e on \u003ca href=\u0022https://unsplash.com/?utm_source=gutenberg-playground\u0026#038;utm_medium=referral\u0022 rel=\u0022nofollow\u0022\u003eUnsplash\u003c/a\u003e ","color":"#0c73d9","name":"m7gddpqjowg","height":3840,"width":5760,"status":"inherit","uploadedTo":0,"date":"2018-11-15T20:49:20.000Z","modified":"2021-01-13T22:06:36.000Z","menuOrder":0,"mime":"image/jpeg","type":"image","subtype":"jpeg","icon":"https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?crop=entropy\u0026cs=tinysrgb\u0026fit=crop\u0026fm=jpg\u0026ixid=MXwxOTU3NDZ8MHwxfHNlYXJjaHwxMnx8aG90ZWx8ZW58MHx8fA\u0026ixlib=rb-1.2.1\u0026q=85\u0026w=150\u0026h=150","dateFormatted":"November 15, 2018","nonces":{"update":"de57c83ae9","delete":"f996eab393","edit":"5f9eed0036"},"editLink":false,"meta":false,"originalUnsplashImageURL":"https://unsplash.com/photos/M7GddPqJowg","originalUnsplashImageName":"Unsplash","sizes":{"full":{"url":"https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixid=MXwxOTU3NDZ8MHwxfHNlYXJjaHwxMnx8aG90ZWx8ZW58MHx8fA\u0026ixlib=rb-1.2.1","height":3840,"width":5760,"orientation":0},"medium":{"url":"https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixid=MXwxOTU3NDZ8MHwxfHNlYXJjaHwxMnx8aG90ZWx8ZW58MHx8fA\u0026ixlib=rb-1.2.1\u0026fm=jpg\u0026q=85\u0026fit=crop\u0026w=400\u0026h=266","height":266,"width":400,"orientation":0},"thumbnail":{"url":"https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixid=MXwxOTU3NDZ8MHwxfHNlYXJjaHwxMnx8aG90ZWx8ZW58MHx8fA\u0026ixlib=rb-1.2.1\u0026fm=jpg\u0026q=85\u0026fit=crop\u0026w=150\u0026h=100","height":100,"width":150,"orientation":0},"medium_large":{"url":"https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixid=MXwxOTU3NDZ8MHwxfHNlYXJjaHwxMnx8aG90ZWx8ZW58MHx8fA\u0026ixlib=rb-1.2.1\u0026fm=jpg\u0026q=85\u0026fit=crop\u0026w=768\u0026h=512","height":512,"width":768,"orientation":0},"large":{"url":"https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixid=MXwxOTU3NDZ8MHwxfHNlYXJjaHwxMnx8aG90ZWx8ZW58MHx8fA\u0026ixlib=rb-1.2.1\u0026fm=jpg\u0026q=85\u0026fit=crop\u0026w=1024\u0026h=682","height":682,"width":1024,"orientation":0},"1536x1536":{"url":"https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixid=MXwxOTU3NDZ8MHwxfHNlYXJjaHwxMnx8aG90ZWx8ZW58MHx8fA\u0026ixlib=rb-1.2.1\u0026fm=jpg\u0026q=85\u0026fit=crop\u0026w=1536\u0026h=1024","height":1024,"width":1536,"orientation":0},"2048x2048":{"url":"https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixid=MXwxOTU3NDZ8MHwxfHNlYXJjaHwxMnx8aG90ZWx8ZW58MHx8fA\u0026ixlib=rb-1.2.1\u0026fm=jpg\u0026q=85\u0026fit=crop\u0026w=2048\u0026h=1365","height":1365,"width":2048,"orientation":0},"woocommerce_thumbnail":{"url":"https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixid=MXwxOTU3NDZ8MHwxfHNlYXJjaHwxMnx8aG90ZWx8ZW58MHx8fA\u0026ixlib=rb-1.2.1\u0026fm=jpg\u0026q=85\u0026fit=crop\u0026w=300\u0026h=200","height":200,"width":300,"orientation":0},"woocommerce_single":{"url":"https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixid=MXwxOTU3NDZ8MHwxfHNlYXJjaHwxMnx8aG90ZWx8ZW58MHx8fA\u0026ixlib=rb-1.2.1\u0026fm=jpg\u0026q=85\u0026fit=crop\u0026w=600\u0026h=400","height":400,"width":600,"orientation":0},"woocommerce_gallery_thumbnail":{"url":"https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixid=MXwxOTU3NDZ8MHwxfHNlYXJjaHwxMnx8aG90ZWx8ZW58MHx8fA\u0026ixlib=rb-1.2.1\u0026fm=jpg\u0026q=85\u0026fit=crop\u0026w=100\u0026h=66","height":66,"width":100,"orientation":0},"shop_catalog":{"url":"https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixid=MXwxOTU3NDZ8MHwxfHNlYXJjaHwxMnx8aG90ZWx8ZW58MHx8fA\u0026ixlib=rb-1.2.1\u0026fm=jpg\u0026q=85\u0026fit=crop\u0026w=300\u0026h=200","height":200,"width":300,"orientation":0},"shop_single":{"url":"https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixid=MXwxOTU3NDZ8MHwxfHNlYXJjaHwxMnx8aG90ZWx8ZW58MHx8fA\u0026ixlib=rb-1.2.1\u0026fm=jpg\u0026q=85\u0026fit=crop\u0026w=600\u0026h=400","height":400,"width":600,"orientation":0},"shop_thumbnail":{"url":"https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixid=MXwxOTU3NDZ8MHwxfHNlYXJjaHwxMnx8aG90ZWx8ZW58MHx8fA\u0026ixlib=rb-1.2.1\u0026fm=jpg\u0026q=85\u0026fit=crop\u0026w=100\u0026h=66","height":66,"width":100,"orientation":0}}},"backgroundSize":"cover","backgroundRepeat":"","backgroundAttachment":"","backgroundPlacement":"back"}},"epCustomOtherSettings":{"hide":{"property":"flex","important":false},"transition":{"duration":"","delay":"","speedCurve":"ease","important":true},"zIndex":{"value":0,"important":false},"overflow":{"value":"","important":false}},"epAnimationGeneratedClass":"edplus_anim-MEKMQK","editorPlusCustomCSS":"\n .eplus-VtnPR1 { \n min-height: 700px;\n justify-content: center;\n align-items: center;\n flex-wrap: wrap;\n }\n .eplus-VtnPR1 .wp-block-group__inner-container{\n flex-basis: 100%;\n }\n"} -->
<div class="wp-block-group alignfull eplus-VtnPR1"><div class="wp-block-group__inner-container"><!-- wp:heading {"textAlign":"center","level":3,"className":"eplus-tg7Zfr","epCustomMargin":{"value":{"top":"0","right":"auto","bottom":"20","left":"auto"},"unit":"px","important":false},"epGeneratedClass":"eplus-tg7Zfr","epCustomSizingResponsiveEnabled":true,"epCustomSizingMobileModified":true,"epCustomSizing":{"height":{"value":"","important":false,"unit":"%"},"width":{"value":35,"important":false,"unit":"%"},"maxWidth":{"value":"","important":false,"unit":"%"},"maxHeight":{"value":"","important":false,"unit":"%"}},"epCustomSizingMobile":{"height":{"value":"","important":false,"unit":"%"},"width":{"value":70,"important":false,"unit":"%"},"maxWidth":{"value":"","important":false,"unit":"%"},"maxHeight":{"value":"","important":false,"unit":"%"}},"epCustomBackground":{"solid":"rgba(101, 138, 195, 0.68)","gradient":"","media":{"backgroundPositionX":"","backgroundPositionY":"","background":{},"backgroundSize":"","backgroundRepeat":""}},"epCustomTypography":{"lineHeight":{"value":"","important":false,"unit":"px"},"fontSize":{"value":"","important":false,"unit":"px"},"letterSpacing":{"value":"","important":false,"unit":"px"},"fontWeight":"700","textStyle":["capitalize"],"textColor":{"color":"#ffffff","imp":false},"underline":{"color":"","style":""},"lineThrough":{"color":"","style":""}},"epAnimationGeneratedClass":"edplus_anim-RR5VKx"} -->
<h3 class="has-text-align-center eplus-tg7Zfr">the best luxury hotel in this city</h3>
<!-- /wp:heading --> <!-- wp:heading {"textAlign":"center","level":1,"className":"eplus-mFySCG","epCustomPadding":{"value":{"top":"10","right":"0","bottom":"10","left":"0"},"unit":"px","important":false},"epCustomMargin":{"value":{"top":"","right":"auto","bottom":"","left":"auto"},"unit":"%","important":false},"epGeneratedClass":"eplus-mFySCG","epCustomSizingResponsiveEnabled":true,"epCustomSizingMobileModified":true,"epCustomSizing":{"height":{"value":"","important":false,"unit":"%"},"width":{"value":70,"important":false,"unit":"%"},"maxWidth":{"value":"","important":false,"unit":"%"},"maxHeight":{"value":"","important":false,"unit":"%"}},"epCustomSizingMobile":{"height":{"value":"","important":false,"unit":"%"},"width":{"value":90,"important":false,"unit":"%"},"maxWidth":{"value":"","important":false,"unit":"%"},"maxHeight":{"value":"","important":false,"unit":"%"}},"epCustomTypographyResponsiveEnabled":true,"epCustomTypographyMobileModified":true,"epCustomTypography":{"lineHeight":{"value":1.1,"important":false,"unit":"em"},"fontSize":{"value":60,"important":false,"unit":"px"},"letterSpacing":{"value":"","important":false,"unit":"px"},"fontWeight":"700","textStyle":["uppercase","italic"],"textColor":{"color":"#ffffff","imp":false},"underline":{"color":"","style":""},"lineThrough":{"color":"","style":""}},"epCustomTypographyMobile":{"lineHeight":{"value":1.1,"important":false,"unit":"em"},"fontSize":{"value":45,"important":false,"unit":"px"},"letterSpacing":{"value":"","important":false,"unit":"px"},"fontWeight":"700","textStyle":["uppercase","italic"],"textColor":{"color":"#ffffff","imp":false},"underline":{"color":"","style":""},"lineThrough":{"color":"","style":""}},"epAnimationGeneratedClass":"edplus_anim-LqIx7d"} -->
<h1 class="has-text-align-center eplus-mFySCG">Amazing&nbsp;<strong>packages</strong>&nbsp;Waiting for You</h1>
<!-- /wp:heading --> <!-- wp:buttons {"align":"center","className":"eplus-0qssk9","epCustomMargin":{"value":{"top":"30","right":"","bottom":"","left":""},"unit":"px","important":false},"epGeneratedClass":"eplus-0qssk9","epCustomOtherSettings":{"hide":{"property":"","important":false},"transition":{"duration":"","delay":"","speedCurve":"ease","important":true},"zIndex":{"value":0,"important":false},"overflow":{"value":"","important":false}},"epAnimationGeneratedClass":"edplus_anim-XTbQoS"} -->
<div class="wp-block-buttons aligncenter eplus-0qssk9"><!-- wp:button {"borderRadius":0,"className":"eplus-FjpLw8 is-style-outline","epStylingOptions":{"buttonsAlignmentResponsiveEnabled":false,"buttonsAlignmentHoverEnabled":false,"buttonIconBeforeResponsiveEnabled":false,"buttonIconBeforeHoverEnabled":false,"buttonIconAfterResponsiveEnabled":false,"buttonIconAfterHoverEnabled":false,"connectorIconResponsiveEnabled":false,"connectorIconHoverEnabled":false,"buttonsAlignment":{"target":".block-editor-block-list__layout","includeDotSuffix":false,"responsive":true,"hover":true,"options":[{"custom":true,"control":"IconClassToggle"},{"label":"Alignment","control":"ButtonGroup","attribute":"epCustomButtonsAlignment","defaults":{"desktop":"right"},"props":{"options":[{"icon":"align-pull-left","value":"left"},{"icon":"align-pull-right","value":"right"}]},"condition":{"query":[{"field":"attributes.className","compare":"IN","value":"ep-custom-buttons-icon"}]}}]},"buttonIconBefore":{"target":".wp-block-button__link:before","includeDotSuffix":false,"responsive":true,"hover":true,"options":[{"label":"Icon","control":"IconPicker","attribute":"epCustomButtonIconBefore","defaults":{"desktop":"eplusicon-heart1"},"css":"content","condition":{"query":[{"field":"attributes.className","compare":"IN","value":"ep-custom-buttons-icon"},{"field":"attributes.epCustomButtonsAlignment.desktop","controlledBy":"ButtonGroup","compare":"EQUAL","value":"left"}]}}]},"buttonIconAfter":{"target":".wp-block-button__link:after","includeDotSuffix":false,"responsive":true,"hover":true,"options":[{"label":"Icon","control":"IconPicker","attribute":"epCustomButtonIconAfter","defaults":{"desktop":"eplusicon-heart1"},"css":"content","condition":{"query":[{"field":"attributes.className","compare":"IN","value":"ep-custom-buttons-icon"},{"field":"attributes.epCustomButtonsAlignment.desktop","controlledBy":"ButtonGroup","compare":"EQUAL","value":"right"}]}}]},"connectorIcon":{"target":".wp-block-button__link:after, {{class}} .wp-block-button__link:before","includeDotSuffix":false,"responsive":true,"hover":true,"hoverTarget":".wp-block-button__link:after, {{class}} .wp-block-button__link:before","options":[{"label":"Background","control":"ColorPicker","attribute":"epCustomIconBackground","css":"background","condition":{"query":[{"field":"attributes.className","compare":"IN","value":"ep-custom-buttons-icon"}]}},{"label":"Color","control":"ColorPicker","attribute":"epCustomIconColor","css":"color","condition":{"query":[{"field":"attributes.className","compare":"IN","value":"ep-custom-buttons-icon"}]}},{"label":"Radius","control":"Range","attribute":"epCustomIconRadius","css":"border-radius","condition":{"query":[{"field":"attributes.className","compare":"IN","value":"ep-custom-buttons-icon"}]}},{"label":"Padding","control":"Range","attribute":"epCustomIconPadding","css":"padding","props":{"supportedUnits":["px"],"max":30},"condition":{"query":[{"field":"attributes.className","compare":"IN","value":"ep-custom-buttons-icon"}]}},{"label":"Icon Space","control":"Range","attribute":"epCustomBeforeIconSpace","css":"margin-right","props":{"supportedUnits":["px"],"max":50},"condition":{"query":[{"field":"attributes.className","compare":"IN","value":"ep-custom-buttons-icon"},{"field":"attributes.epCustomButtonsAlignment.desktop","controlledBy":"ButtonGroup","compare":"EQUAL","value":"left"}]}},{"label":"Icon Space","control":"Range","attribute":"epCustomAfterIconSpace","css":"margin-left","props":{"supportedUnits":["px"],"max":50},"condition":{"query":[{"field":"attributes.className","compare":"IN","value":"ep-custom-buttons-icon"},{"field":"attributes.epCustomButtonsAlignment.desktop","controlledBy":"ButtonGroup","compare":"EQUAL","value":"right"}]}}]},"savedStyling":"","clientId":"ad84fc0f-1e76-41b0-8881-bca6a3aba396"},"epCustomButtonsAlignment":{"desktop":"right","tablet":"","tabletModified":false,"mobile":"","mobileModified":false,"hover":"","hoverModified":false},"epCustomBeforeIconSpace":{"desktop":{"value":"","important":false,"unit":"%"},"tablet":{"value":"","important":false,"unit":"%"},"tabletModified":false,"mobile":{"value":"","important":false,"unit":"%"},"mobileModified":false,"hover":{"value":"","important":false,"unit":"%"},"hoverModified":false},"epCustomAfterIconSpace":{"desktop":{"value":"","important":false,"unit":"%"},"tablet":{"value":"","important":false,"unit":"%"},"tabletModified":false,"mobile":{"value":"","important":false,"unit":"%"},"mobileModified":false,"hover":{"value":"","important":false,"unit":"%"},"hoverModified":false},"epCustomButtonIconBefore":{"desktop":{"icon":"eplusicon-heart1"},"tablet":{"icon":""},"tabletModified":false,"mobile":{"icon":""},"mobileModified":false,"hover":{"icon":""},"hoverModified":false},"epCustomButtonIconAfter":{"desktop":{"icon":"eplusicon-heart1"},"tablet":{"icon":""},"tabletModified":false,"mobile":{"icon":""},"mobileModified":false,"hover":{"icon":""},"hoverModified":false},"epCustomIconBackground":{"desktop":{"color":""},"tablet":{"color":""},"tabletModified":false,"mobile":{"color":""},"mobileModified":false,"hover":{"color":""},"hoverModified":false},"epCustomIconColor":{"desktop":{"color":""},"tablet":{"color":""},"tabletModified":false,"mobile":{"color":""},"mobileModified":false,"hover":{"color":""},"hoverModified":false},"epCustomIconRadius":{"desktop":{"value":"","important":false,"unit":"%"},"tablet":{"value":"","important":false,"unit":"%"},"tabletModified":false,"mobile":{"value":"","important":false,"unit":"%"},"mobileModified":false,"hover":{"value":"","important":false,"unit":"%"},"hoverModified":false},"epCustomIconPadding":{"desktop":{"value":"","important":false,"unit":"%"},"tablet":{"value":"","important":false,"unit":"%"},"tabletModified":false,"mobile":{"value":"","important":false,"unit":"%"},"mobileModified":false,"hover":{"value":"","important":false,"unit":"%"},"hoverModified":false},"epGeneratedClass":"eplus-FjpLw8","epCustomBorderHover":{"borderTop":{"area":"","style":"solid","color":"rgb(49, 49, 49)","important":false},"borderRight":{"area":"","style":"solid","color":"rgb(49, 49, 49)","important":false},"borderBottom":{"area":"","style":"solid","color":"rgb(49, 49, 49)","important":false},"borderLeft":{"area":"","style":"solid","color":"rgb(49, 49, 49)","important":false},"borderAll":{"area":"","style":"solid","color":"rgb(49, 49, 49)","important":false}},"epCustomBorderHoverModified":true,"epCustomBorder":{"borderTop":{"area":"0","style":"solid","color":"rgb(49, 49, 49)","important":false},"borderRight":{"area":"0","style":"solid","color":"rgb(49, 49, 49)","important":false},"borderBottom":{"area":"0","style":"solid","color":"rgb(49, 49, 49)","important":false},"borderLeft":{"area":"0","style":"solid","color":"rgb(49, 49, 49)","important":false},"borderAll":{"area":"0","style":"solid","color":"rgb(49, 49, 49)","important":false}},"epCustomBackgroundHover":{"solid":"rgba(51, 84, 149, 1)","gradient":"","media":{"backgroundPositionX":"","backgroundPositionY":"","background":{},"backgroundSize":"","backgroundRepeat":""}},"epCustomBackgroundHoverEnabled":true,"epCustomBackgroundHoverModified":true,"epCustomBackground":{"solid":"rgba(102, 139, 196, 1)","gradient":"","media":{"backgroundPositionX":"","backgroundPositionY":"","background":{},"backgroundSize":"","backgroundRepeat":""}},"epCustomOtherSettings":{"hide":{"property":"","important":false},"transition":{"duration":600,"delay":"","speedCurve":"ease","important":true},"zIndex":{"value":0,"important":false},"overflow":{"value":"","important":false}},"epCustomTypography":{"lineHeight":{"value":"","important":false,"unit":"px"},"fontSize":{"value":14,"important":false,"unit":"px"},"letterSpacing":{"value":"","important":false,"unit":"px"},"fontWeight":"700","textStyle":["uppercase","italic"],"textColor":{"color":"rgba(255, 255, 255, 1)","imp":true},"underline":{"color":"","style":""},"lineThrough":{"color":"","style":""}},"epAnimationGeneratedClass":"edplus_anim-MZRZlH","editorPlusCustomCSS":"\n selector a:hover{ \n transform: scale(1.1); \n \n } \n"} -->
<div class="wp-block-button eplus-FjpLw8 is-style-outline"><a class="wp-block-button__link no-border-radius">learn more</a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons --></div></div>
<!-- /wp:group -->
pattern

            ]
        );

        /**
         * Hero image
         */
        register_block_pattern(
            'bpc/feature-image-left',
            [
                'title'       => __( 'Feature image left', 'block-patterns-collection' ),
                'description' => __( 'Feature with image - left', 'block-patterns-collection' ),
                'categories'  => [ 'wezeo-patterns' ],
                'content'     => <<<pattern
<div class="row featurette"><div class="col-md-7 order-md-2"><h2 class="featurette-heading">Oh yeah, it’s that good. <span class="text-muted">See for yourself.</span></h2><p class="lead">Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p></div><div class="col-md-5 order-md-1"> <img src="http://placehold.jp/500x500.png" alt=""></div></div>
pattern

            ]
        );

        /**
         * Section with three cards
         */
        register_block_pattern(
            'bpc/three-cards',
            [
                'title'       => __( 'Three cards', 'block-patterns-collection' ),
                'description' => __( 'Section with title and three cards', 'block-patterns-collection' ),
                'categories'  => [ 'wezeo-patterns' ],
                'content'     => <<<pattern
<div><div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center"><h1 class="display-4">Pricing</h1><p class="lead">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It’s built with default Bootstrap components and utilities with little customization.</p></div><div class="card-deck mb-3 text-center"><div class="card mb-4 shadow-sm"><div class="card-header"><h4 class="my-0 font-weight-normal">Free</h4></div><div class="card-body"><h1 class="card-title pricing-card-title">$0 <small class="text-muted">/ mo</small></h1><ul class="list-unstyled mt-3 mb-4"><li>10 users included</li><li>2 GB of storage</li><li>Email support</li><li>Help center access</li></ul> <button type="button" class="btn btn-lg btn-block btn-outline-primary">Sign up for free</button></div></div><div class="card mb-4 shadow-sm"><div class="card-header"><h4 class="my-0 font-weight-normal">Pro</h4></div><div class="card-body"><h1 class="card-title pricing-card-title">$15 <small class="text-muted">/ mo</small></h1><ul class="list-unstyled mt-3 mb-4"><li>20 users included</li><li>10 GB of storage</li><li>Priority email support</li><li>Help center access</li></ul> <button type="button" class="btn btn-lg btn-block btn-primary">Get started</button></div></div><div class="card mb-4 shadow-sm"><div class="card-header"><h4 class="my-0 font-weight-normal">Enterprise</h4></div><div class="card-body"><h1 class="card-title pricing-card-title">$29 <small class="text-muted">/ mo</small></h1><ul class="list-unstyled mt-3 mb-4"><li>30 users included</li><li>15 GB of storage</li><li>Phone and email support</li><li>Help center access</li></ul> <button type="button" class="btn btn-lg btn-block btn-primary">Contact us</button></div></div></div>
pattern

            ]
        );

        /**
         * Section with large text
         */
        register_block_pattern(
            'bpc/large-text',
            [
                'title'       => __( 'Large text', 'block-patterns-collection' ),
                'description' => __( 'Section with large text', 'block-patterns-collection' ),
                'categories'  => [ 'wezeo-patterns' ],
                'content'     => "<!-- wp:columns -->\n<div class=\"wp-block-columns\"><!-- wp:column -->\n<div class=\"wp-block-column\"><!-- wp:columns {\"className\":\"tw-mb-0 large-text-block\"} -->\n<div class=\"wp-block-columns tw-mb-0 large-text-block\"><!-- wp:column {\"className\":\"container\"} -->\n<div class=\"wp-block-column container\"><!-- wp:heading {\"className\":\"text-blue\"} -->\n<h2 class=\"text-blue\"><span class=\"text-grey\">Share your knowledge about</span>\&nbsp;running, yoga, mental health, business, entrepreneurship, blockchain, finances,…</h2>\n<!-- /wp:heading --></div>\n<!-- /wp:column --></div>\n<!-- /wp:columns --></div>\n<!-- /wp:column --></div>\n<!-- /wp:columns -->"
            ]
        );
        

        /**
         * Section with four cards
         */
        register_block_pattern(
            'bpc/four-cards',
            [
                'title'       => __( 'Four cards', 'block-patterns-collection' ),
                'description' => __( 'Section with four cards', 'block-patterns-collection' ),
                'categories'  => [ 'wezeo-patterns' ],
                'content'     => "<!-- wp:group {\"className\":\"wp-block-column section-cards section-4-cards bg-lightblue\"} -->\n<div class=\"wp-block-group wp-block-column section-cards section-4-cards bg-lightblue\"><div class=\"wp-block-group__inner-container\"><!-- wp:column -->\n<div class=\"wp-block-column\"><!-- wp:columns {\"className\":\"container\"} -->\n<div class=\"wp-block-columns container\"><!-- wp:column {\"className\":\"text-center text-block\"} -->\n<div class=\"wp-block-column text-center text-block\"><!-- wp:heading -->\n<h2>Start learning<br>on a whim</h2>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph -->\n<p>Whit offers simple subscription plans.</p>\n<!-- /wp:paragraph --></div>\n<!-- /wp:column --></div>\n<!-- /wp:columns -->\n\n<!-- wp:columns {\"className\":\"tw-mb-0\"} -->\n<div class=\"wp-block-columns tw-mb-0\"><!-- wp:column {\"className\":\"tw-mb-0\"} -->\n<div class=\"wp-block-column tw-mb-0\"><!-- wp:columns {\"className\":\"tw-mb-0\"} -->\n<div class=\"wp-block-columns tw-mb-0\"><!-- wp:column {\"className\":\"tw-mb-0 container\"} -->\n<div class=\"wp-block-column tw-mb-0 container\"><!-- wp:columns {\"className\":\"tw-mb-0 row\"} -->\n<div class=\"wp-block-columns tw-mb-0 row\"><!-- wp:column {\"className\":\"col-12 col-md-6 col-xl-3 px-0 px-md-3 mb-4 mb-xl-0 ms-0\"} -->\n<div class=\"wp-block-column col-12 col-md-6 col-xl-3 px-0 px-md-3 mb-4 mb-xl-0 ms-0\"><!-- wp:columns {\"className\":\"tw-mb-0 card border-0 rounded-20 py-3 py-md-5\"} -->\n<div class=\"wp-block-columns tw-mb-0 card border-0 rounded-20 py-3 py-md-5\"><!-- wp:column {\"className\":\"card-body text-center\"} -->\n<div class=\"wp-block-column card-body text-center\"><!-- wp:heading {\"level\":6} -->\n<h6>FREE ACCESS</h6>\n<!-- /wp:heading -->\n\n<!-- wp:heading {\"level\":3,\"className\":\"card-title text-blue\"} -->\n<h3 class=\"card-title text-blue\">Free</h3>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph {\"className\":\"tw-mb-0 card-text\"} -->\n<p class=\"tw-mb-0 card-text\">Explore the app and get a quick taste and find what you want to learn.</p>\n<!-- /wp:paragraph --></div>\n<!-- /wp:column --></div>\n<!-- /wp:columns --></div>\n<!-- /wp:column -->\n\n<!-- wp:column {\"className\":\"col-12 col-md-6 col-xl-3 px-0 px-md-3 mb-4 mb-xl-0 ms-0\"} -->\n<div class=\"wp-block-column col-12 col-md-6 col-xl-3 px-0 px-md-3 mb-4 mb-xl-0 ms-0\"><!-- wp:columns {\"className\":\"tw-mb-0 card border-0 rounded-20 py-3 py-md-5\"} -->\n<div class=\"wp-block-columns tw-mb-0 card border-0 rounded-20 py-3 py-md-5\"><!-- wp:column {\"className\":\"card-body text-center\"} -->\n<div class=\"wp-block-column card-body text-center\"><!-- wp:heading {\"level\":6} -->\n<h6>CHANNEL ACCESS</h6>\n<!-- /wp:heading -->\n\n<!-- wp:heading {\"level\":3,\"className\":\"card-title text-blue\"} -->\n<h3 class=\"card-title text-blue\">Channel</h3>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph {\"className\":\"tw-mb-0 card-text\"} -->\n<p class=\"tw-mb-0 card-text\">Select one of your favorite creators and follow their content.</p>\n<!-- /wp:paragraph --></div>\n<!-- /wp:column --></div>\n<!-- /wp:columns --></div>\n<!-- /wp:column -->\n\n<!-- wp:column {\"className\":\"col-12 col-md-6 col-xl-3 px-0 px-md-3 mb-4 mb-xl-0 ms-0\"} -->\n<div class=\"wp-block-column col-12 col-md-6 col-xl-3 px-0 px-md-3 mb-4 mb-xl-0 ms-0\"><!-- wp:columns {\"className\":\"tw-mb-0 card border-0 rounded-20 py-3 py-md-5\"} -->\n<div class=\"wp-block-columns tw-mb-0 card border-0 rounded-20 py-3 py-md-5\"><!-- wp:column {\"className\":\"card-body text-center\"} -->\n<div class=\"wp-block-column card-body text-center\"><!-- wp:heading {\"level\":6} -->\n<h6>FULL LEARNING ACCES</h6>\n<!-- /wp:heading -->\n\n<!-- wp:heading {\"level\":3,\"className\":\"card-title text-blue\"} -->\n<h3 class=\"card-title text-blue\">Premium</h3>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph {\"className\":\"tw-mb-0 card-text\"} -->\n<p class=\"tw-mb-0 card-text\">Get an unlimited access to wide range of creators, topics and resources.</p>\n<!-- /wp:paragraph --></div>\n<!-- /wp:column --></div>\n<!-- /wp:columns --></div>\n<!-- /wp:column -->\n\n<!-- wp:column {\"className\":\"col-12 col-md-6 col-xl-3 px-0 px-md-3 mb-4 mb-xl-0 ms-0\"} -->\n<div class=\"wp-block-column col-12 col-md-6 col-xl-3 px-0 px-md-3 mb-4 mb-xl-0 ms-0\"><!-- wp:columns {\"className\":\"tw-mb-0 card border-0 rounded-20 py-3 py-md-5 with-bg\"} -->\n<div class=\"wp-block-columns tw-mb-0 card border-0 rounded-20 py-3 py-md-5 with-bg\"><!-- wp:column {\"className\":\"card-body text-center\"} -->\n<div class=\"wp-block-column card-body text-center\"><!-- wp:heading {\"level\":6} -->\n<h6>CREATOR ACCESS</h6>\n<!-- /wp:heading -->\n\n<!-- wp:heading {\"level\":3,\"className\":\"card-title text-blue\"} -->\n<h3 class=\"card-title text-blue\">Whit create</h3>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph {\"className\":\"tw-mb-0 card-text\"} -->\n<p class=\"tw-mb-0 card-text\">Leverage simple tools to set up recurring support from your fans with Whit creator account.</p>\n<!-- /wp:paragraph --></div>\n<!-- /wp:column --></div>\n<!-- /wp:columns --></div>\n<!-- /wp:column --></div>\n<!-- /wp:columns --></div>\n<!-- /wp:column --></div>\n<!-- /wp:columns --></div>\n<!-- /wp:column --></div>\n<!-- /wp:columns --></div>\n<!-- /wp:column --></div></div>\n<!-- /wp:group -->"
            ]
        );
    }
}

/**
 * Register block pattern categories.
 */
function wzo_register_block_pattern_categories() {

    register_block_pattern_category(
        'wezeo-patterns',
        [ 'label' => __( 'Wezeo Patterns', 'block-patterns-collection' ) ]
    );

}
