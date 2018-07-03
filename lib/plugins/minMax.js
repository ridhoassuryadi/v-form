const valueValidaton = {
    min: function(minLength) {
        return function(value) {
            return value.length >= minLength
        }
    },
    max: function(maxLength) {
        return function(value) {
            return value.length <= maxLength
        }
    },
}

export default valueValidaton