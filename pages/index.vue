<template>
    <v-row justify="center" align="center">
        <button @click="act = true">Act</button>
        <ApolloQuery
            :query="query"
            :variables="{  }"
            v-if="act"
        >
        <template v-slot="{ result: { loading, error, data } }">
            <!-- Loading -->
            <div v-if="loading" class="loading apollo">Loading...</div>

            <!-- Error -->
            <div v-else-if="error" class="error apollo">An error occurred</div>

            <!-- Result -->
            <div v-else-if="data" class="result apollo">{{ data }}</div>

            <!-- No result -->
            <div v-else class="no-result apollo">No result :(</div>
        </template>
        </ApolloQuery>
    </v-row>
</template>

<script>

    export default {
        data() {
            return {
                act : false,
                query: gql => gql`
                    query{
                        movies{
                            poster
                        }
                    }`
            }
        },
        components: {

        }
    }
</script>
