import { h, defineComponent } from 'vue'

import useSpinner, { useSpinnerProps } from './use-spinner'

export default defineComponent({
  name: 'VcSpinner',

  props: {
    ...useSpinnerProps,

    thickness: {
      type: Number,
      default: 5
    }
  },

  setup(props) {
    const { cSize, classes } = useSpinner(props)

    return () =>
      h(
        'svg',
        {
          class: classes.value + ' vc-spinner-mat',
          width: cSize.value,
          height: cSize.value,
          viewBox: '25 25 50 50'
        },
        [
          h('circle', {
            class: 'path',
            cx: '50',
            cy: '50',
            r: '20',
            fill: 'none',
            stroke: 'currentColor',
            'stroke-width': props.thickness,
            'stroke-miterlimit': '10'
          })
        ]
      )
  }
})
