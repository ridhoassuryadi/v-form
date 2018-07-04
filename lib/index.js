import plugin from './plugins'


const convertToPromise = (validator) =>
  new Promise(validator)
    .then(v => v).catch(e => "error")


/**
 * async {true}
 * @param {Array of Object} validations get from schema
 * @param {Functions} doWhileCheck
 * @param {val}
 */
const getValidation = async function({ validations, doWhileCheck}, val, resolve, reject, schemaCheck) {
    const { onSuccess, onError } = schemaCheck;
    for (var i = 0; i < validations.length; i++) {
        // Destructuring to get rule and error Message
        let { rule, errMsg } = validations[i]
        /**
         * Convert Sync Function, Async Function and Promise to Promise
         * why must be to convert,
         * because like this we must not set option { async : true } or another option
         */
        let RESULT_VALIDATOR = await convertToPromise((resolve, reject) =>
            rule(val, resolve, reject)
        )
        // IF RESULT VALIDATOR
        if (RESULT_VALIDATOR === 'error') {
            onError(errMsg)
            break
        } else if(i === validations.length - 1 && RESULT_VALIDATOR === 'done') {
            onSuccess()
        }
    }
}

const validatorField = ({ schema, val }, schemaCheck) => 
  new Promise( function(resolve,reject){
    let doWhileCheck = schema.doWhileCheck || function(){}
    // Run a Functions while validator run
    doWhileCheck()
    // Destructuring
    getValidation(schema, val, resolve, reject, schemaCheck)
})


// Assign Validator and Plugin

const vForm = {
    validatorField,
    plugin
}
// window['vPlugin'] = vPlugin

module.exports = vForm