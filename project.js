// forEach, find, filter, some, every, reduce --- lam bai tap tao phuong thuc
Array.prototype.map2 = function(callback) {
    var output =[], arrayLength = this.length;
    for(var i = 0; i < arrayLength; i ++){
        result = callback(this[i],i);
        output.push(result);
    }
    return output;
}

var courses = [
    'javascript',
    'php',
    'ruby'
]

var htmls = courses.map2(function(course){
    return `<h2>${course}</h2>`;
})

console.log(htmls.join(' '));

