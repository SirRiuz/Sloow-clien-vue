


function setCookie (cookieName,cookieValue) {
    document.cookie = cookieName+'='+cookieValue+';'+'expires=350000;path=/'
}


function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length)
      }
    }
    return "";
  }

  function delCookie (cookieName) {
    document.cookie = cookieName+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

  }


export default {
    setCookie,
    getCookie,
    delCookie
}