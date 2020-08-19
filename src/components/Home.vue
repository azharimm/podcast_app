<template>
    <div>
        <transition-group name="fade">
            <simple :key="podcast.id" v-for="podcast in podcasts" :podcast="podcast"></simple>
        </transition-group>
        <a href="#" class="load-more" v-if="page.hasMore()" @click.prevent="getMorePodcasts">Load older podcasts</a>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import Simple from './podcasts/Simple'
export default {
    components: {
        Simple
    },
    mounted() {
        this.getPodcasts();
    },
    computed: {
        ...mapGetters({
            'podcasts': 'podcasts/getPodcasts',
            'page': 'podcasts/getPage'
        })
    },
    methods: {
        ...mapActions({
            'getPodcasts': 'podcasts/getPodcasts',
            'getMorePodcasts': 'podcasts/getMorePodcasts'
        })
    }
}
</script>

<style lang="scss">
    .load-more {
        display: block;
        widows: 100%;
        padding: 20px;
        background-color: #fff;
        text-align: center;
        margin-bottom: 40px;
        color: inherit;
        text-decoration: none;
        font-weight: 500;
    }
</style>