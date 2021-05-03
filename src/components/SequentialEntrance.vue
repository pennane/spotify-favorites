<script>
export default {
    functional: true,
    render(createElement, { props, data, children, parent }) {
        const animate = async (children) => {
            children.forEach((child, index) => {
                if (!child.data) return
                child.data.staticStyle = {
                    opacity: 0,
                    animationFillMode: 'forwards',
                    animationDelay: 90 + index * 40 + 'ms'
                }
                child.data.staticClass += ' sequential'
            })
        }
        if (props.storeTarget) {
            const store = parent.$store
            let animationRan = store.state.animations.indexOf(props.storeTarget) !== -1
            if (!animationRan) {
                animate(children).then(() => {
                    setTimeout(() => {
                        store.commit('pushPlayedAnimation', props.storeTarget)
                    }, 1000)
                })
            }
        } else {
            animate(children)
        }
        return createElement(
            'div',
            {
                attrs: { class: props.className }
            },
            children
        )
    }
}
</script>
<style>
.sequential {
    animation: sequential;
    animation-duration: 0.7s;
}
@keyframes sequential {
    100% {
        opacity: 1;
    }
}
</style>
