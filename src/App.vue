<template>
    <div class="app-container">
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
    import {
        Vue,
        Provide,
        Component,
    } from 'vue-property-decorator';

    @Component({
        components: {},
    })
    export default class App extends Vue {
        @Provide('reload')
        private reload() {
            return true;
        };

        private mounted() {

        }
    }
</script>

<style lang="scss">

    .app-container {

    }

</style>
