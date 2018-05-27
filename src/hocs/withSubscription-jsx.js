import DataSource from '../store/source';
import Vue from 'vue';

/* eslint no-console: 0 */
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
                scopedSlots: {
                    default: props => createElement(
                                        'ul',
                                        props.allData.map((item, index) => createElement('li', {
                                            on: {
                                                click: this.selectedChange.bind(this, index + 1)
                                            },
                                            style: {
                                                color: 'red',
                                            }
                                        }, item))),
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
            selectedChange(id) {
                this.fetchData = selectData(DataSource, {
                    id,
                });
            },
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
