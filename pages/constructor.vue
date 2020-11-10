
<template>
    <div class="constructor">
        <v-btn @click="add">+</v-btn>
        <div class="blocks">
            <draggable v-model="blocks" group="people" @start="drag=true" @end="drag=false">
                <transition-group>
                    <Block v-for="block in blocks" :key="block.id" :item="block"/>
                </transition-group>
            </draggable>
        </div>
    </div>
</template>

<script lang='ts'>
	import {mapMutations, mapGetters} from 'vuex'
    import { Vue } from 'vue-property-decorator'
    import Block from './../components/Blocks/Block.vue'
    import draggable from 'vuedraggable'

    export default Vue.extend({
        components: {
            Block,
            draggable,
		
        },
        data () {
            return {
                drag: false
            }
        },
        computed: {
            ...mapGetters(['blocks']),
        },
		methods: {
            ...mapMutations(['ADD_BLOCK']),
			add () {
                this.ADD_BLOCK({ type: 'text', data: { text: 'aaa kvndsk n kfnkd kfd kldf kfd' } })
			},
        },
    })

    </script>

<style lang="scss" scoped>

</style>
