<template>
	<div>
        <div>
			<div class="container-fluid preskoly-main">
				<div class="container">
					<div class="preskoly-welcome-text mb-5">
						<h1 class="title">
							Základná škola 1. stupeň
						</h1>
						<p class="content">
							Pripravili sme pre vás materiály pre učiteľov z prvého stupňa <br> základných škôl.
						</p>
						<p class="d-flex align-items-center">
							<a class="pr-2" href="./pre-skoly-zakladna-skola-1-stupen-1-rocnik">
								Základná škola 1. stupeň
							</a>
							•
							<a class="p-2" href="./pre-skoly-zakladna-skola-2-stupen-5-rocnik">
								Základná škola 2. stupeň
							</a>
							•
							<a class="p-2" href="./pre-skoly-stredna-skola-1-rocnik">
								Stredná škola
							</a>
						</p>
					</div>
				</div>
		</div>
		</div>
		<div class="container carousel-wrapper">
			<div class="row">
				<div class="col-3">
					<vc-category-card title="1. Ročník" img="rocnik1.svg" link="./pre-skoly-zakladna-skola-1-stupen-1-rocnik"></vc-category-card>
				</div>
				<div class="col-3">
					<vc-category-card title="2. Ročník" img="rocnik2.svg" link="./pre-skoly-zakladna-skola-1-stupen-2-rocnik"></vc-category-card>
				</div>
				<div class="col-3">
					<vc-category-card title="3. Ročník" img="rocnik3.svg" link="./pre-skoly-zakladna-skola-1-stupen-3-rocnik"></vc-category-card>
				</div>
				<div class="col-3">
					<vc-category-card title="4. Ročník" img="rocnik4.svg" link="./pre-skoly-zakladna-skola-1-stupen-4-rocnik"></vc-category-card>
				</div>
			</div>
		</div>
		<div class="container text-center mt-5 mb-5 hardcode-text">
			<h4>
				Boli by sme radi, aby už na základnej škole mali deti finančné
				vzdelávanie.
			</h4>
			<p>
				A preto sme učiteľom a ich žiakom na základných a stredných školách
				pripravili príručky, cvičenia a videá, ktoré vás
				<br />prevedú finančným vzdelaním.
			</p>
		</div>
		<div class="switch-wrapper mb-5">
			<div class="btn-group">
				<button class="switch-button p-0">
					Učebné materiály
				</button>
				<button class="switch-button p-0">
					Videá
				</button>
			</div>
		</div>
		<div class="container">
			<vc-advanced-img-cards page="zakladna-skola-1.stupen" year="1-rocnik" category="advancedImgCardLink"/>
		</div>
		<div class="container text-center mb-5">
			<button class="btn-primary download-all mb-5">
				Stiahnuť všetky dokumenty
			</button>
		</div>
		<div class="container">
			<div class="row">
				<div class="col">
					<vc-show-articles/>
				</div>
			</div>
		</div>
		<div class="container">
			<div class="row mb-5">
				<div class="col-12 col-md-6">
					<vc-img-card/>
				</div>
				<span class="divider border-left"></span>
				<div class="col d-flex align-items-end pl-2 pl-md-5">
					<vc-text-card/>
				</div>
			</div>
		</div>
	</div>
</template>


