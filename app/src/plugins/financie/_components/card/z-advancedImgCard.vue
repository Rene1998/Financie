<<<<<<< Updated upstream
=======
<template>
    <div>
        <b-card v-for="todo in todos" :key="todo.id"
                    title="Nemam penaze"
                    img-src="https://picsum.photos/600/300/?image=25"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2"
                >
                    <b-card-text >
                      <h1> {{todo.title}} </h1>
                    </b-card-text>
                    
                    <b-card-link class="inline borden-down">
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


                     <b-card-link class="inline border-top">
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

                     <b-card-link class="inline border-top">
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
<script>

import axios from 'axios';

export default {
    name: 'pre-skoly',
    data : function(){
        return{
            todos: []
        }
    },

    mounted: function(){

         var _self = this;

        axios.get('http://localhost:8081/api/todos').then(function(response){
            _self.todos = response.data;

        })

    }
}
</script>


<style lang = "scss" scoped>
.card {
    border: none;
    width: 380px;
    
}

p{

font-size: 14px;
line-height: 24px;
display: flex;
align-items: center;
color: #192949;
}

.card-img-top{
    border-radius: 4px;
}

.inline{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

a{
    color: #D1D4D8;;
}

a:hover{
    color: #1eaee1;;
}

.pozition{
    display: flex;
    align-items: center;
    justify-content: center;
}

.btn{
    width: 223px;
    height: 59.47px;
    background: #1EAEE1;
    border-radius: 5px;
}

.card-body{
    padding-left: 0px;
}
</style>
>>>>>>> Stashed changes
