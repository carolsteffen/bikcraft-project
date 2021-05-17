if(window.SimpleSlide) {
new SimpleSlide({
  slide: 'quote',
  auto: true,
  time: 5000
});

new SimpleSlide({
  slide: 'portfolio',
  auto: true,
  time: 5000,
  nav: true
})
}

if(window.SimpleAnime){
new SimpleAnime();
}

if(window.SimpleForm){
new SimpleForm({
  form: ".formphp",
  button: "#enviar",
  erro: "<div id='form-erro'><p><strong>Um erro ocorreu</strong>, tente enviar para o email carolsteffen98@gmail.</p></div>",
  sucesso: "<div id='form-sucesso'><h2>Seu formulário foi enviado com sucesso!</h2><p>Em breve eu entro em contato com você.</p></div>"
});
}