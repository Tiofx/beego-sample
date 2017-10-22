image_number = 1
img_index = -1

setUpPhotoGrowListeners = ->
  $('img').click ->
    $(document.body).append =>
      createBigPhoto this.cloneNode(true), $(this).attr "data-index"

$(document).ready ->
  setUpPhotoGrowListeners()
  image_number = $ "#allImageContainer"
  .find "img"
  .length

createBigPhoto = (image, index) ->
  $ "<div></div>"
  .hide()
  .addClass 'photoContainer centred'
  .append(
    $ image
    .addClass 'centredImg'
    .off()
  )
  .append(
    $ "<div/>"
    .addClass 'photoInterface'
    .append(
      $ "<div/>"
      .addClass 'leftArrow'
      .append(
        $ '<img/>'
        .attr
            src: 'static/img/arrow/left.png'
            alt: 'left'
      )
      .click ->
        img_index = $ this
        .parent()
        .parent()
        .find 'img'
        .attr 'data-index'

        img_index = (img_index - 1 + image_number) % image_number

        $ "#allImageContainer"
        .find "[data-index=#{img_index}]"
        .trigger 'click'
        return
    )
    .append(
      $ '<div/>'
      .addClass 'imageInfo'
      .text "фото #{img_index} из #{image_number}"
    )
    .append(
      $ "<div/>"
      .addClass 'rightArrow'
      .append(
        $ '<img/>'
        .attr
            src: 'static/img/arrow/right.png'
            alt: 'right'
      )
      .click ->
        img_index = $ this
        .parent()
        .parent()
        .find 'img'
        .attr 'data-index'

        img_index++
        img_index %= image_number

        $ "#allImageContainer"
        .find "[data-index=#{img_index}]"
        .trigger 'click'
        return
    )
  )
  .click ->
    $.when(
      $ this
      .slideUp 'slow'
    )
    .done => this.remove()
  .fadeIn 'slow'