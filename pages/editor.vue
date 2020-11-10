
<template>
    <div class="editor">
        <AddBlock/>
        <div class="blocks">
            <draggable v-model="blocks" group="people" @start="drag=true" @end="drag=false">
                <transition-group>
                    <Block v-for="block in blocks" :key="block.id" :item="block" />
                </transition-group>
            </draggable>
        </div>
    </div>
</template>

<script lang='ts'>
    import { mapMutations, mapGetters } from 'vuex'
    import { Vue } from 'vue-property-decorator'
    import draggable from 'vuedraggable'
    import Block from './../components/Blocks/Block.vue'
	import AddBlock from './../components/AddBlock/index.vue'

    export default Vue.extend({
        components: {
        	AddBlock,
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
