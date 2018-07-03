const typeValidators = {
    isNumber: function(value) {
        const num = Number(value)
        if (
            typeof num === 'number' &&
            !isNaN(num) &&
            typeof value !== 'boolean'
        ) {
            return true
        }

        return false
    },
    isFunction: function(functionToCheck) {
        return (
            functionToCheck &&
            {}.toString.call(functionToCheck) === '[object Function]'
        )
    },
}

export default typeValidators