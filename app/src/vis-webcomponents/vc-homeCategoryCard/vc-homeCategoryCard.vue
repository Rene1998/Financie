<template>
    <div>
        <div class="card d-flex align-items-center flex-column text-center">
            <div class="card-body d-flex align-items-center flex-column">
                <img class="category-card mt-3" :src="cardIcon"/>
                <h4 class="card-title mt-3">
                    {{ card.title }}
                </h4>
            </div>
        </div>
    </div>
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
    cursor: pointer;
    background: #ffffff;
    box-shadow: 0px 4px 20px rgba(177, 177, 177, 0.15);
    border-bottom: 6px solid transparent;

    &:hover {
        border-bottom: 6px solid #1eaee1;
        border-radius: 4px;
        .b-icon {
          color: #1eaee1;
        }
    }
    &:focus {
        border-bottom: 6px solid #1eaee1;
        border-radius: 4px;
        .b-icon {
          color: #1eaee1;
        }
    }
}
.card-title {
    font-size: 18px;
    font-weight: 400;
}
@media (max-width:800px) {
    .card {
        max-width: 17rem !important;
        margin: auto;
    }
}
</style>
