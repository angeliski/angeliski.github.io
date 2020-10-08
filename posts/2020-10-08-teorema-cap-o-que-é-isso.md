---
title: Teorema CAP - O que é isso?
description: ' Quando a gente começa a estudar aplicações escaláveis e sobre sistemas distribuidos, um dos tópicos que aparece bastante é sobre o Teorema CAP (ou Teorema de Brewer), que fala basicamente sobre as escolhas que você precisa tomar para obter um determinado resultado no seu sistema,olhando para consistência, disponibilidade e partições tolerantes a falha'
date: '2020-10-08 04:50:00'
category: iniciante
background: '#B31917'
---
Quando a gente começa a estudar aplicações escaláveis e sobre sistemas distribuidos, um dos tópicos que aparece bastante é sobre o Teorema CAP (ou Teorema de Brewer), que fala basicamente sobre as escolhas que você precisa tomar para obter um determinado resultado no seu sistema:

<ImagePoster caption="Imagem com os três pontos do teorema: consistência, disponibilidade e partição tolerante a falhas" src="/assets/img/teorema_cap.png" />

Bora entender como usar isso no desenvolvimento das nossas aplicações?

## Entendendo o teorema

Vamos começar entendendo o que é o teorema e o que ele significa. Vou ser breve aqui porque já existem ótimos materiais falando disso (vou deixar o link na referências se você ficar com dúvidas):

O Teorema CAP vem de Consistency (Consistência), Availability (Disponibilidade) e Partition Tolerance (Partição tolerante a falhas), e ele afirma que, em um sistema com distribuição de dados, é impossível obter simultaneamente mais de duas das três garantias. Ou seja, quando estamos falando de sistemas distribuidos, você não vai conseguir consistência, disponibilidade e partição tolerante a falhas, vai ter que escolher entre duas. Só que tem uma pegadinha ai: No cenário atual, não existe a possibilidade de criar um sistema distribuido sem partição tolerante a falhas, ou seja, no final do dia você vai ter que escolher entre consistência e disponibilidade.

## O Cenário hipotético

Pra gente conseguir navegar nas nossas teorias, vamos criar um exemplo que seja viável de todo mundo entender. Imagina que nós estamos construindo o Twitter, e como tal, vamos tomar decisões de arquitetura que vão guiar nossas escolhas.

Disclaimer: Eu estou usando o Twitter como um exemplo didático, isso não significa que o Twitter funciona da maneira como eu vou expor, nem que o que eu estou falando é a maneira que deveria funcionar. É apenas um exemplo lúdico.

## Consistência

A ideia da consistência é que todos as partições do sistema tenha a informação mais atualizada o possível. Imagine que uma conta com 3 milhões de seguidores faz uma alteração no nome dela. Pra simplificar, vamos imaginar que cada continente tem uma partição rodando, se a nossa estrela do twitter mudar o nome dela no continente americano, em um sistema consistênte, significa que essa alteração estara refletida “imediatamente” no continente africano. 

Aqui vale entender que a velocidade da consistência é relativa a necessidade, em um sistema como o Twitter a velocidade que essa informação precisa ficar consistente é alta, segundos devem se passar entre uma alteração e sua replicação. Em outros cenários, como relatórios consolidados, essa informação pode levar 1 dia (o famoso D-1) para ficar consistênte. Isso vai depender dos seus requisitos de negocio.

## Disponibilidade

O segredo por trás da disponibilidade é garantir que as partições do sistema estejam sempre acessiveis o mais acessivel possível. É comum você ver por ai as pessoas falarem em disponibilidade com base na quantidade de 9 que elas conseguem prover: 

Quatro noves - 99,99% disponível, ou 52,60 minutos de indisponibilidade por ano

Cinco noves - 99,999% disponível, ou 5,26 minutos de indisponibilidade por ano

Seis noves - 99,9999% disponível, ou 31,56 segundos de indisponibilidade por ano

Isso quer dizer que quanto maior sua disponibilidade, menor é o tempo que o seu usuário fica sem acessar essa informação quando necessário. Vamos voltar no nosso exemplo do Twitter, quando nós provemos uma alta disponibilidade, nós garantimos que seja um usuário acessando a uma da tarde, ou uma da manhã, ele vai conseguir acessar o site, ver postagens, alterar informações da conta e fazer tudo que o Twitter tem a oferecer. Aqui também vale entender que a disponibilidade necessária varia de acordo com a sua necessidade de negócio: O Twitter ficar fora 1h é completamente diferente do sistema de tráfego aéreo fora por 1h. 

Legal, agora que a gente começou a entender melhor esses conceitos, bora ver algumas dicas pra usar no nosso dia-a-dia?

## Entenda a necessidade do negócio

Eu vou dedicar um tempo pra escrever só sobre isso, mas é importante entender que quando você esta pensando em soluções de software, você está resolvendo problemas de negocio. Entender isso vai te ajudar (não só aqui) em todas as suas decisões. Quão necessária é a consistência? Qual o impacto de uma indisponibilidade? Quanto seu negócio perde em cada um dos casos? Quanto seu cliente perde nesses cenários? Com essas informações em mãos, a sua decisão vai sem dúvidas ser mais certeira.

## Você não precisa necessáriamente escolher entre consistência e disponibilidade

Um erro comum de quem está começando nesse assunto (que eu cometi também) é acreditar que uma vez que você escolhe entre um deles, você precisa eliminar completamente o outro. Não é verdade, é mais como um cabo de guerra. Quanto mais você puxar para um lado, mais dificil será ter o outro lado. 

Se você aumentar sua disponibilidade, a consistência começa a ficar prejudicada pois a falha na rede é inevitável, então é inevitável que em algum momento seu sistema ficara inconsistênte. Se você aumentar a consistência, sua disponibilidade ficara prejudicada, pois quando a falha de rede acontecer você será obrigado a negar a informação devido a inconsistência.

Isso não quer dizer que você não possa obter um resultado interessante combinando estratégias. Um exemplo bem comum é o uso da consistência eventual: O sistema favorece a disponibilidade e é convencionando que eventualmente o sistema chegara ao estado consistente (pode ser uma questão de tempo, ou até de recuperação de uma falha de rede).

## Favoreça consistência ao invés de disponibilidade

Vamos elaborar um pouco sobre isso: É um fato, você não vai conseguir uma disponibilidade de 100%. Seja devido a ataques de tubarão, ou porque houve algum incidente, a única garantia que você tem é que a rede vai falhar. E quanto mais perto de 100% você quiser estar, mais caro isso vai ser. Além disso, você como usuário, fica mais incomodado com um app fora do ar, ou com um app mostrando informações erradas (inconsistênte)? Sim, indisponibilidade é ruim e tem seu impacto, não da pra você ficar metade do dia fora, mas dado que você lida com os problemas de maneira saúdavel, vamos dizer que a sua disponibilidade vai estar bem. Mas e a sua consistência? Garantir que seu usuário está recebendo a informação certa no momento certo pode ser a diferença entre um negócio de sucesso e um que está sempre disponível, mas nem sempre com as informações relavantes para gerar valor para os usuários. Vou reforçar aqui: entenda seu caso de uso e a necessidade de negócio. Isso vai te ajudar a entender onde focar.

Pra fechar vamos fazer uma revisão então: Teorema CAP fala de consistência, disponibilidade e partição tolerante a falhas (que é seu sistema rodando em variás máquinas pra simplificar), falando de sistemas distribuidos e de aplicações escaláveis, a partição a falha é obrigatória basicamente, então você precisa escolher entre consistência (todo mundo vendo a mesma coisa) e disponibilidade (todo mundo acessando). É importante entender o seu neǵocio e a sua necessidade para saber qual opção é mais necessária e como você pode minimizar o impacto dessa decisão.

<Signature></Signature>

## Referências

* [An Illustrated Proof of the CAP Theorem](https://mwhittaker.github.io/blog/an_illustrated_proof_of_the_cap_theorem/)
* [CAP Twelve Years Later: How the "Rules" Have Changed](https://www.infoq.com/articles/cap-twelve-years-later-how-the-rules-have-changed/)
* [CAP:  O Teorema que todo desenvolvedor tem que saber](https://www.youtube.com/watch?v=syLXIvnUg0k)
