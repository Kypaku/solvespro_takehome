<template>
    <div class="add-text">
        <textarea v-model="text"/>
    </div>
</template>

<script lang='ts'>
    import { Vue } from 'vue-property-decorator'

    export default Vue.extend({
        components: {

        },
        data() {
            return {
                text: ''
            }
        },
        computed: {

        },
        methods: {

        },
        created() {
            this.$emit('setBlock', {type: 'text', data: {text: this.text}})
        },
    })

    </script>

<style lang="scss" scoped>

</style>
