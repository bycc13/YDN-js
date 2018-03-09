var extensions = [
  { firstName: 'fdgfh', lastName: '45654654', ext: '55', extType: 'Dept' },
  { firstName: 'fdgfh', lastName: '45654654', ext: '55', extType: 'DigitalUser' },
  { firstName: 'fdgfh', lastName: '45654654', ext: '55', extType: 'AO' },
  { firstName: 'gjhhgj', lastName: 'ddsgds', ext: '555', extType: '22' },
  { firstName: 'xhgjghjxx', lastName: '45654654', ext: '555', extType: 'FaxUser' },
  { firstName: 'fdgfh', lastName: 'ggs', ext: '555', extType: 'VirtualUser' }
]

// question 1
// let arrProperty = ['ext', 'lastName', 'firstName'],
//     length = arrProperty.length - 1
// extensions.sort((a, b) => {
//   function fn(n) {
//     if (n < 0) {
//       return null
//     }
//     if (compare(n) === 0) {
//       return compare(n - 1)
//     } else {
//       return compare(n)
//     }
//   }
//   function compare(n) {
//     let name = arrProperty[n]
//     return a[name].localeCompare(b[name])
//   }
//   return fn(length)
// });

// console.log(extensions)



// question 2
// function compareExtType (a, b) {
//   let extTypeList = ['DigitalUser', 'VirtualUser','FaxUser', 'AO', 'Dept'],
//     idx1 = extTypeList.indexOf(a.extType),
//     idx2 = extTypeList.indexOf(b.extType)
//   return idx1.toString().localeCompare(idx2.toString())
// }
// extensions.sort((a, b) => {
//   return compareExtType(a, b)
// })
// console.log(extensions)

// question 3
// saleItems is an Array has each item has such format:
// {
// month: n, //[1-12],
// date: n, //[1-31],
// transationId: "xxx",
// salePrice: number
// }
var saleItems = [
  { month: '2', date: '3', transationId: '1', salePrice: '10' },
  { month: '4', date: '4', transationId: '2', salePrice: '20' },
  { month: '4', date: '5', transationId: '3', salePrice: '50' },
  { month: '6', date: '6', transationId: '4', salePrice: '40' },
  { month: '11', date: '7', transationId: '2', salePrice: '70' },
  { month: '8', date: '7', transationIdext: '3', salePrice: '80' }
]
class Quarter {
  getQuarterItem (saleItems) {
    let quarterItem = [],
      priceSum = []
      transactioSum = []
    saleItems.forEach((item) => {
      let quarterId = ((item) => {
        if (item.month >= 1 && item.month <= 12) {
          return Math.ceil(item.month / 3)
        } else {
          return false
        }
      })(item)
      if (quarterId !== false) {
        if (!quarterItem[quarterId]) {
          quarterItem[quarterId] = {
            quarter: quarterId,
            totalPrices: 0,
            transactionNums: 0
          }
        }
        quarterItem[quarterId].totalPrices += parseInt(item.salePrice)
        quarterItem[quarterId].transactionNums++
        return quarterItem[quarterId]
      }
    })
    return quarterItem
  }
}

function sumByQuarter(saleItems) {
  let quater = new Quarter.getQuarterItem(saleItems)
  let sumQuarter = []
  quater.forEach((item) => {
    sumQuarter.push({
      quarter: item.quarter,
      totalPrices: item.totalPrices,
      transactionNums: item.transactionNums
    })
  })
  console.log(sumQuarter)
  return sumQuarter
}
// sumByQuarter(saleItems)

function averageByQuarter(saleItems) {
  let averageQuarter = []
  sumByQuarter(saleItems).forEach((item) => {
    item.averagePrices = item.totalPrices / item.transactionNums
    averageQuarter.push({
      quarter: item.quarter,
      averagePrices: item.averagePrices,
      transactionNums: item.transactionNums
    })
    return item
  })
  return averageQuarter
}

// averageByQuarter(saleItems)
const config = {
  index : 1
}
class Sequence {
  constructor(){
    this.config = config
  }
  next () {
    let index = this.config.index++
    return index
  } 
}  
// var sequence1 = new Sequence();
// console.log(sequence1.next())
// console.log(sequence1.next() )
// var sequence2 = new Sequence();
// console.log(sequence2.next() )
// console.log(sequence2.next() )

function isNumber(data) {
  return Object.prototype.toString.call(data) === '[object Number]';
}
function createAllKeys(allKeys) {
  let arr = [];
  for (let i = 0; i < allKeys.length; i++) {
    arr.push(i);
  }
  return arr;
}
function getUnUsedKeys(allKeys, usedKeys) {
  isNumber(allKeys) ? allKeys = createAllKeys.createArray(allKeys) : ''
  return allKeys.filter((item) => {
    return usedKeys.indexOf(item) === -1;
  })
}

