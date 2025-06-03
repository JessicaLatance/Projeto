function toggleMode() {
    const html = document.documentElement //1ª INSTRUÇÃO PEGANDO O HTML
    //document.documenteElemente é o html, é a represantação do nosso 
    /* documento em formato de objeto javascript. Sempre que é colocado um ponto(.) estamos
      acessando propriedades e funcionalidades.
    nesse caso, dentro do documentnto(ponto)(.) eu acesso o meu html, minha tag html atraves do documentElement
    
    if(html.classList.contains('light')) {
        if é uma condicional booleana, que significa que ou vai ser verdadeiro (true)
         ou vai ser falso(false). nesse caso ele está falando:
         html na lista de classe, contém light? se sim, se for verdadeiro (true), ele vai entrar pro código abaixo
     html.classList.remove('light')
       se for verdadeiro, se conter, ele vai remover a classe "light" da lista de classes
    } else {
        else é senão. Então se acima ele não conter, for falso (false), ele vai pro código abaixo
     html.classList.add('light')
        que é, senão ele adiciona a classe da lista de classes 'light'
    }
    porém todo esse código pode ser trocado para algo bem menor e simples. que seria:*/
    html.classList.toggle('light') //2ª INSTRUÇÃO - FAZEMNDO AS TROCAS DAS CLASSES.
    //essa funçãozinha "toggle" já faz todo o código, toda a função, toda a lógia do "if" e "else" sozinho. 
    // Se dentro da lista de classe
     //tiver ligth ele remove(tira) a classe light, senão ele adiciona(coloca) a classe 'light'.

    /*PARA TROCAR A IMAGEM VAMOS PRECISAR:
    -PEGAR A IMAGEM
    -SUBSTITUIR A IMAGEM
    -SE TIVER LIGHT MODE, ADICIONAR IMAGEM
    -SE TIVER SEM LIGHT MODE, DEIXAR A IMAGEM NORMAL    
    */
    const img = document.querySelector("#profile img")//3ª INSTRUÇÃO -PEGAR A IMAGEM.
   /*querySelector é uma função que está no document para pesquisar o seletor. O mesmo seletor que está no CSS, 
   que nesse caso será o "profile" que foi o mesmo seletor que usamos para alterar o tamanho da imagem.*/

   if(html.classList.contains("light")) {
    /*se tiver light mode, adicionar a imagem do código abaixo:*/
    img.setAttribute("src", "./assets/avatar-light.png")
/*função setAttribute serve para adiciona/ajudar/modificar um atributo. Primeiro atributo é o src, depois 
coloca qual é o novo valor que eu quero, no caso a nova imagem.*/
     
    } else { /*
   /* se tiver sem light mode, deixa a imagem padrao, normal*/
        img.setAttribute("src", "./assets/avatarleao.png")
    }

        
    if (html.classList.contains("light")) {
        img.setAttribute("alt", "Mayke com fundo azul");
    /*se tiver light mode, mostrar do código abaixo:*/
    
    } else {
    img.setAttribute ("alt", "imagem rei leao mufasa com cara de bravo.");
    }
        }
    
