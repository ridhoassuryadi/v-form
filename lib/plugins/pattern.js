const patternValidation = {
    isMatchingRegExp: function(pattern) {
        return function(value) {
            const regex = RegExp(pattern)
            return regex.test(value)
        }
    },
}

export default patternValidation