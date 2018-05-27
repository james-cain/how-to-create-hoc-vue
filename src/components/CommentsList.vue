<template>
    <ul>
        <li v-for="(comment, index) in data" :key="index">{{comment}}</li>
    </ul>
</template>

<script>
export default {
    props: {
        data: [Array, Object],
        id: 1,
    },
};
</script>
