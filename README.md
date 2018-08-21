# JavaScript tihh_back_redirect
Função que controla Back Redirect com manipulação do SRC.

Para instalar, ai

```javascript
<script>
  var script = document.createElement('script');
  script.src = ""; // URL do script
  document.body.appendChild(script);
  
  tihh_back_redirect('https://app.monetizze.com.br/XXXXXX', '|Back');
  
</script>
```
