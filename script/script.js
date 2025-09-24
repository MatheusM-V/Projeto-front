let lastscroll = 0;
const delta = 5;
const cabecalho = document.querySelector('.cabecalho');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  
  if (Math.abs(lastscroll - currentScroll) <= delta) {
    return;
  } 
    if (currentScroll > lastscroll && currentScroll > 100 ) {
      cabecalho.classList.add('hide');
    } else {
      if (currentScroll + window.innerHeight < document.body.scrollHeight) {
        cabecalho.classList.remove('hide');
      }
      lastScroll = currentScroll;
}});