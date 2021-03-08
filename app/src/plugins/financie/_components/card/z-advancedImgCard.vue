<template>
    <div>
        <b-card
                    title="Nemam penaze"
                    img-src="https://picsum.photos/600/300/?image=25"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2 border border-0  "
                >
                    <b-card-text class="d-flex align-items-end">
                      Prejdeme si investovanie od zakladov az po otvorenie vlastneho uctu...
                    </b-card-text>
                    
                    <b-card-body class="d-flex justify-content-between ">
                        <b-card-link>
                            <h6>sheesh</h6>
                        </b-card-link>

                        <b-card-link>
                            <a href="#" class="card-link">
                                <b-icon icon="download"></b-icon>
                            </a>
                            <a href="#" class="card-link">
                                <b-icon icon="eye"></b-icon>
                            </a>
                        </b-card-link>
                        
                    </b-card-body>
                    <hr class="m-0">
                     <b-card-body class="d-flex justify-content-between ">
                        <b-card-link class="m-0">
                            <h6 class="m-0">sheesh</h6>
                        </b-card-link>

                        <b-card-link>
                            <a href="#" class="card-link">
                                <b-icon icon="download"></b-icon>
                            </a>
                            <a href="#" class="card-link">
                                <b-icon icon="eye"></b-icon>
                            </a>
                        </b-card-link>
                        
                    </b-card-body>
                    <hr class="m-0">
                     <b-card-body class="d-flex justify-content-between mr-2">
                        <b-card-link>
                            <h6>sheesh</h6>
                        </b-card-link>

                        <b-card-link>
                            <a href="#" class="card-link">
                                <b-icon icon="download"></b-icon>
                            </a>

                        </b-card-link>
                        
                    </b-card-body>
                    
                </b-card>
       
       
    </div>
</template>


<style lang="scss" scoped>
.card {
    width: 363px !important;
}

.b-card-link{
    line-height: 24px;
}

p {
    font-size: 14px;
    color: #192949;
}

.card-img-top {
    border-radius: 4px;
}

a {
    color: #D1D4D8;

    &:hover {
        color: #1eaee1;
    }
}

.card-body {
    padding: 10px;
    padding-left: 0px !important;
    padding-right: 0px !important;
}

hr{
    height: 0px;
    border: 1px solid rgba(137, 137, 137, 0.2);
}

h6{
    font-size: 16px;
    line-height: 30px
    color #192949;
    font-weight: 400;
}
</style>