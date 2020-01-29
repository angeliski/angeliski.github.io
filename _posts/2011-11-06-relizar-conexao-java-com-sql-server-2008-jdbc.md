---
title: "Relizar Conexão Java com Sql Server 2008 - JDBC"
date: "2011-11-06"
---

Depois de apanhar por 3 dias de varios computadores que não queriam conectar no banco de MODO algum, finalmente descobri o problema. Agora vamos a um tutorial pra deixar bem claro de como fazer isso.

# INSTALANDO O SQL SERVER 2008

Resolvi começar dessa parte por um motivo bem simples,a primeira vez que eu tive problemas com o Sql Server 2008 foi por que durante a instalação fizeram besteira. Logo, vamos de cara prevenir que isso aconteça. A Instalação foi feita com base no SQL SERVER 2008 R2 estou falando do express aqui, mas não tem muita diferença, caso haja alguma coisa que você não entendeu pode mandar o comentário que eu tento ajudar.

<ImagePoster caption="Nova Instalação" :src="require('@/assets/img/sql-server/01.jpg')" :width="560" />

Essa opção só aparece se você não tiver instalado o sql ainda.

<ImagePoster caption="Torça pra não dar erro" :src="require('@/assets/img/sql-server/02.jpg')" :width="560" />

Normalmente não ocorre erro algum aqui, MAS eu ja tive problemas com isso, a solução (no meu caso) foi simples, a linguagem do SO era diferente da que estava no pacote. Ou seja se você baixou o Sql em ING e tem SO em PT ele vai dar erro, e vice-versa. Bom em seguida temos o classico termos e tal, LEIA e aceite, enfim, vamos ao que normalmente costuma dar problema.

<ImagePoster caption="AQUI É QUE SEMPRE COLOCAM ERRADO..." :src="require('@/assets/img/sql-server/09.jpg')" :width="560" />

Muitos problemas se dão nessa etapa, grande parte das pessoas vai apertando avançar sem nem mesmo ler nada. Depois eles tem um baita problema para resolver e não sabem nem porque. COLOQUE NO MODO MISTO! "Porque Angeliski? Que diferença faz?" Assim, pra começo de conversa esse um banco que funciona como SERVIDOR não pode se autenticar só pelo windows né? O mais importante é que caso você use aplicações cliente/servidor, elas não vão logar no seu BD se não for atraves de um usuário (normalmente o SA). Caso você ja tenha instalado seu SQL Server e não tenha feito isso, manda um comentário que eu coloco onde você tem de acertar.

<ImagePoster caption="Se você chegou aqui, comemore!" :src="require('@/assets/img/sql-server/10.jpg')" :width="560" />

Ta instalado o negocio, agora vamos ao JAVA!

# Conectando o Java ao SQL!

Finalmente chegamos onde queriamos. Primeiro o codigo:

```java
import java.sql.*;
 
public class Main {
  public static void main(String[] args) {
    // string de conexão...usando Windows Authentication
    String connectionUrl = "jdbc:sqlserver://localhost:1433;" +
      "databaseName=estudos;integratedSecurity=true;";
 
    try {
      Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver").newInstance();
      Connection conn = DriverManager.getConnection(connectionUrl);
      System.out.println("Conexão obtida com sucesso.");
    }
    catch (SQLException ex) {
      System.out.println("SQLException: " + ex.getMessage());
      System.out.println("SQLState: " + ex.getSQLState());
      System.out.println("VendorError: " + ex.getErrorCode());
    }
    catch (Exception e) {
       
      System.out.println("Problemas ao tentar conectar com o banco de dados: " + e);
    }
  }
}
```

Uma coisa muito importante que não deve ser esquecida é  adicionar o driver ao projeto.( [Se você não sabe como fazer isso no Eclipse...](http://www.wikihow.com/Add-JARs-to-Project-Build-Paths-in-Eclipse-%28Java%29 "Adicionar Jar no Eclipse")) O Link da microsoft você encontra [aqui](https://www.microsoft.com/pt-BR/download/details.aspx?id=11774 "DRIVER JDBC").Sim, ele funciona! Não adicione os dois, só o sqljdbc4, que da suporte. Agora é só executar e pronto!

<ImagePoster caption="TCP/IP? Não! Era pra funcionar!" :src="require('@/assets/img/sql-server/11.jpg')" :width="590" />

"Angeliski, no seu pode até funcionado, mas aqui necas."

Eu sei, frustante. Mas vamos lá, você vai procurar no iniciar, na pasta do Sql uma ferramenta chamada "SQL Server Configuration Manager" .

<ImagePoster caption="SQL Manager - The Solution" :src="require('@/assets/img/sql-server/12.jpg')" :width="590" />

Se você só tiver uma instancia instalada, vai aparecer como acima, rodando a instancia e o navegador. Caso tenha mais, priorize na qual você vai tentar se conectar. Entre em "Configuração de Rede do SQL Server" -> Protocolos para" o nome da instancia que você vai trabalhar. A tela abaixo vai aparecer.

<ImagePoster caption="DESABILITADO? Não vai dar certo nunca!" :src="require('@/assets/img/sql-server/13.jpg')" :width="590" />

Como você deve ter reparado assim que abriu a tela, apenas "Memoria Compartilhada" esta habilitado. O mais importante, TCP/IP esta desabilitado. Entao nem preciso dizer que é para habilitar né? agora sim, tudo funcionando.

<ImagePoster caption="Esse cara ta me zuando, continua o tal TCP/IP..." :src="require('@/assets/img/sql-server/11.jpg')" :width="590" />

Eu sei, foi nessa hora que o desespero começou, já que tava tudo certo. Eis que o [Mestre](http://www.google.com.br) me contou que existe um negocio chamado Portas Dinamicas. "What the fuck?" Tenso amigão, tenso. Vamos a Solução, volte lá onde você habilitou o TCP/IP, e selecione as Propriedades(do TCP/IP), vá até a aba Endereços IP e siga até o fim dela. Eis que aparece nossa inimiga. Em porta TCP coloque 1433. É finito.

<ImagePoster caption="O Troço Chato..." :src="require('@/assets/img/sql-server/16.jpg')" :width="590" />

Eu concordo, chato mesmo. Você pode rodar se quiser, mas vou ser sincero: Vai dar erro.

<ImagePoster caption="Isso não vai dar certo nunca..." :src="require('@/assets/img/sql-server/17.jpg')" :width="590" />


Calma, ultima etapa. Quando você usa autenticação integrada do Windows, o Windows precisa de uma dll para saber o que fazer. Então você tem de ir lá na pasta do driver que você baixou, tem uma pasta auth (adivinha porque?), entra na pasta que convem a sua arquitetura e copia a dll que está lá para o System32 do seu computador. FIM! Convem prestar atenção em uma coisa aqui, o databaseName tem de ser um banco valido no seu SQL Server, se não haverão outros erros. Alem disso, você pode (e deve) querer conectar o programa sem a autenticação do windows, nesse caso você deve fazer do seguinte modo: ir até a linha da "String connectionUrl", no fim dela você retira a informação "integratedSecurity=true;"; Alem disso tem uma linha onde é chamado o metodo DriverManager.getConnection(connectionUrl), que passa só a url como parametro, nesse metodo você deve agora passar o usuario e a senha, ficando assim a mudança:

```java{11}
import java.sql.*;
 
public class Main {
  public static void main(String[] args) {
    // string de conexão...usando Windows Authentication
    String connectionUrl = "jdbc:sqlserver://localhost:1433;" +
      "databaseName=estudos;";
 
    try {
      Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver").newInstance();
      Connection conn = DriverManager.getConnection(connectionUrl,"sa","1234");
      System.out.println("Conexão obtida com sucesso.");
    }
    catch (SQLException ex) {
      System.out.println("SQLException: " + ex.getMessage());
      System.out.println("SQLState: " + ex.getSQLState());
      System.out.println("VendorError: " + ex.getErrorCode());
    }
    catch (Exception e) {
       
      System.out.println("Problemas ao tentar conectar com o banco de dados: " + e);
    }
  }
}
 ```

<Signature />
