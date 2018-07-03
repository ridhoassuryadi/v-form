import plugins from './plugins'

/**
 * async {true}
 * @param {Array of Object} validations get from schema
 * @param {Functions} doWhileCheck
 * @param {val}
 */
const getValidation = async function(
    { validations, doWhileCheck },
    val,
    resolve,
    reject
) {
    for (var i = 0; i < validations.length; i++) {
        // Destructuring to get rule and error Message
        let { rule, errMsg } = validations[i]

        /**
         * Convert Sync Function, Async Function and Promise to Promise
         * why must be to convert,
         * because like this we must not set option { async : true } or another option
         */
        let RESULT_VALIDATOR = await convertToPromise((resolve, reject) =>
            rule('te', resolve, reject)
        )

        // IF RES
        if (RESULT_VALIDATOR === 'error') {
            reject(errMsg)
            break
        }
    }
}


export { plugins }
