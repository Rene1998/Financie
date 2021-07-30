<template>
    <div>
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
        <link type="text/css" rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"/>
        <nav class="navbar navbar-expand navbar-light d-flex align-items-center ">
            <a class="navbar-brand" href="./home">
            <img class="logo" :src="require('./assets/logo.svg')" alt="logo">
            </a>
         
            <div class="navbar-nav  d-flex align-items-center">
                <li class="nav-item d-none d-sm-none d-md-block" :class="{'active': osobneFinanciepage}">
                    <a class="btn osobne-financie bp-3 d-flex align-items-center" href="./osobne-financie-byvanie">Osobné financie</a>
                </li>
                <hr class="m-0" >
                <li class="nav-item dropdown" :class="{'active': preSkolypage}">
                    <a class="pl-3 pr-3 nav-link dropdown-toggle pre-skoly bp-3 d-flex align-items-center text-center justify-content-center " 
                        href="#" 
                        id="navbarDropdown" 
                        role="button"
                        data-toggle="dropdown" 
                        aria-haspopup="true" 
                        aria-expanded="false"
                        >
                        Pre školy
                    </a>
                    <div class="dropdown-menu dropdown-menu-right nav-item " aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="./pre-skoly-zakladna-skola-1-stupen-1-rocnik-ucebne-materialy">Základná škola 1. stupeň</a>
                        <a class="dropdown-item" href="./pre-skoly-zakladna-skola-2-stupen-5-rocnik-ucebne-materialy">Základná škola 2. stupeň</a>
                        <a class="dropdown-item" href="./pre-skoly-stredna-skola-1-rocnik-ucebne-materialy"> Stredná škola</a>
                    </div>
                </li>
                <hr class="m-0">
                <li class="hover-none nav-item d-flex align-items-center justify-content-center">
                    <a class="nav-item " href="#">
                        <i class="fake bi bi-search"/>
                    </a>
                </li>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
	data() {
		return {
			osobneFinanciepage: false,
      preSkolypage: false

		}
	},
	mounted() {
    this.osobneFinanciepage = window.location.pathname.startsWith('/osobne-financie'),
    this.preSkolypage = window.location.pathname.startsWith('/pre-skoly')
	}
}
</script>

<style lang="scss" scoped>
@import '../../plugins/financie/_theme/index.scss';
.navbar {
    height: 63px;
    background: #fff;
    justify-content: space-between;


    .pre-skoly{
        min-width: 120px !important;
    }    

    .osobne-financie{
        box-shadow: none !important;
    }


    .nav-link:hover {
        color: #1eaee1 !important;
    }

    hr {
        width: 30px;
        height: 0px;
        border: 0, 5px solid #f3f4f5;
        transform: rotate(90deg);
    }

    .navbar-collapse {
        flex-grow: unset;
    }
}

.hover-none{
    &:hover{
        border-color: transparent !important;
    }
}
/deep/ {


&li.nav-item.d-sm-none.d-md-block.active :focus-visible{
    display: none !important;
    outline: none !important;
    box-shadow: none !important;

}    





&a {
    font-weight: 400 !important;
    font-size: 16px !important;
    box-shadow: none;

    .bi{
        font-size: 20px;
    }
}

&.navbar-nav{
    &>.nav-item{
        &:hover{
            border-bottom: 3px solid #1eaee1;

            &>a{
                color: #1eaee1 !important;
            }
        }

    }
}


&.nav-item {
    border: 1px solid transparent;
    border-bottom: 3px solid transparent;
    border-radius: 0px;
    
    
    
    

     a {
         height: 61px;
        padding: 18px 15px;
        border: none;
        border-radius: 0;
      

        &:hover {

            border-bottom: none;
        }
     }
}

&.active {
    border-bottom: 3px solid #1eaee1;

    a {
        color: #1eaee1 !important;
    }

    .dropdown-item {
        color: #192949 !important;

        &:hover {
            color: #1eaee1 !important;
        }
    }
}

&a {
    color: #192949 !important;
}

&.dropdown-toggle::after {
    display: none;
}

&.dropdown-menu {

    min-width: 230px !important;
    min-height: 138px !important;
    border: none ;
    border-radius: 0px !important;
    box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;


    a{
        padding: 4px 24px !important;
        margin: 6px 0px 0px !important;
        max-height: 32px !important;

    }

    
}

&a:hover {
    color: #1eaee1 !important;
    background-color: #ffffff !important;
}

&.dropdown-item {
    margin-top: 6px;
}

&.nav-link:focus {
    outline: none !important;
}



}

@media only screen and (max-width: 420px) {
    .navbar {
        max-width: 420px;
    }

    .osobne-financie {
        display: none !important;
    }

    .pre-skoly {
        max-width: 92px;
    }

    .logo {
        width: 102px;
        height: 27px;
    }
}

@media only screen and (max-width: 350px) {
    .navbar {
        max-width: 350;
    }

    .osobne-financie {
        display: none !important;

    }

    .pre-skoly {
        max-width: 92px;
    }

    .logo {
        width: 102px;
        height: 27px;
    }
}

.dropdown:hover > .dropdown-menu {
    display: block;
}
</style>
