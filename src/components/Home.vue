<template>
    <div>
        <transition-group name="fade">
            <simple :key="1"></simple>
            <simple :key="2"></simple>
            <simple :key="3"></simple>
        </transition-group>
        <a href="#" class="load-more">Load older podcasts</a>
    </div>
</template>

<script>
import Simple from './podcasts/Simple'
export default {
    components: {
        Simple
    },
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