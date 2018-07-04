const typeValidators = {
    isNumber: function() {
        return function (value, success, error) {  
            const num = Number(value)
            if (
                typeof num === 'number' &&
                !isNaN(num) &&
                typeof value !== 'boolean'
            ) {
                success('done')
            }
    
            error('error')
        }
    },
    isFunction: function(functionToCheck) {
        return (
            functionToCheck &&
            {}.toString.call(functionToCheck) === '[object Function]'
        )
    },
}

export default typeValidators