# JavaScript tihh_back_redirect
Função que controla Back Redirect com manipulação do SRC.

Para instalar, ai

```javascript
<script>
  /* script de Back Redirect desenvolvido por @tihhgoncalves */
  var script = document.createElement('script');
  script.src = "https://cdn.rawgit.com/tihhgoncalves/tihh_back_redirect/485b7480/tihh_back_redirect.min.js";
  document.body.appendChild(script);
  
  window.onload = function(e){ 
    tihh_back_redirect('https://app.monetizze.com.br/XXXXXX', '|Back');
  }
</script>
```
