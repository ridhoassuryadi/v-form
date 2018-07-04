var delay = 3000;
var timer;

var schema = {
    title: {
        doWhileCheck: function(){
            console.log('check')
        },
        validations: [
            { rule: vForm.plugin.maxLength(10), errMsg: "Maximal 50 karakter" }
        ]
    },
    target: {
        currency: true,
        doWhileCheck: function(){
            console.log('lagi cek')
        },
        validations: [
            { rule: vForm.plugin.isNumber(), errMsg: "harus angka" },
            { rule: vForm.plugin.minValue(1000000), errMsg: "Minimal 1000000" },
            { rule: vForm.plugin.maxValue(2500000000000), errMsg: "Maximal 2500000000000" }
        ]
    },
    url: {
        validations: [
            {
                rule: vForm.plugin.isMatchingRegExp("^[A-Za-z][a-zA-Z0-9]+$"),
                errMsg: "harus diawali huruf"
            },
            {
                rule: campaignUrlCheck(),
                errMsg: "url tidak tersedia"
            }
        ]
    },
    youtubeUrl: {
        validations: [
            {
                rule: vForm.plugin.isMatchingRegExp(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/),
                errMsg: 'harus dari youtube'
            }
        ]
    },
    shortDesc: {
        validations: [
            {
                rule: vForm.plugin.maxLength(50), errMsg: 'harus dari youtube'
            }
        ]
    }
};

// var schemaCheck = {
//     onSuccess: function(){
//         console.log('sukses dong mas')
//     },
//     onError: function(err){
//         console.log(err)
//     }
// }

function schemaCheck(element){
    return {
        onSuccess: function(){
            console.log('sukses', element)
        },
        onError: function(){
            console.log('error', element)
        }
    }
}

function campaignUrlCheck(){
    return function(url, success, error){
        $.get("https://api.kitabisa.com/v2/misc/check-campaign-url-availability?short_url="+url, function(result){
            if(result.available){
                success('done')
            } else {
                error('error')
            }
        })
    }
}

function validate(value, currSchema, element) { 
    console.log(currSchema, 'ele')
    vForm.validatorField({schema: schema[currSchema] , val: value}, schemaCheck(element))
}

$('#form').on('keyup', 'input', function() {
    var currSchema = $(this).data('validation')
    var value = schema[currSchema].currency ? $(this).val().replace(/\./g, '') : $(this).val()
    clearTimeout(timer)
    timer = setTimeout(() => {
        validate(value, currSchema, $(this))
    }, delay);
})


$('#form').on('keydown', 'input', function() {
    clearTimeout(timer)
})