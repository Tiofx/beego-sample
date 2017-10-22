setCookie = (name, value) ->
  document.cookie = "#{name}=#{value}"
  return

getCookie = (cookieName) ->
  name = "#{cookieName}="

  return cookie.substring(name.length, cookie.length) \
  for cookie in document.cookie.split(';').map((el) -> el.trim()) \
  when cookie.indexOf(name) is 0

  ""