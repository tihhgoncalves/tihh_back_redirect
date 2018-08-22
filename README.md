# JavaScript tihh_back_redirect
Função que controla Back Redirect com manipulação do SRC.

Para instalar, ai

```javascript
<script type="text/javascript" charset="UTF-8">
  /* script de Back Redirect desenvolvido por @tihhgoncalves */
  var script = document.createElement('script');
  script.src = "https://cdn.rawgit.com/tihhgoncalves/tihh_back_redirect/eb5975e9/tihh_back_redirect.min.js";
  document.body.appendChild(script);
  
  window.onload = function(e){ 
    tihh_back_redirect('https://app.monetizze.com.br/XXXXXX', '|Back');
  }
</script>
```
