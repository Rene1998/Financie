<template>
    <div>
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
        <div class="row">
            <div class="col">
                <div class="card d-flex align-items-center flex-column text-center">
                    <div class="card-body d-flex align-items-center flex-column">
                        <img class="category-card mt-4" :src="require(`./assets/${img}`)">
                        <h4 class="card-title d-flex align-items-center m-2">
                            {{ title }}
                        </h4>
                        <p class="card-text mt-3 height">
                            {{ desc }}
                        </p>
                        <a :href="link">
                            Prečítať viac
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        desc: String,
        img: String,
        link: String
    }
}
</script>

<style lang="scss" scoped>
@import '../../../_theme/index.scss';
.card {
    min-height: 280px;
    background: #ffffff;
    box-shadow: 0px 4px 20px rgba(177, 177, 177, 0.15);

    &:hover{
        background: #FFFFFF;
        box-shadow: 0px 4px 40px rgba(177, 177, 177, 0.5);
        border-bottom: 6px solid #1eaee1;
    }

    .category-card{
        max-width: 34px;
        max-height: 34px;
    }

    .card-title {
        font-size: 18px;
        font-weight: 700;
        min-height: 45px;
    }

    .card-text {
        font-weight: 400;
        font-size: 14px;
        min-height: 60px;
    }

    a {
        cursor: pointer;
        text-decoration: none;
        font-size: 14px;
        color: #1EAEE1;
    }
}

.height {
    min-height: 50px;
}

@media (max-width:800px) {
    .card {
        max-width: 20rem !important;
        height: 300px !important;
        margin: auto;
    }
}
</style>
