
<template>
    <div class="editor">
        <div class="blocks">
            <draggable v-model="sortingBlocks" @start="drag=true" @end="drag=false" :animation="200" filter=".disabled">
                <transition-group type="transition" :name="!drag ? 'flip-list' : null">
                    <Block
                        v-for="block in blocks"
                        :key="block.id"
                        :item="block"
                        :active="block.id === activeId"
                        @click.native="activeId = block.id"
                        @touchstart.native="activeId = block.id"
                        :class="{disabled: block.id !== activeId}"
                    />
                </transition-group>
            </draggable>
        </div>
        <v-btn fab color="primary" class="add-button" @click="$router.push('/editor/add')">
            <v-icon dark>mdi-plus</v-icon>
        </v-btn>
    </div>
</template>

<script lang='ts'>
    import { mapMutations, mapGetters } from 'vuex'
    import { Vue } from 'vue-property-decorator'
    import draggable from 'vuedraggable'
    import Block from '~/components/Blocks/Block.vue'
    import BlockType from '~/types/block'

    export default Vue.extend({
        components: {
            Block,
            draggable,
        },
        data () {
            return {
                drag: false,
                activeId: null,
            }
        },
        computed: {
            ...mapGetters(['blocks']),
            sortingBlocks: {
                get () : BlockType[] {
                    return this.blocks
                },
                set (newVal: BlockType[]) {
                    this.REARRANGE_BLOCKS(newVal.map(block => block.id))
                }
            }
        },
        methods: {
            ...mapMutations(['ADD_BLOCK', 'REARRANGE_BLOCKS']),
        },
        created () {

        },
    })

    </script>

<style lang="scss" scoped>
	.add-button{
		position: fixed;
        bottom: 50px;
        left: 10px;
        min-width: 36px;
	}
    .flip-list-move {
        transition: transform 0.5s;
    }
    .no-move {
        transition: transform 0s;
    }
</style>
