
exports.reverseString =(str)=>{

    let reversed = str.split(' ').reverse().join(' ')
    console.log(reversed)
    return reversed
}