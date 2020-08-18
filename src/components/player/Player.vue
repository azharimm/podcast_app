<template>
    <div class="player">
        <div class="player__header">
            <span>Now Playing</span>: Podcast Title
        </div>
        <audio controls autoplay ref="player" class="player__audio"></audio>
    </div>
</template>

<script>
export default {
    
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