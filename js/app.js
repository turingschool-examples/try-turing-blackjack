const $play = $('#play')
const $stayOrHit = $('#stay-or-hit')
const $result = $('#result')
const $hit = $('#hit')
const $stay = $('#stay')

$play.on('click', (e) => {
  e.preventDefault()
  let bet = $('#bet').val()
  bet ? play(bet) : play()
})

$hit.on('click', (e) => {
  e.preventDefault()
  hit()
})

$stay.on('click', (e) => {
  e.preventDefault()
  stay()
})
