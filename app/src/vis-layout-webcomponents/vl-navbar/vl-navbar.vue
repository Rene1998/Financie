<template>
    <div>
        <link
            type="text/css"
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
        />
        <!-- <b-navbar type="light">
            <b-navbar-nav class="mr-auto d-flex aling-items-center">
                <b-navbar-nav class="d-none align-items-center">
                    <b-nav-item>
                        <i class="bi bi-list"/>
                    </b-nav-item>
                </b-navbar-nav>
                <router-link to="/">
                    <b-img class="logo" :src="require('./assets/logo.svg')" alt="logo" />
                </router-link>
            </b-navbar-nav>
            <b-navbar-nav class="d-flex align-items-center">
                <b-navbar-nav>
                    <b-nav-item class="btn osobne-financie z-btn bp-3 d-flex align-items-center"
                        href="#"
                        to="/home"
                        :class="{ isActive: page == 'home' || page == 'osobne-financie' }">
                        Osobné financie
                    </b-nav-item>
                </b-navbar-nav>
                <hr />
                <b-navbar-nav>
                    <b-nav-dropdown right class="btn z-btn pre-skoly bp-3 d-flex align-items-center text-center justify-content-center"
                        text="Pre školy"
                        :class="{ isActive: page == 'pre-skoly' }">
                        <b-dropdown-item to="/pre-skoly/zakladna-skola-1.stupen">
                            Základná škola 1. stupeň
                        </b-dropdown-item>
                        <b-dropdown-item to="/pre-skoly/zakladna-skola-2.stupen">
                            Základná škola 2. stupeň
                        </b-dropdown-item>
                        <b-dropdown-item to="/pre-skoly/stredna-skola">
                            Stredná škola
                        </b-dropdown-item>
                    </b-nav-dropdown>
                </b-navbar-nav>
                <hr />
                <b-navbar-nav>
                    <b-nav-item>
                        <i class="bi bi-search"/>
                    </b-nav-item>
                </b-navbar-nav>
            </b-navbar-nav>
        </b-navbar> -->
        <nav class="navbar navbar-expand navbar-light d-flex align-items-center ">
            <a class="navbar-brand" 
                href="#"><img 
                class="logo" :src="require('./assets/logo.svg')" alt="logo"></a>
         
                <div class="navbar-nav  d-flex align-items-center">
                    <li class="nav-item active">
                        <a class="btn osobne-financie z-btn bp-3 d-flex align-items-center" href="#">Osobné financie</a>
                    </li>
                    <hr >
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle btn z-btn pre-skoly bp-3 d-flex align-items-center text-center justify-content-center " 
                            href="#" id="navbarDropdown" 
                            role="button"
                            data-toggle="dropdown" 
                            aria-haspopup="true" 
                            aria-expanded="false"
                            >
                            Pre školy
                        </a>
                        <div class="dropdown-menu dropdown-menu-right nav-item " aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">Základná škola 1. stupeň</a>
                            <a class="dropdown-item" href="#">Základná škola 2. stupeň</a>
                            <a class="dropdown-item" href="#"> Stredná škola</a>
                        </div>
                    </li>
                    <hr class="">
                    <li class="hover-none nav-item d-flex align-items-center justify-content-center">
                        <a class="nav-item " href="#">
                            <i class=" bi bi-search"/>
                        </a>
                    </li>
                </div>
            
        </nav>
    </div>
</template>

<script>
export default {
    data () {
        return {
            page: 'home',
            active: true
        }
    },
    watch: {
        '$route.name': {
            immediate: true,
            handler (val) {
              this.actualPage(val)
            }
        }
    },
    methods: {
        actualPage (page) {
            this.page = page
        }
    }
}
</script>

<style lang="scss" scoped>
.navbar {
    height: 63px;
    background: #fff;
    justify-content: space-between;

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
    min-width: 285px !important;
    min-height: 138px !important;
    border: none ;
    border-radius: 0px !important;

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
</style>
