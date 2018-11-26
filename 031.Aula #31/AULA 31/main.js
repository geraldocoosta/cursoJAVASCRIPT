(function () {
    'use strict';

    let $textArea = document.querySelector('[data-js="textarea"]');
    let $div = document.querySelector('[data-js="escrevendo_entrada"]');
    let $form = document.querySelector('form');

    // se usar essa merda de innerHTML valide a entrada do usuario
    // passa por um método que retira os ' " < >, pq se não pode sofrer
    // ataquezinho bem nice
    $form.addEventListener('submit', function (e) {
        e.preventDefault();
        $div.innerHTML = $textArea.value;
    }, false);

    // insertAdjacentHTML(pos, text)
    /* o que faz? ele faz o que o innerHTML faz, porém podemos escolher uma possição
    aonde pode ser inserido algum HTML, essas propriedades são dos elementos html 
    O primeiro parametro é a posição onde será inserido o html, o segundo elemento o html
    em formato string, as posição possiveis são:
    beforebegin
    afterbegin
    beforeend
    afterend 
    
    Como saber onde ele vai adicionar? 
    <!-- beforebegin -->
    <p>
    <!-- afterbegin -->
    foo
    <!-- beforeend -->
    </p>
    <!-- afterend -->
    
    Essa vai ser a posição em relação a tag (elemento HTML)
    
    Exemplo abaixo
    */

    let $div2 = document.querySelector('[data-js="testandoadjacent"]');
    $form.addEventListener('submit',function(e){
        e.preventDefault();
        $div2.insertAdjacentHTML('afterbegin',$textArea.value);
      //  $div2.insertAdjacentHTML('afterend',$textArea.value);
    },false)
})();