---
title: "Deploy no Now com Travis CI"
date: "2017-07-28"
coverImage: "now.png"
---

Recentemente eu precisei fazer algo que eu achei que era simples. Configurar um projeto no Github, para fazer o build no [Travis](https://travis-ci.org) e o Deploy no [Now](https://zeit.co/now). Depois de três dias procurando informações de como fazer isso:

![Surtando](https://algoritmosdescomplicados.files.wordpress.com/2017/07/giphy15.gif)

Se você já teve que fazer isso, ou está tentando fazer, entende bem do que eu estou falando. Borá lá ver como fazer isso?

## O Projeto

Antes de começar vamos falar sobre o projeto que eu vou usar de exemplo. É o projeto de uma pequena API para consume de eventos de frontend, usando node, express e mocha/chai para os testes. Você pode dar uma olhada no [repositório](https://github.com/angeliski/frontendbr-eventos-api) se quiser.

## A parte fácil

Claro, tem uma parte que foi fácil. Configurar o Travis CI para fazer o build, foi relativamente simples. É só criar um arquivo **.travis.yml **na raiz com o seguinte conteudo: \`\`\` node\_js: - "6.11.0" script: mocha --timeout 10000 --reporter nyan before\_script: - npm install after\_success: - npm run coveralls \`\`\`  

Além disso, basta ativar o seu projeto no Travis. Isso já te garante 50% do caminho.

## Onde começa a treta

Dai, você decide publicar seu projeto no [Now](https://zeit.co/now). É fácil, simples, um comando. Só que, como você faz isso pelo Travis? Vai lá, procura ai como faz, vamos ver o que você acha (sem contar esse post):

\[caption id="attachment\_1629" align="aligncenter" width="360"\]![Pesquisa now](https://algoritmosdescomplicados.files.wordpress.com/2017/07/giphy16.gif) Evolução da pesquisa\[/caption\]

Depois de muito tempo procurando como fazer isso, eu descobri que você pode [gerar um token no now](https://zeit.co/account/tokens) e usar isso para fazer o deploy. Com esse token configurado como uma variável de ambiente no Travis (não vai me comitar ele!) você pode atualizar seu arquivo **.travis.yml** para: \`\`\` node\_js: - "6.11.0" script: mocha --timeout 10000 --reporter nyan before\_script: - npm install after\_success: - npm run coveralls - now -t $TOKEN\_NOW --public \`\`\`  

Dai é só comitar e corre pro push!

## Mas e se eu quiser um Alias?

Se você conhece o Now, sabe que é possível criar um alias para o seu site, seja para um endereço pago ou para solicitar um alias para o domínio padrão, algo assim: **https://seuprojeto.now.sh**

**Mas e se eu quiser fazer isso no deploy do Travis?**

![Medo](https://algoritmosdescomplicados.files.wordpress.com/2017/07/giphy17.gif)Calma jovem, vou te dizer que é simples agora que eu aprendi essa budega.

Mude seu arquivo **.travis.yml** para isso aqui: \`\`\` node\_js: - "6.11.0" script: mocha --timeout 10000 --reporter nyan before\_script: - npm install after\_success: - npm run coveralls - now -t $TOKEN\_NOW --public - now -t $TOKEN\_NOW --public alias\`\`\`  

E o seu package.json agora tem que ter as propriedades que vão dizer qual é o alias:

  \`\`\` "alias": "seuprojeto" }

\`\`\`  

Pronto, isso garante que quando seu deploy for feito, vai criar um alias 100% funcional.

## Mas e se eu quiser só a Master?

Claro, chegou aquela hora que você fala: "Show! Eu quero tudo isso, mas eu só quero que isso aconteça quando for na master", afinal de contas você não quer que toda branch que você tem vá pro ar, não é?

\[caption id="attachment\_1671" align="aligncenter" width="480"\]![Bugou](https://algoritmosdescomplicados.files.wordpress.com/2017/07/giphy18.gif) Você percebendo que a branch zoada quase entrou em produção\[/caption\]

Sem panico, é mais simples do que o anterior agora que eu gastei um mês pra descobrir isso.

O seu arquivo  **.travis.yml** vai ficar assim: \`\`\` node\_js: - "6.11.0" script: mocha --timeout 10000 --reporter nyan before\_script: - npm install after\_success: - npm run coveralls - test $TRAVIS\_BRANCH = "master" && test $TRAVIS\_PULL\_REQUEST = "false" && now -t $TOKEN\_NOW --public - test $TRAVIS\_BRANCH = "master" && test $TRAVIS\_PULL\_REQUEST = "false" && now -t $TOKEN\_NOW --public alias \`\`\`  

Feito!

Com isso o seu comando de publicação só é executado na branch master e quando não for um pull-request (Os pull-requests para master tem como branch a master)

Duvidas? gostou? Me acha um idiota?

Comenta ai!! Angeliski
