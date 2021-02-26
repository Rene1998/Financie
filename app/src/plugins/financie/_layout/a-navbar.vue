<template>
	<div>
    <b-navbar toggleable="lg" type="light" >
      

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="mr-auto">

        <img class="financie" src="assets/logo.png" alt="logo">

        </b-navbar-nav>

        
      
            
        <b-navbar-nav class="btn bp-3">
          <b-nav-item href="#">Osobné financie</b-nav-item>
        </b-navbar-nav>

            <b-navbar-nav >
              <button type="button" class="btn bp-3 ">
                <b-nav-dropdown text="Pre školy" right >
                  <b-dropdown-item href="#">Základné školy</b-dropdown-item>
                  <b-dropdown-item href="#">Stredné školy</b-dropdown-item>
                  <b-dropdown-item href="#">Vysoké školy</b-dropdown-item>
                </b-nav-dropdown>

              </button>
            </b-navbar-nav>

            <b-navbar-nav>
              <b-nav-item>
                <b-icon icon="search"></b-icon>
              </b-nav-item>
            </b-navbar-nav>
            
        
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {

}
</script>

<style lang = "scss" scoped>
  .financie{
    width: 120px;
    min-height: 38px;
  }
  .navbar{
    height: 63px;
  
  }
  
  .btn { 
		border-radius: 0px;
	}

	.btn:hover{ 
		border-bottom: 3px solid #1EAEE1;
		border-radius: 0px;
	}
	
	.btn:focus { 
		box-shadow: none;
		border-bottom: 3px solid #1EAEE1;
	}

 


  
</style>

<style>
  .dropdown-toggle::after {
      display: none;
  }
</style>