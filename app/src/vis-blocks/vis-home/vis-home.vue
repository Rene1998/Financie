<template>
	<div>
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
		<script>window.ocmsHost='https://financie.hybridlab.dev/ocms/api/'</script>
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
		<div class="container carousel-wrapper">
			<div class="row category-cards">
				<div class="col-4">
					<vc-home-category-card title="Bývanie" img="Home.svg" link="https://financie.hybridlab.dev/osobne-financie/byvanie"/>
				</div>
				<div class="col-4">
					<vc-home-category-card title="Rodina a deti" img="Family-group.svg" link="https://financie.hybridlab.dev/osobne-financie/rodina-deti"/>
				</div>
				<div class="col-4">
					<vc-home-category-card title="Auto" img="Car.svg" link="https://financie.hybridlab.dev/osobne-financie/auto"/>
				</div>
			</div>
			<div class="row category-cards">
				<div class="col-4">
					<vc-home-category-card title="Dôchodok" img="OldFamily-group.svg" link="https://financie.hybridlab.dev/osobne-financie/dochodok"/>
				</div>
				<div class="col-4">
					<vc-home-category-card title="Exekúcia" img="Execution.svg" link="https://financie.hybridlab.dev/osobne-financie/exekucia"/>
				</div>
				<div class="col-4">
					<vc-home-category-card title="Práca a dane" img="Work.svg" link="https://financie.hybridlab.dev/osobne-financie/praca-dane"/>
				</div>
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


