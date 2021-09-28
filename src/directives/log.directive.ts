import { Directive, FunctionDirective } from "vue"

export const log: Directive = {
    created(el: HTMLElement, binding, vnode) {
        console.log('v-log :>> ', binding.value)
    },
    updated(el: HTMLElement, binding, vnode) {
        console.log('v-log :>> ', binding.value)
    },
}