export default {
    template: `
        <button :class="{
            'border rounded px-5 py-2 ': true,
            'bg-blue-600 hover:bg-blue-700': type == 'primary',
            'bg-green-200 hover:bg-green-400': type == 'secendary',
            'bg-gray-200 hover:bg-gray-400': type == 'muted',
            'is-loading': processing
        }" :disabled="processing">
        <slot />
        </buttob>
    `,

    props: {
        type: {
            type: String,
            default: 'primary'
        },

        processing: {
            type: Boolean,
            default:false
        }
    },

    data() {
        return {
        }
    }
}