<template>
    <div class="podcast">
        <a href="#" class="podcast__play">
            <img src="../../assets/img/play.svg" alt="play" class="podcast__playbutton">
        </a>
        <div class="podcast__details">
            <div class="podcast__sub">2 days ago</div>
            <h1 class="podcast__header">Lorem ipsum dolor, sit amet consectetur adipisicing elit</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, aut saepe? Odit facilis dolorem reiciendis nobis sit tempora? Voluptate adipisci tempore est ea possimus, reprehenderit fugiat aliquid odio consectetur labore!</p>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
    @import '~@/assets/scss/_variables.scss';

    .podcast {
        background-color: #fff;
        display: flex;
        min-height: 240px;
        border-radius: $global-radius;
        box-shadow: 0 5px 10px rgba(#000000, .05);
        margin-bottom: 40px;
        overflow: hidden;

        &__details {
            flex: 1;
            padding: 40px;
        }

        &__sub {
            font-weight: 500;
        }

        &__play {
            width: 15%;
            display: none;
            overflow: hidden;
            background-color: $blue;
            align-items: center;
            justify-content: center;
            border-top-left-radius: $global-radius;
            border-bottom-left-radius: $global-radius;
            transition: margin-left 180ms ease-in-out;

            &:hover {
                .podcast__playbutton {
                    transform: scale(3.5) rotate(-10deg);
                    opacity: 1;
                }
            }

            &--hidden {
                margin-left: -15%;
            }
        }

        &__playbutton {
            color: #222;
            opacity: .4;
            width: 60%;
            transition: all 180ms ease-in-out;
        }
    }

    @media only screen and (min-width: 768px) {
        .podcast__play {
            display: flex;
        }
    }
</style>