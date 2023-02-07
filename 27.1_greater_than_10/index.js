function greaterThanTen(num) {
    return new Promise((res, rej) => {
        if (num > 10) {
            res("resolved " + num)
        } else {
            rej("rejected " + num)
        }
    })
}


greaterThanTen(5).then(res => { console.log(res); }).catch(err => { console.log(err); })
greaterThanTen(19).then(res => { console.log(res); }).catch(err => { console.log(err); })