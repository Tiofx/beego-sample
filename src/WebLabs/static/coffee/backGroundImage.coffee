setUpListenersForBackGround = ->
  console.log "setUpListenersForBackGround"
  $ '#mainNav'
  .find 'li'
  .not '.active'
  .map (_, element) ->
    element.firstChild
  .mouseover (event) ->
    setBackGroundImage(event.target)
  .mouseout (event) ->
    unSetBackGroundImage(event.target)


setBackGroundImage = (it) ->
  it.style.backgroundImage = 'url("static/img/cat.jpg")'
  it.style.backgroundSize = 'contain'
  return

unSetBackGroundImage = (it) ->
  it.style.backgroundImage = null
  return


setUpListenersForBackGround()