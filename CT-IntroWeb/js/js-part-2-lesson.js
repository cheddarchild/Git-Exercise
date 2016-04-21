// bouncer exercise

var age = 21
var time = 9

if (time >= 10) {

  if (age < 18) {
    console.log('too baby!')
  }else if (age < 21) {
    console.log('no brewski for you!')
  }else {
    console.log('Drink up but!')
  }
}else {
  console.log('all welcome')
}

// looping
  //Log all numbers between -10 and 19
var count1 = -10
while (count1 <= 19) {
  console.log(count1)
  count1++
}

  //Log all even numbers between 10 and 40
var count2 = 10
while (count2 <= 40) {
  if (count2 % 2 === 0) {
    console.log(count2)
  }
  count2++
}

  //Log all odd numbers between 300 and 333
var count3 = 300
while (count3 <= 333) {
  if (count3 % 2) {
    console.log(count3)
  }
  count3++
}
  //Log all numbers divisible by 5 and 3 between 5 and 50
var count4 = 5
while (count4 <= 50) {
  if (count4 % 5 === 0 && count4 % 3 === 0) {
    console.log(count4)
  }
  count4++
}
