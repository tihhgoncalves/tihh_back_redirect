function tihh_array_merge(a, b){

  for (var k in a){
      b[k] = a[k]
  }
  return b;
  
}

function tihh_back_redirect(url, add_src) {

  //pega parâmetros da URL original
  var query = location.search.slice(1);
  var pms = query.split('&');
  var data_original = {};

  pms.forEach(function (pm) {
    var key_val = pm.split('=');
    var key = key_val[0];
    var val = key_val[1];
    data_original[key] = val;
  });

  //pera parâmetros da URL do Back Redirect
  var i = url.indexOf('?');

  if(i > 0) {
    var query = url.substr(i + 1);
    var back_url = url.substr(0, i);
  } else {
    var query = ''
    var back_url = url;
  }

  var pms = query.split('&');
  var data_back = {};

  pms.forEach(function (pm) {
    var key_val = pm.split('=');
    var key = key_val[0];
    var val = key_val[1];
    data_back[key] = val;
  });


  //unifica parâmetros get das 2 urls
  var data = tihh_array_merge(data_original, data_back);

  //adiciona o parâmetro src
  if(typeof add_src !== "undefined")
    data['src'] += add_src;

  pms = '';
  var prim = true;
  for (var k in data){

    if(typeof data[k] !== "undefined") {

      if (prim) {
        prim = false;
      } else {
        pms += '&';
      }
      pms += k + "=" + data[k];
    }
  }

  back_url += '?' + pms;


  history.pushState({}, "", location.href);

  window.onpopstate = function () {
    setTimeout(function () {
      location.href = back_url;
    }, 1);

  }

  return back_url;

}
