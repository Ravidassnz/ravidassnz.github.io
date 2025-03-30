// function myFunction() {
//   let x = document.getElementById('myMainNav')
//   if (x.className === 'mainNav') {
//     x.className += ' responsive'
//   } else {
//     x.className = 'mainNav'
//   }
// }

function myFunction() {
  var x = document.getElementById('myTopnav')
  if (x.className === 'topnav') {
    x.className += ' responsive'
  } else {
    x.className = 'topnav'
  }
}
var factPlaceholder = document.getElementById('brain-fact')
var showFact = document.getElementById('show-fact')

/* Facts about brain stuff */

var brainFacts = [
  '60% of the brain is fat',
  'Brain development starts at the back and finishes at the front by 25y',
  'Your eyes see things upside down, but the brain corrects it',
  'Brains run on about 20 watts of power (like a light bulb)',
  "The brain can't feel pain",
  'The average brain is 3 pounds (or 1 medium Snapper)',
]

var factNumber

function randomFact() {
  return brainFacts[factNumber]
}

showFact.addEventListener('click', function () {
  factNumber = Math.floor(Math.random() * 6)
  factPlaceholder.textContent = randomFact()
})
