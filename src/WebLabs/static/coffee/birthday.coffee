daysName = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
dayInWeek = 7
monthName = ['Январь', 'Февраль', 'Март', 'Апрель',
  'Май', 'Июнь', 'Июль', 'Август',
  'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
yearRange = [1900, 2017]

selectedColor = 'gold'

calendar = null
birthdayField = null
birthdayContainer = null

$ document
.ready =>
  calendar = createCalendar()
  $(calendar).trigger 'change'
  birthdayField = $ '#birthday'
  birthdayContainer = $ '#birthdayContainer'

  setUpListenersForBirthday()
  return

setUpListenersForBirthday = ->
  $ calendar
  .attr 'id', 'calendar'

  $ birthdayContainer
  .append calendar
  .dblclick ->
    $ calendar
    .slideDown

  $ calendar
  .trigger 'change'
  return

createCalendar = ->
  $ '<div/>'
  .each (div) ->
    calendar = div
  .addClass 'calendar'
  .attr
      'data-day': 1
      'data-mothNumber': 0
      'data-year': 2017
  .append ->
    generateMonth()
  .append ->
    generateYear()
  .append ->
    generateDaysPicker()
  .each =>
    $ this
    .get 0
    .addEventListener 'change', =>
      $ birthdayField
      .val \
          $(this) \
          .attr('data-day') \
          .toString() \
            + '.' \
            + \
            $(this) \
            .attr('data-monthNumber') \
            .toString() \
            + '.' \
            + \
            $(this) \
            .attr('data-year') \
            .toString()


      $ '.calendarDays'
      .replaceWith generateDaysPicker()
      return
    , true

generateHeader = ->
  $ '<div/>'
  .addClass 'calendarHeader'
  .each =>
    daysName.forEach (element) ->
      $ '<div/>'
      .text element
      .appendTo this

generateYear = ->
  $ '<select/>'
  .each =>
    for year in [yearRange[0]..yearRange[1]]
      $ '<option/>'
      .attr 'value', year
      .text year
      .appendTo this

    $ this
    .find 'option:last-child'
    .attr 'selected', true

generateMonth = ->
  $ '<selecte/>'
  .each =>
    for month, index in monthName
      $ '<option/>'
      .attr 'value', index
      .text month
      .appendTo this

    $ this
    .first()
    .attr 'selected', true
  .change =>
    $ calendar
    .attr 'data-monthNumber', this[this.selectedIndex].value
    .get 0
    .dispatchEvent new Event 'change'
  .each =>
    this.dispatchEvent new Event 'change'

generateDaysPicker = ->
  dayNumber = daysInMonth \
    $(calendar).attr("data-year") || 2017,
    $(calendar).attr("data-monthNumber")
  dayNumber ||= 31

  skipNumber = firstDay \
    $(calendar).attr("data-year") || 2017,
    $(calendar).attr "data-monthNumber"
  skipNumber ||= 6

  $(calendar).attr("data-day", 1) if $(calendar).attr("data-day") > dayNumber

  $ '<div/>'
  .addClass 'calendarDays'
  .append -> generateHeader()
  .append -> generateDays 1, dayNumber, skipNumber

generateDays = (from, to = from + dayInWeek, skip = 0) ->
  $ '<div/>'
  .addClass 'calendarRow'
  .each =>
    for i in [(from - skip)..to]
      $ '<div/>'
      .text i
      .attr 'name', i
      .each =>
        if i >= from
          $ this
          .css 'cursor', 'pointer'
          .click ->
            cleanElementsBackground $(this).parent()
            $ calendar
            .attr 'data-day', this.textContent

            $ this
            .css 'background', selectedColor

            $ calendar
            .get 0
            .dispatchEvent new Event 'change'
        else
          $ this
          .addClass 'emptyElement'

        $ this
        .css 'background', selectedColor if $(calendar).attr("data-day") == i
      .appendTo this

cleanElementsBackground = (div) ->
#  $ div
#  .children()
#  .filter (element) ->
#    'emptyElement' !=
#      $ element
#      .attr 'class'
#  .each (_, element) ->
#    $ element
#    .css 'background', ''

  $(element).css("background", "") \
  for element in $(div).children() \
  when $(element).attr("class") != "emptyElement"
  return


daysInMonth = (year, month) ->
  date = new Date year, month, 1
  new Date date.getFullYear(), date.getMonth() + 1, 0
  .getDate()


firstDay = (year, month) ->
  new Date year, month, 0
  .getDay()
























