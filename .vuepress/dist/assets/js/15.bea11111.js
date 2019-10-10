(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{142:function(a,o,e){"use strict";e.r(o);var t=e(4),r=Object(t.a)({},(function(){var a=this,o=a.$createElement,e=a._self._c||o;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("p",[a._v("Depois de apanhar por 3 dias de varios computadores que não queriam conectar no banco de MODO algum, finalmente descobri o problema. Agora vamos a um tutorial pra deixar bem claro de como fazer isso.")]),a._v(" "),e("h1",{attrs:{id:"instalando-o-sql-server-2008"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#instalando-o-sql-server-2008","aria-hidden":"true"}},[a._v("#")]),a._v(" INSTALANDO O SQL SERVER 2008")]),a._v(" "),e("p",[a._v("Resolvi começar dessa parte por um motivo bem simples,a primeira vez que eu tive problemas com o Sql Server 2008 foi por que durante a instalação fizeram besteira. Logo, vamos de cara prevenir que isso aconteça. A Instalação foi feita com base no SQL SERVER 2008 R2 estou falando do express aqui, mas não tem muita diferença, caso haja alguma coisa que você não entendeu pode mandar o comentário que eu tento ajudar.\n")]),e("figure",[e("img",{attrs:{src:"http://i866.photobucket.com/albums/ab226/angeliski/Algoritmos%20Descomplicados/01.jpg",alt:"Começando a Instalar"}}),a._v(" "),e("figcaption",[a._v('"Nova Instalação"')])]),e("p"),a._v(" "),e("p",[a._v("Essa opção só aparece se você não tiver instalado o sql ainda.\n")]),e("figure",[e("img",{attrs:{src:"http://i866.photobucket.com/albums/ab226/angeliski/Algoritmos%20Descomplicados/02.jpg",alt:"Verificação de segurança"}}),a._v(" "),e("figcaption",[a._v('"Aqui você torce pra não dar erro"')])]),a._v("\nNormalmente não ocorre erro algum aqui, MAS eu ja tive problemas com isso, a solução (no meu caso) foi simples, a linguagem do SO era diferente da que estava no pacote. Ou seja se você baixou o Sql em ING e tem SO em PT ele vai dar erro, e vice-versa. Bom em seguida temos o classico termos e tal, LEIA e aceite, enfim, vamos ao que normalmente costuma dar problema.\n"),e("figure",[e("img",{attrs:{src:"http://i866.photobucket.com/albums/ab226/angeliski/Algoritmos%20Descomplicados/10.jpg",alt:"Autenticação SQL"}}),a._v(" "),e("figcaption",[a._v('"AQUI É QUE SEMPRE COLOCAM ERRADO.."')])]),e("p"),a._v(" "),e("p",[a._v('Muitos problemas se dão nessa etapa, grande parte das pessoas vai apertando avançar sem nem mesmo ler nada. Depois eles tem um baita problema para resolver e não sabem nem porque. COLOQUE NO MODO MISTO! "Porque Angeliski? Que diferença faz?" Assim, pra começo de conversa esse um banco que funciona como SERVIDOR não pode se autenticar só pelo windows né? O mais importante é que caso você use aplicações cliente/servidor, elas não vão logar no seu BD se não for atraves de um usuário (normalmente o SA). Caso você ja tenha instalado seu SQL Server e não tenha feito isso, manda um comentário que eu coloco onde você tem de acertar.')]),a._v(" "),e("figure",[e("img",{attrs:{src:"http://i866.photobucket.com/albums/ab226/angeliski/Algoritmos%20Descomplicados/11.jpg",alt:"Perfect!"}}),a._v(" "),e("figcaption",[a._v('"Se você chegou aqui, comemore!"')])]),a._v("\nTa instalado o negocio, agora vamos ao JAVA!\n"),e("h1",{attrs:{id:"conectando-o-java-ao-sql"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#conectando-o-java-ao-sql","aria-hidden":"true"}},[a._v("#")]),a._v(" Conectando o Java ao SQL!")]),a._v(" "),e("p",[a._v("Finalmente chegamos onde queriamos. Primeiro o codigo:")]),a._v(" "),e("p",[a._v("{% codeblock lang:java %}\nimport java.sql.*;")]),a._v(" "),e("p",[a._v('public class Main {\npublic static void main(String[] args) {\n// string de conexão...usando Windows Authentication\nString connectionUrl = "jdbc: sqlserver: //localhost:1433;"\n+ "databaseName=estudos;integratedSecurity=true;";\ntry {\nClass.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver").newInstance();\nConnection conn = DriverManager.getConnection(connectionUrl);\nSystem.out.println("Conexão obtida com sucesso.");\n} catch (SQLException ex) {\nSystem.out.println("SQLException: " + ex.getMessage());\nSystem.out.println("SQLState: " + ex.getSQLState());\nSystem.out.println("VendorError: " + ex.getErrorCode());\n} catch (Exception e) {\nSystem.out.println("Problemas ao tentar conectar com o banco de dados: "+ e);\n}\n}\n}\n{% endcodeblock %}')]),a._v(" "),e("p",[a._v("("),e("a",{attrs:{href:"http://pastebin.com/y49seqfY",title:"Java Conexão",target:"_blank",rel:"noopener noreferrer"}},[a._v("Pra quem quiser copiar o codigo indentado..."),e("OutboundLink")],1),a._v(") Uma coisa muito importante que não deve ser esquecida é  adicionar o driver ao projeto.( "),e("a",{attrs:{href:"http://www.wikihow.com/Add-JARs-to-Project-Build-Paths-in-Eclipse-%28Java%29",title:"Adicionar Jar no Eclipse",target:"_blank",rel:"noopener noreferrer"}},[a._v("Se você não sabe como fazer isso no Eclipse..."),e("OutboundLink")],1),a._v(") O Link da microsoft você encontra "),e("a",{attrs:{href:"http://www.microsoft.com/download/en/details.aspx?displaylang=en&id=21599",title:"DRIVER JDBC",target:"_blank",rel:"noopener noreferrer"}},[a._v("aqui"),e("OutboundLink")],1),a._v(".Sim, ele funciona! Não adicione os dois, só o sqljdbc4, que da suporte. Agora é só executar e pronto!")]),a._v(" "),e("figure",[e("img",{attrs:{src:"http://i866.photobucket.com/albums/ab226/angeliski/Algoritmos%20Descomplicados/12.jpg",alt:"Erro"}}),a._v(" "),e("figcaption",[a._v('" TCP/IP? Não! Era pra funcionar!"')])]),a._v(" "),e("p",[a._v('"Angeliski, no seu pode até funcionado, mas aqui necas." Eu sei, frustante. Mas vamos lá, você vai procurar no iniciar, na pasta do Sql uma ferramenta chamada "SQL Server Configuration Manager" .')]),a._v(" "),e("figure",[e("img",{attrs:{src:"http://i866.photobucket.com/albums/ab226/angeliski/Algoritmos%20Descomplicados/13.jpg",alt:"SQL Manager"}}),a._v(" "),e("figcaption",[a._v('"The Solution"')])]),a._v(" "),e("p",[a._v('Se você só tiver uma instancia instalada, vai aparecer como acima, rodando a instancia e o navegador. Caso tenha mais, priorize na qual você vai tentar se conectar. Entre em "Configuração de Rede do SQL Server" -> Protocolos para" o nome da instancia que você vai trabalhar. A tela abaixo vai aparecer.\n')]),e("figure",[e("img",{attrs:{src:"http://i866.photobucket.com/albums/ab226/angeliski/Algoritmos%20Descomplicados/14.jpg",alt:"SQL"}}),a._v(" "),e("figcaption",[a._v('"DESABILITADO? Não vai dar certo nunca!"')])]),e("p"),a._v(" "),e("p",[a._v('Como você deve ter reparado assim que abriu a tela, apenas "Memoria Compartilhada" esta habilitado. O mais importante, TCP/IP esta desabilitado. Entao nem preciso dizer que é para habilitar né? agora sim, tudo funcionando.')]),a._v(" "),e("figure",[e("img",{attrs:{src:"http://i866.photobucket.com/albums/ab226/angeliski/Algoritmos%20Descomplicados/12.jpg",alt:"Erro Again"}}),a._v(" "),e("figcaption",[a._v('"Esse cara ta me zuando, continua o tal TCP/IP..."')])]),a._v(" "),e("p",[a._v("Eu sei, foi nessa hora que o desespero começou, já que tava tudo certo. Eis que o "),e("a",{attrs:{href:"www.google.com.br",title:"O Mestre!"}},[a._v("Mestre")]),a._v(' me contou que existe um negocio chamado Portas Dinamicas. "What the fuck?" Tenso amigão, tenso. Vamos a Solução, volte lá onde você habilitou o TCP/IP, e selecione as Propriedades(do TCP/IP), vá até a aba Endereços IP e siga até o fim dela. Eis que aparece nossa inimiga. Em porta TCP coloque 1433. finito.\n')]),e("figure",[e("img",{attrs:{src:"http://i866.photobucket.com/albums/ab226/angeliski/Algoritmos%20Descomplicados/17.jpg",alt:"Dinamicas"}}),a._v(" "),e("figcaption",[a._v('"O Troço Chato.."')])]),e("p"),a._v(" "),e("p",[a._v("Eu concordo, chato mesmo. Você pode rodar se quiser, mas vou ser sincero: Vai dar erro.")]),a._v(" "),e("figure",[e("img",{attrs:{src:"http://i866.photobucket.com/albums/ab226/angeliski/Algoritmos%20Descomplicados/18.jpg",alt:"Erro Final"}}),a._v(" "),e("figcaption",[a._v('"Isso não vai dar certo nunca..."')])]),a._v(" "),e("p",[a._v('Calma, ultima etapa. Quando você usa autenticação integrada do Windows, o Windows precisa de uma dll para saber o que fazer. Então você tem de ir lá na pasta do driver que você baixou, tem uma pasta auth (adivinha porque?), entra na pasta que convem a sua arquitetura e copia a dll que está lá para o System32 do seu computador. FIM! Convem prestar atenção em uma coisa aqui, o databaseName tem de ser um banco valido no seu SQL Server, se não haverão outros erros. Alem disso, você pode (e deve) querer conectar o programa sem a autenticação do windows, nesse caso você deve fazer do seguinte modo: ir até a linha da "String connectionUrl", no fim dela você retira a informação "integratedSecurity=true;"; Alem disso tem uma linha onde é chamado o metodo DriverManager.getConnection(connectionUrl), que passa só a url como parametro, nesse metodo você deve agora passar o usuario e a senha, ficando assim a mudança:  DriverManager.getConnection(connectionUrl,"USUARIO","SENHA")😭'),e("a",{attrs:{href:"http://pastebin.com/77aeGMtW",title:"Codigo!",target:"_blank",rel:"noopener noreferrer"}},[a._v("Se você quer saber do codigo.."),e("OutboundLink")],1),a._v(")")]),a._v(" "),e("p",[a._v("Duvidas? Gostou? Me acha um idiota? Comenta!")]),a._v(" "),e("p",[a._v("Angeliski")])])}),[],!1,null,null,null);o.default=r.exports}}]);