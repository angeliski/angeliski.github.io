<template>
    <CustomListLayout v-if="$pagination"/>
    <Content v-else/>
</template>