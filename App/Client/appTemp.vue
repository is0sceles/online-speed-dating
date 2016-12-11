<template>
<div class="message">
 <button v-on:click.prevent="TESTpublish" type="submit" class="btn btn-primary btn-block">START</button>
 <button v-on:click.prevent="TESTpublash" type="submit" class="btn btn-primary btn-block">SET THAT QUAN</button>
    {{ msg }}
</div>
</template>

<style>
    .message {
        color: #fff;
        margin-left: 20px;
        font-weight: lighter;
        background: #8dafa5;
        padding-left: 20px;
        font-size: 42px;
    }
</style>