const valueValidaton = {
    minLength: function(minLength) {
        return function(value, success, error) {
            if (value.length >= minLength){
                success('done')
            }

            error('error')
        }
    },
    maxLength: function(maxLength) {
        return function(value, success, error) {
            if(value.length <= maxLength){
                success('done')
            }

            error('error')
        }
    },

    minValue: function(minValue){
        return function(value, success, error){
            if(Number(value) >= minValue){
                success('done')
            }

            error('error')
        }
    },
    maxValue: function(maxValue){
        return function(value, success, error){
            console.log('maxValue')
            if(Number(value) <= maxValue){
                success('done')
            }

            error('error')
        }
    }
}

export default valueValidaton