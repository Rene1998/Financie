<template>
	<div>
		<div class="preskoly-wrapper">
			<div class="container home-main d-flex align-items-center">
				<div>
					<h1>
						Prevedieme vás životnou
						<br />finančnou cestou.
					</h1>
					<p class="p-0 mt-4 mb-5">
						Získajte odborníka na kľúčové finančné momenty
						<br />vo vašom živote.
					</p>
				</div>
			</div>
		</div>
		<div class="container carousel-wrapper d-none d-md-block d-lg-block d-xl-block">
			<div class="row category-cards">
				<div class="col-4 mb-3">
					<vc-home-category-card title="Bývanie" img="Home.svg" link="./osobne-financie-byvanie"/>
				</div>
				<div class="col-4 mb-3">
					<vc-home-category-card title="Rodina a deti" img="Family-group.svg" link="./osobne-financie-rodina-a-deti"/>
				</div>
				<div class="col-4 mb-3">
					<vc-home-category-card title="Auto" img="Car.svg" link="./osobne-financie-auto"/>
				</div>
				<div class="col-4 mb-3">
					<vc-home-category-card title="Dôchodok" img="OldFamily-group.svg" link="./osobne-financie-dochodok"/>
				</div>
				<div class="col-4 mb-3">
					<vc-home-category-card title="Exekúcia" img="Execution.svg" link="./osobne-financie-exekucia"/>
				</div>
				<div class="col-4 mb-3">
					<vc-home-category-card title="Práca a dane" img="Work.svg" link="./osobne-financie-praca-a-dane"/>
				</div>
			</div>
		</div>
		<div class="d-block d-sm-block d-md-none">
			<div class="carousel-wrapper">
				<vc-home-carousel/>
			</div>
		</div>

		<vc-carousel/>

		<div class="container text-center mt-5 mb-5 hardcode-text">
			<h4>
				Budeme pri vás, počas toho ako si plníte vaše sny a ciele
			</h4>
			<p>
				Pripravili sme pre vás všetky možné finančné otázky a odpovede
				<br />na ktoré móžete naraziť vo vašom živote.
			</p>
		</div>

		<div class="container">
			<vc-advanced-img-home-cards/>
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
				<div class="col pl-2 pl-md-5 d-flex align-items-end">
					<vc-text-card/>
				</div>
			</div>
		</div>
	</div>
</template>


