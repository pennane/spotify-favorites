<template>
    <div class="tabs">
        <div :class="{ 'tabs--header': true, toggle, sticky }">
            <div
                v-for="(tab, i) in tabs"
                :key="tab.title + '-' + i"
                @click="selectTab(i)"
                :class="{ 'tab-selected': i == currentTabIndex, toggle, 'tab-selector': true }"
            >
                {{ tab.title }}
            </div>
        </div>
        <div :class="{ 'tabs--content': true, toggle }">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentTabIndex: 0,
            tabs: []
        }
    },
    props: {
        toggle: Boolean,
        sticky: Boolean
    },
    methods: {
        selectTab(i) {
            this.currentTabIndex = i
            this.tabs.forEach((tab, index) => {
                tab.isActive = index === i
                tab.current = i
            })
        }
    },
    created() {
        this.tabs = this.$children
    },
    mounted() {
        this.selectTab(0)
    }
}
</script>

<style lang="scss">
$corner: 1rem;

%corner-round-overlay {
    content: '';
    z-index: 2;
    width: 2 * $corner;
    height: 2 * $corner;
    position: absolute;
    background: var(--bg-color);
    bottom: 0;
    transition: all 0.3s;
}

%corner-round-behind {
    content: '';
    z-index: 1;
    width: 2 * $corner;
    height: 2 * $corner;
    position: absolute;
    background: var(--container-color);
    bottom: 0;
}

.tabs {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1em 0.15em;
    color: black;

    &--content {
        &.toggle {
            background-color: var(--container-color);
            background: linear-gradient(180deg, var(--container-color), var(--container-fade));
            border-radius: 1rem 1rem;
            padding-top: 1em;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.16);
        }
    }

    &--header {
        display: flex;
        flex-direction: row;
        justify-content: center;

        &.sticky {
            position: sticky;
            top: 0;
        }

        & > div {
            padding: 15px 30px;
            margin: 0;
            display: inline-block;
            cursor: pointer;
            font-weight: 300;
            width: 105px;
            text-align: center;
        }

        & > .tab-selector {
            position: relative;
            color: var(--text-secondary);
            white-space: nowrap;
            &:nth-child(1).toggle {
                &::before {
                    @extend %corner-round-behind;
                    left: unset;
                    right: 0px;
                }
                &::after {
                    @extend %corner-round-overlay;
                    left: unset;
                    right: 0px;
                    border-radius: 0 0 $corner 0;
                }
                &.tab-selected {
                    &::before {
                        right: unset;
                        left: -2 * $corner;
                    }
                    &::after {
                        right: unset;
                        left: -2 * $corner;
                        border-radius: 0 0 $corner 0;
                    }
                }
            }
            &:nth-child(2).toggle {
                &::before {
                    @extend %corner-round-behind;
                    right: unset;
                    left: 0px;
                }
                &::after {
                    @extend %corner-round-overlay;
                    right: unset;
                    left: 0px;
                    border-radius: 0 0 0 $corner;
                }
                &.tab-selected {
                    &::before {
                        left: unset;
                        right: -2 * $corner;
                    }
                    &::after {
                        left: unset;
                        right: -2 * $corner;
                        border-radius: 0 0 0 $corner;
                    }
                }
            }

            &.tab-selected {
                font-weight: bold;
                color: var(--text-primary);
                &.toggle {
                    background: var(--container-color);
                    border-radius: $corner $corner 0 0;
                    position: relative;
                }
            }
            &.toggle {
                font-weight: bold;
            }
        }
    }
}

@media screen and (max-width: 700px) {
    .tabs--header > div {
        width: 60px;
        padding: 11px 0px;
        text-align: center;
        width: 25vw;
    }

    .toggle.tabs--header > div {
        width: 29vw;
        padding: 14px 5px;
    }
}
</style>
