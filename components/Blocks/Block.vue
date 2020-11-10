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
                get(): string {
                    return (this as any).item.data.text
                },
                set(newVal) {
                    (this as any).EDIT_BLOCK({id: (this as any).item.id, data: {text: newVal}})
                }
            },

        },
		methods: {
            ...mapMutations(['DEL_BLOCK', 'EDIT_BLOCK']),
			del () {
                (this as any).DEL_BLOCK((this as any).item.id)
			},

        },
    })

    </script>

<style lang="scss" scoped>

</style>
