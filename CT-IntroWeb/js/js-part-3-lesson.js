
// How many day have you been alive
function getDaysFromYears (years) {
  var days

  if (years) {
    days = 365 * years
  }

  return days

}

// How many hours have you been sleeping
function getSleepingHoursFromDays (days) {
  var sleepingHours

  if (days) {
    sleepingHours = days * 8
  }

  return sleepingHours
}

// How many days have you been sleeping
function getDaysAsleep (sleepingHours) {
  var daysSleeping

  if (sleepingHours) {
    daysSleeping = sleepingHours / 24
  }

  return daysSleeping
}

//How many year you have been sleeping
function getYearsAsleep (daysIveSlept) {
  var yearsSleeping

  if (daysIveSlept) {
    yearsSleeping = daysIveSlept / 365
  }

  return yearsSleeping
}

//Variables and calls to actions
var yearsAlive = prompt('How old are you')

var daysLiving = getDaysFromYears(yearsAlive)
console.log('I have been alive for ', daysLiving)

var hoursSleeping = getSleepingHoursFromDays(daysLiving)
console.log('Hours I have been sleeping', hoursSleeping)

var daysIveSlept = getDaysAsleep(hoursSleeping)
console.log('Days I Have Been Asleep', daysIveSlept)

var yearsSleeping = getYearsAsleep(daysIveSlept)
console.log ('Years I Have Been Asleep', yearsSleeping)
