// Import All Validators
import pattern from './pattern'
import type from './type'


const newValidator = { ...pattern, ...type}

console.log(newValidator)


const validatorPlugin = {

    checkWithPromise: function(nilai, success, error) {
        // contoh
        const fPromise = function(nilai) {
            return new Promise(function(resolve, reject) {
                setTimeout(function() {
                    if (nilai.length > 3) {
                        reject('error')
                    }
                    resolve('sukses')
                }, 3000)
            })
        }

        fPromise(val)
            .then((v) => success('done'))
            .catch((e) => error(e))
    },

    isAsync: function() {
        return function(value, resolve, reject) {
            setTimeout(function() {
                if (value.length < 3) {
                    reject('error')
                }

                resolve('done')
            }, 3000)
        }
    },
}

export default validatorPlugin
