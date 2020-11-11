<template>
    <div class="add-text">
        <v-textarea v-model="text" solo @input="setBlock(text)" />
    </div>
</template>

<script lang='ts'>
    import { Vue } from 'vue-property-decorator'
    import { PropType } from 'vue'
    import Block from '~/types/block'

    export default Vue.extend({
        components: {

        },
        props: {
            item: Object as PropType<Block>,
        },
        data () {
            return {
                text: this.item ? this.item.data.text : ''
            }
        },
        computed: {

        },
        methods: {
            setBlock (text: string) {
                this.$emit('setBlock', { type: 'text', data: { text } })
            }
        },
        created () {
            !this.item && this.setBlock(this.text)
        },
    })
</script>

<style lang="scss" scoped>
    .add-text{
        textarea{
           width: 100%;
        }
    }
</style>
