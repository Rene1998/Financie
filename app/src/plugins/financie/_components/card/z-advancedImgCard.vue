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
                    <b-card-text>
                      Prejdeme si investovanie od zakladov az po otvorenie vlastneho uctu...
                    </b-card-text>
                    
                    <b-card-link class="inline d-flex justify-content-between align-items-center">
                        <b-card-text>ahoj</b-card-text>

                        <b-card-link>
                            <a href="#" class="card-link">
                                <b-icon icon="download"></b-icon>
                            </a>
                            <a href="#" class="card-link">
                                <b-icon icon="eye"></b-icon>
                            </a>
                        </b-card-link>
                        
                    </b-card-link>


                     <b-card-link class="inline border-top d-flex justify-content-between align-items-center">
                        <b-card-text>ahoj</b-card-text>

                        <b-card-link>
                            <a href="#" class="card-link">
                                <b-icon icon="download"></b-icon>
                            </a>
                            <a href="#" class="card-link">
                                <b-icon icon="eye"></b-icon>
                            </a>
                        </b-card-link>
                        
                    </b-card-link>
                     <b-card-link class="inline border-top d-flex justify-content-between align-items-center">
                        <b-card-text>ahoj</b-card-text>

                        <b-card-link>
                            <a href="#" class="card-link">
                                <b-icon icon="play-circle"></b-icon>
                            </a>
                        </b-card-link>

                    </b-card-link>
                    
                </b-card>
       
       
    </div>
</template>


<style lang = "scss" scoped>
.card {
    width: 380px;
}

.b-card-link{
    line-height: 24px;
}

p {
    font-size: 14px;
    display: flex;
    color: #192949;
    align-items: flex-end;
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
    padding-left: 0px;
    padding-right: 0px;
}


</style>