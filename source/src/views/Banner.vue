<template>
    <div class="left-banner">
        <div></div>
        <div class="info">
            <router-link tag="div" :to="{ name: 'about' }"></router-link>
            <router-link tag="div" :to="{ name: 'home' }">Lin's Notes</router-link>
            <div>年华易老，勿忘初心</div>
            <ul class="banner-menus">
                <router-link class="article" tag="li" :to="{ name: 'home' }"></router-link>
                <router-link class="sentence" tag="li" :to="{ name: 'sentences' }"></router-link>
                <router-link class="collect" tag="li" :to="{ name: 'collect' }"></router-link>
                <router-link class="about" tag="li" :to="{ name: 'about' }"></router-link>
            </ul>
        </div>
        <div>@ 2018 zhangjialin</div>
    </div>
</template>