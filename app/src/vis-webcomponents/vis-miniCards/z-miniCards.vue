<template>
    <b-row>
      <b-col>
        <b-card class="d-flex align-items-center flex-column text-center">
          <div class="d-flex align-items-center flex-column">
            <b-img class="category-card mt-4" :src="cardIcon"/>
            <b-card-title class="d-flex align-items-center m-2">
                {{ card.title }}
            </b-card-title>
            <b-card-text class="mt-3 height">
                {{ card.text }}
            </b-card-text>
            <router-link :to="'/osobne-financie/clanky/' + card.link">
                Prečítať viac
            </router-link>
          </div>
        </b-card>
      </b-col>
    </b-row>
</template>

<script>
export default {
    props: {
        card: {
            type: Object,
            required: true
        }
    },
    computed: {
        cardIcon () {
            return require(`./assets/${this.card.icon}`)
        }
    }
}
</script>

<style lang="scss" scoped>
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
        max-width: 17rem !important;
        margin: auto;
    }
}
</style>
