<template>
    <div>
        <h3>Blog Post</h3>
        <slot :allData="allData"></slot>
        <br/>
        <p>{{data}}</p>
    </div>
</template>

<script>
export default {
    props: {
        allData: [Array, Object],
        data: '',
        id: 1,
    },
};
</script>
