const listeners = {};
const comments = {
    1: ['comment one', 'comment two', 'comment three', 'comment four', 'comment five'],
    2: ['pwa is good one', 'pwa is good  two', 'pwa is good  three', 'pwa is good  four', 'pwa is good  five']
};
const blogPosts = {
    1: 'learn high-order component of vuejs.',
    2: 'learn progress web app.'
};

// setInterval(() => {
//     comments.push(`fresh comment ${comments.length + 1}`);
//     Object.keys(blogPosts).forEach(id => {
//         blogPosts[id] = `${blogPosts[id]} ${comments.length}`
//     });
// }, 5000);

export default {
    getComments(id) {
        return comments[id];
    },
    getBlogPost(id) {
        return blogPosts[id];
    },
    getBlogList() {
        let blogArr = [];
        Object.keys(blogPosts).forEach(e => blogArr.push(`${e}-${blogPosts[e]}`));
        return blogArr;
    },
    addChangeListener(listener) {
        const intervalId = setInterval(() => {
            listener();
        }, 1000);
        listeners[listener] = intervalId;
    },
    removeChangeListener(listener) {
        clearInterval(listeners[listener]);
    }
};
