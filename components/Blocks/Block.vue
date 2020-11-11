<template>
    <div class="block" :class="{active}">
        <div class="d-flex block-header mt-2">
            <v-spacer/>
            <v-btn fab text x-small @click="del"><v-icon>mdi-close</v-icon></v-btn>
        </div>
        <img class="image" v-if="item.type === 'image'" :src="item.data.imgSrc" />
        <template v-else>
            <div class="text">{{ item.data.text }}</div>
        </template>
        <div class="d-flex block-footer mb-2">
            <v-spacer/>
            <v-btn fab x-small @click="$router.push('/editor/edit/' + item.id)"><v-icon>mdi-pencil</v-icon></v-btn>
        </div>
    </div>
</template>

<script lang='ts'>
    import { mapMutations } from 'vuex'
    import { Vue } from 'vue-property-decorator'
    import { PropType } from 'vue'
    import Block from '~/types/block'

    export default Vue.extend({
        props: {
            item: Object as PropType<Block>,
            active: Boolean,
        },
        components: {

        },
        data () {
            return {
                text: this.item.data.text,
            }
        },
        computed: {

        },
		methods: {
            ...mapMutations(['DEL_BLOCK', 'EDIT_BLOCK']),
			del () {
                this.DEL_BLOCK(this.item.id)
			},

        },
    })

    </script>

<style lang="scss" scoped>
	.block{
		padding: 0px 10px;
        border: 1px solid transparent;
        &.active{
            border-color: lightgray;
            .block-header, .block-footer{
                visibility: visible;
            }
        }
        .block-header, .block-footer{
            visibility: hidden;
        }
        &.sortable-ghost{
            opacity: 0;
        }
	}
	.image{
		width: 100%;
	}

</style>
