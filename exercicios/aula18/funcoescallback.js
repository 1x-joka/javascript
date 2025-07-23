function fn(name) {
    console.log(name)
}

function person(callback) {
    let name = 'Alexandre'
    callback(name)
}
person(fn)