<template>
    <CustomListLayout v-if="$pagination"/>
    <Content class="page" v-else/>
</template>