import DataSource from '../store/source';
import Vue from 'vue';

const withSubscription = (component, selectData, allData) => {
    const inheriteProps = component.props || [];

    return Vue.component('withSubscription', {
        render(createElement) {
            return createElement(component, {
                props: {
                    // ...propsData,
                    allData,
                    data: this.fetchData,
                },
                scopeSlots: {
                    default: props => createElement('span', props.allData),
                },
            });
        },
        props: {
            selectData,
            allData,
        },
        data() {
            return {
                fetchData: null,
            };
        },
        methods: {
            handleChange() {
                this.fetchData = selectData(DataSource, inheriteProps);
            },
        },
        mounted() {
            DataSource.addChangeListener(this.handleChange);
        },
        beforeDestory() {
            DataSource.removeChangeListener(this.handleChange);
        },
    });
};

export default withSubscription;
