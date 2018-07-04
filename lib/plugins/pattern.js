const patternValidation = {
    isMatchingRegExp: function(pattern) {
        return function(value, success, error) {
            const regex = RegExp(pattern)
            if (regex.test(value)){
                success('done')
            }

            error('error')
        }
    },
}

export default patternValidation