<template>
    <div class="player">
        <div class="player__header">
            <span>Now Playing</span>: {{podcast.title}}
        </div>
        <audio controls autoplay ref="player" class="player__audio">
            <source type="audio/mp3" v-if="podcast.files.mp3" :src="podcast.files.mp3" />
            <source type="audio/ogg" v-if="podcast.files.ogg" :src="podcast.files.ogg" />
            Your browser does not support audio element
        </audio>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
    props: ['podcast'],
    watch: {
        podcast() {
            setTimeout(() => {
                this.$refs.player.load();
            }, 100);
        }
    },
    methods: {
        ...mapActions({
            'setPlaying':'player/setPlaying'
        })
    },
    mounted() {
        this.$refs.player.addEventListener('ended', () => {
            this.setPlaying(null)
        })
    }
}
</script>

<style lang="scss">
    .player {
        width: 100%;

        &__header {
            font-weight: 500;
            margin-bottom: 20px;

            span {
                font-weight: 800;
            }
        }

        &__audio {
            width: 100%;
        }
    }

</style>