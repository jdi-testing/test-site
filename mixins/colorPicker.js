export default {
    data () {
        return {
          picker: null,
          mode: 'rgba',
        }
    },
    methods: {
        checkInput(value){
            // eslint-disable-next-line no-constant-condition
            if(this.mode === 'rgba' || 'hsla') {
                let valueMode = value[this.mode];
                for(let val in valueMode) {
                    if(valueMode[val] > 255) {
                        valueMode[val] = 255;
                    } else if(valueMode[val] < 0) {
                        valueMode[val] = 0;
                    }
                }
            }
            this.picker = value;
        },
        updateMode(val){
            this.mode = val;
        }
    }
}