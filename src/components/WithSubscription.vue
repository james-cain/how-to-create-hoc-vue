<template>
    <div>
        <slot :data="fetchData"></slot>
    </div>
</template>

<script>
import DataSource from '../store/source';

export default {
    data() {
        return {
            fetchData: null
        }
    },
    props: {
        selectData: {
            type: Function,
            required: true
        }
    },
    methods: {
        handleChange() {
            this.fetchData = this.selectData(DataSource, this.$props);
        }
    },
    mounted() {
        DataSource.addChangeListener(this.handleChange);
    }
}
</script>

