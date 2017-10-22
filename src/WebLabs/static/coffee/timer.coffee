month = ['Январь', 'Февраль', 'Март', 'Апрель',
  'Май', 'Июнь', 'Июль', 'Август',
  'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']

id = "dateContainer"

updateDate = ->
  $ getDateContainer()
  .text getDate()

#  setInterval(updateDate, 1000);

getDate = ->
  now = new Date()
  "#{now.getHours()}ч #{month[now.getMonth()]} #{now.getYear() % 100}год"

getDateContainer = ->
  container = $ "##{id}"
  $('#mainNav').append($ '<br/>') unless container.length

  if container.length then container else
    $ createDateContainer()
    .each => console.log this
    .appendTo '#mainNav'

createDateContainer = ->
  $ '<div></div>'
  .attr 'id', id
  .addClass 'date'


updateDate()