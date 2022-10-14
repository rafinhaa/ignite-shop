# Introdução

Faala dev!

Seja muito bem-vindo ou bem-vinda ao quarto desafio da trilha de **ReactJS** do **Ignite**. 

Nesse desafio, vamos implementar um carrinho no nosso projeto, com a opção de adicionar e remover os itens antes de prosseguir ao checkout.

Como se trata de um desafio, ele necessita de alguns conhecimentos além dos abordados nesse módulo, então é importante que tenha autonomia para que consiga pesquisar essas coisas caso não saiba como resolver. Por isso, lembre-se, t**enha calma** e **acredite no seu processo.** O aprendizado daqui é muito importante, mas você com certeza vai conseguir sair daqui com muito conhecimento bacana �

# Sobre o desafio

Nesse desafio, você vai aproveitar a aplicação que já desenvolvemos na trilha para implementar um carrinho que utilizará os dados da API do Stripe para buscar os itens existentes, e controlará, através da sua aplicação, o número de itens que a pessoa deseja comprar.

- Você utilizará a listagem já criada pela aplicação, mas adicionará a possibilidade de adicionar aquele item ao carrinho na página do produto.
- Salvar todos os itens selecionados em sua aplicação, e exibir o número de itens no carrinho
- Enviar o carrinho que você armazenou na aplicação para a rota de checkout, onde irá gerar a sessão de checkout com os ``line_items`` necessários.

Para completar esse desafio você vai  precisar de realizar algumas pesquisas para entender sobre a API do Stripe.

# Layout da aplicação

Para essa aplicação nós fornecemos um layout para que você possa seguir e implementar todas as funcionalidades desenhadas no Figma. 

Para acessar o Figma, você primeiro deve criar uma conta na plataforma.

### Criando uma conta no Figma

Para acessar o Layout da aplicação, você primeiramente deve ter uma conta criada na plataforma do Figma, para isso, você pode [clicar aqui](https://www.figma.com/signup). 

Então, na página de cadastro, você pode logar diretamente com sua conta do Google ou criar uma conta com o e-mail que você preferir.

### Acessando o layout do app

Após criar e logar em sua conta, você deve duplicar o Layout do desafio. Para isso, basta você clicar no link abaixo. Ele adicionará o Layout à sua dashboard do Figma automaticamente, como uma cópia e abrirá o layout da aplicação para a sua visualização.

[Figma](https://www.figma.com/file/FxlDRKOmznBbTH8DsTgnZU/Ignite-Shop-2.0/duplicate)

# Desenvolvendo o projeto

Para desenvolver esse projeto, você utilizará a aplicação base desenvolvida durante a aula.

Para armazenar os itens no carrinho, você pode fazer isso da maneira que preferir, por exemplo utilizando uma Context API para salvar os itens, ou utilizar a biblioteca [use-shopping-cart](https://www.npmjs.com/package/use-shopping-cart) que já possui diversas facilitações para essa lógica.

Você pode encontrar mais sobre o use-shopping cart [**clicando aqui.**](https://useshoppingcart.com/docs/welcome/getting-started-serverless)

<aside>
⚠️ Atenção: Apesar de você conseguir realizar isso da maneira que preferir, é importante seguir sempre a [documentação do stripe](https://stripe.com/docs/api/checkout/sessions/create) para enviar os dados de checkout com o formato correto.

</aside>

Caso você tenha alguma dificuldade você pode ir no nosso **[fórum](https://app.rocketseat.com.br/h/forum/react-js)** e deixar a sua dúvida por lá! 

Após terminar o desafio, caso você queira, você pode tentar dar o próximo passo e deixar a aplicação com a sua cara. Tente mudar o layout, cores ou até adicionar novas funcionalidades para ir além � 

# Entrega

Após concluir o desafio, você deve enviar a URL do seu código no GitHub para a plataforma. 

Além disso, que tal fazer um post no LinkedIn compartilhando o seu aprendizado e contando como foi a experiência?

É uma excelente forma de demonstrar seus conhecimentos e atrair novas oportunidades! �

Obs: Se você se sentir à vontade, pode postar um print do resultado final e nos marcar! 
Será incrível acompanhar a sua evolução! �

Feito com �  por Rocketseat �