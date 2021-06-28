---
title: Como não ser o chatão no Code Review
description: Dicas para não ser o chatão da review
date: 2021-06-28 11:34:53
category: programacao
background: "#2DA0C3"
---
Muita gente fala sobre boas práticas ao revisar um pull request, mas poucas falam sobre o que você deveria evitar fazendo numa revisão.
Se você cometeu (ou comente) algum desses erros (na minha opnião), não se sinta mal, sempre há oportunidade de melhorar.

E você pode encontrar o texto no Github se quiser mandar uma referência direta para alguma parte: [Post](https://github.com/angeliski/angeliski.github.io/tree/master/posts)

## Leia a descrição do PR

Eu vou partir do princípio que o seu colega de equipe gastou um bom tempo escrevendo uma boa descrição, dando contexto, sugerindo casos de teste, e outras coisas que só quem desenvolveu o código poderia fazer.

Aí vem você e manda uma dúvida que está CLARAMENTE DESCRITA NO PULL REQUEST.

![Panda quebrando todo o escritório](https://media.giphy.com/media/12i3TW7x8vp7sQ/giphy-downsized.gif
)

Pelo amor de Deus né? Antes de começar a revisão, leia a descrição toda. 

Ali você pode ter muitas ideias e dúvidas que pode precisar tirar aí a olhar o código.


## Não seja o fiscal de linha em branco

Linha em branco, erro de digitação, ordem de importação, ou qualquer uma daquelas coisas que *existe uma ferramenta que pode identificar*, são coisas que você não deveria olhar.

Não existe coisa mais frustante do que você esperar feedback sobre a sua solução e receber um "tem uma linha a mais aqui".

O código ficou bom? A solução atende bem? Alguma abordagem que eu poderia usar diferente?

"Ah não, eu só olhei a linha em branco mesmo"

"Orra Rubocop, mandou benzão hein?"

Se essas coisas estão passando é sinal de que existe margem para automação no seu repositório. Automatize isso, e deixe fora da sua revisão.

![Imagem do twitter https://twitter.com/theprincessxena/status/1406981848845144066?s=19](https://pbs.twimg.com/media/E4aah8UXMAMlTye?format=jpg&name=small)

Fonte: https://twitter.com/theprincessxena/status/1406981848845144066?s=19


## Revise o PR todo, não metade dele

A revisão tem cinco arquivos, olhando o terceiro você coloca a dúvida:
"Você pensou no caso X?"

Se você tivesse revisado tudo, teria visto o teste que se chama "when caso X" que responderia sua dúvida. 

Mas quando você revisa ~~que nem seu nariz~~ só uma parte, esse tipo de coisa passa despercebida.

Não me entenda mal, eu vou anotando minhas dúvidas no PR enquanto vou revisando os arquivos ( que são exibidos em uma ordem linear), mas eu deleto os comentários que não fazem sentido quando a resposta da minha dúvida já está no código.

Então para de revisar PR durante a daily que isso já melhora.

## Não trate as pessoas como se elas fossem idiotas

Quando estiver revisando parta sempre do princípio que a pessoa fez o melhor que podia.
Comentários como "você deveria ter feito jeito X", "o padrão aqui é Y" não ajudam muito, são agressivos e podem fazer a pessoa se sentir mal.

Tá tudo bem questionar, a ideia é melhorar o código e ajudar as pessoas aprenderem:
"O jeito X é melhor em tal ponto, existe algum motivo para você ter feito dessa forma?". 

Isso abre um diálogo de respeito e de aprendizagem, permitindo que as pessoas evoluam e se sintam bem.


## Inglês não é minha primeira língua

Se não tava polêmico até agora, vamos esquentar:

Para de corrigir inglês em PR.
Isso mesmo que você leu! Para com isso!

![Mulher mostrando a mão e dizendo Stop.](https://media.giphy.com/media/qP1mEdNmgwEP6/giphy.gif)

Da pra entender? Então segue a vida amigo.

Não entenda mal, eu entendo a importância de documentação bem escrita, nomes coerentes e tudo isso. São coisas importantes.

Agora você vai vir me falar que por que caso de teste falta um artigo indefinido vai ser IMPOSSÍVEL de entender o que está ali? 

Para com isso. Um exemplo, no parágrafo ali em cima não tinha o artigo e você entendeu o que eu quis dizer. 

Algumas pessoas só repararam nisso agora, outras viram logo que faltava, mas todas entenderam o sentido da frase.

Você não é professor de inglês. Thank You.

## É revisão, não ping pong
Se você faz uma revisão e ela começou a "dar pano pra manga" é hora de chamar uma reunião e alinhar. 

Comunicação assíncrona é um desafio para todo mundo e um PR que fica indo e voltando além de gerar frustração em todos os envolvidos, ainda fica parado sem gerar valor para o cliente.

Chama uma reunião de quinze minutos, esclarecer os pontos e documenta no PR a decisão. Bola pra frente.
