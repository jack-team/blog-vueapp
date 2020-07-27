<template>
    <div class="home">
        <div>{{reload}}</div>
        <img alt="Vue logo" src="../assets/logo.png" v-test>
    </div>
</template>

<script lang="ts">
    import {
        Vue,
        Inject,
        Component,
    } from 'vue-property-decorator';

    @Component
    class Home extends Vue {
        @Inject('reload') private reload: Function;

        private mounted() {
            console.log(this.reload);
        }
    }

    export default Home;
</script>
