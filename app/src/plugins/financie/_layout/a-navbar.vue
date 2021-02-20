<template>
	<div>
    <b-navbar toggleable="lg" type="light" variant="light">


      <b-navbar-nav class="row">
        <button type="button" class="btn btn-light" disabled>
          <span class="navbar-toggler-icon"></span>
        </button>
        
          <b-navbar  type="light">
            <b-navbar-brand>
            <img src="https://www.freeiconspng.com/thumbs/wallet-icon/wallet-icon-7.png">
            </b-navbar-brand>
          </b-navbar>
        
          <b-navbar-brand>
                financie.sk
          </b-navbar-brand>
      
        
        
      </b-navbar-nav>

      

          

       
      
    
      
        
        <b-navbar-nav class="ml-auto">
          
          <b-nav-item-dropdown text="Osobné financie" right>
            <b-dropdown-item href="#"></b-dropdown-item>
            <b-dropdown-item href="#"></b-dropdown-item>
            <b-dropdown-item href="#"></b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown text="Pre školy" right>
            <b-dropdown-item href="#">Základné školy</b-dropdown-item>
            <b-dropdown-item href="#">Stredné školy</b-dropdown-item>
            <b-dropdown-item href="#">Vysoké školy</b-dropdown-item>
          </b-nav-item-dropdown>

        </b-navbar-nav>


        <b-icon icon="search"></b-icon>
   
    </b-navbar>
  </div>
</template>

<script>
export default {

}
</script>

<style lang = "scss" scoped>
img{
  height: 24px;
  width: 22px;
}
	
  .logo-text{
    display: flex;
  }

  .blue{
    color: cadetblue;
  }

  .navbar{
    height: 63px;
  }
</style>