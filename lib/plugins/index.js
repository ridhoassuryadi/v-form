// Import All Validators
import pattern from './pattern'
import type from './type'
import minMax from './minMax'

const validatorPlugin = {

    checkWithPromise: function(nilai, success, error) {
        // contoh
        const fPromise = function(nilai) {
            return new Promise(function(resolve, reject) {
                setTimeout(function() {
                    console.log(nilai.length, 'lenght')
                    if (nilai.length > 3) {
                        resolve('sukses')
                    }
                    reject('error')
                }, 1000)
            })
        }

        fPromise(nilai)
            .then((v) => success('done'))
            .catch((e) => error(e))
    },

    isAsync: function() {
        return function(value, resolve, reject) {
            console.log(value, 'value isAsync')
            setTimeout(function() {
                if (value.length < 10) {
                    resolve('done')
                }
                reject('error')

            }, 3000)
        }
    },
    ...pattern,
    ...type,
    ...minMax
}


export default validatorPlugin
