# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>

Apresente os cenários de testes utilizados na realização dos testes da sua aplicação. Escolha cenários de testes que demonstrem os requisitos sendo satisfeitos.

Enumere quais cenários de testes foram selecionados para teste. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.
 Os testes funcionais a serem realizados no aplicativo são descritos a seguir.

|Caso de Teste|CT-01 Página inicial|
|-------------|--------------------|
|Requisitos associados|RF-01 A Aplicação deve apresentar na página principal a descrição do serviço e como ele pode ajudar o usuário; <br> RF-02 A aplicação deve apresentar um menu simples, intendível e interativo.|
|Objetivo do teste|Verificar se a tela inicial está iniciando corretamente.|
|Passos|1) Acessar o Aplicativo. <br> 2) Logar no aplicativo. <br> 3) Visualizar a tela principal de login.|
|Critérios de êxito|- A tela deve aparecer de forma configurada. <br> - O texto da tela inicial deve aparecercom entrada de login. 

|Caso de Teste|CT-02 Login|
|-------------|--------------------|
|Requisitos associados|RF-03 A tela deve apresentar de forma explícita o local de cadastro do usuário simplificado (via cadastro padrão ou novo usuário).|
|Objetivo do teste|Verificar se a tela principal de login está acontecendo corretamente.|
|Passos|1) Acessar o aplicativo. <br> 2) Iniciar o aplicativo. <br> 3) Visualizar a página de login.|
|Critérios de êxito|- A tela deve de forma configurada. <br> - A tela deve permitir realizar o cadastro do usuário.|

|Caso de Teste|CT-03 Sobre Nós|
|-------------|--------------------|
|Requisitos associados|RF-02 A aplicação deve apresentar um menu simples, intendível e interativo. <br> RF-05 O aplicativo deve permitir visualizar as informações de compra de viagens.|
|Objetivo do teste|Verificar se a tela "Sobre Nós" está iniciando corretamente.|
|Passos|1) Acessar a aplicação. <br> 2) Abrir a tela inicial. <br> 3) Visualizar a página Sobre Nós.|
|Critérios de êxito|- A tela principal deve aparecer de forma configurada.|

|Caso de Teste|CT-04 Escolher um destino|
|-------------|-------------------------------------------------------------------------------------------------------------------------|
|Requisitos associados|RF-04 A aplicação deve oferecer um campo que permita ao usuário consulte destino e passagens através do aplicativo. <br> RF-05 A Aplicação deve permitir visualizar as informações de destinos com datas pré estabelecidas. <br> RF-06 A aplicação de permitir selecionar quantidade de usuários paracada viagem. <br> RF-07 A aplicação deve permitir verificar as viagens e  salvas como preferidas. <br> RF-08 A aplicação deve permitir que usuários possam comentar nos destinos dando feedback sobre os mesmos. <br> RF-09 A aplicação deve exibir os comentários registrados juntamente com o destinos exibido.|
|Objetivo do teste|Verificar se aaplicação "Sobre Nós" está acontecendo corretamente.|
|Passos|1) Acessar o Aplicativo. <br> 2) logar com usuário cadastrado. <br> 3) Visualizar a página a página inicial do App.|
|Critérios de êxito|- A tela deve aparecer de forma configurada com opção de consulta aos destinos.|

## Ferramentas de Testes (Opcional)

Comente sobre as ferramentas de testes utilizadas.
 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
