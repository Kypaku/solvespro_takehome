<template>
    <div class="block">
        {{item.id}}
        <textarea v-model="text"/>
        <img v-if="item.type === 'image'" :src="item.data.imgSrc"/>
        <v-btn @click="del">X</v-btn>
    </div>
</template>

<script lang='ts'>
	import {mapMutations} from 'vuex'
    import { Vue } from 'vue-property-decorator'

    export default Vue.extend({
        props: {
            item: Object
        },
        components: {

        },
        data () {
            return {
                
            }
        },
        computed: {
			text: {
                get(){
                    return this.item.data.text
                },
                set(newVal){
                    this.EDIT_BLOCK({id: this.item.id, data: {text: newVal}})
                }
            },

        },
		methods: {
            ...mapMutations(['DEL_BLOCK', 'EDIT_BLOCK']),
			del (){
                this.DEL_BLOCK(this.item.id)
			},

        },
    })

    </script>

<style lang="scss" scoped>

</style>
