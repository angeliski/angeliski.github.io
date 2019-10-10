<template>
  <div>
    <CustomListLayout v-if="$pagination"/>
    <Content v-else/>
  </div>
</template>