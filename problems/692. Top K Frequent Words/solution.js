/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
    let listWords = []
    let listTimes = []
    words.forEach((value) => {
        let index = listWords.indexOf(value)
        if (index != -1) {
            listTimes[index] += 1
        } else {
            listWords.push(value)
            listTimes.push(1)
        }
    })
    for (let i in listWords) {
        listWords[i] += "," + listTimes[i]
    }
    listWords.sort((a, b) => {
        let value_a = a.split(',')[0]
        let times_a = a.split(',')[1]
        let value_b = b.split(',')[0]
        let times_b = b.split(',')[1]
        if (parseInt(times_a) > parseInt(times_b)) {
            return -1
        } else if (parseInt(times_a) < parseInt(times_b)) {
            return 1
        } else {
            return value_a > value_b ? 1 : -1
        }
    })
    let list = listWords.slice(0,k)
    for(let i in list){
        list[i]= list[i].split(",")[0]
    }
    return list
};
module.exports = topKFrequent