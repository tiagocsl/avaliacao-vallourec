Após a descompactação dos arquivos, a primeira coisa a se fazer, é adicionar os usúarios e suas respectivas tags.
1 - Navegar até a pasta "Client".
> Entrar na pasta "Assets".
> Entrar na pasta "JS".
> Entrar na pasta "JSON"
2 - Abrir o arquivo "employees" com um editor de texto.
> Havéra uma extrutura parecida com:
{
      "nomes":[
	"nome 1",
	"nome 2",
	"nome 3",
	"nome 4",
	"nome 5",
	    ...
	    ],
       "tags":[
	"1",
	"2",
	"3",
	"4",
	"5",
	 ...
	  ]
}

> SEMPRE, colocar os valores entre "", e sempre separar cada valor por vírgula.
> Só salvar, que o os usúarios e suas respectivas tags, irão estar setadas.

3 - Próximo passo é criar uma planilha no Google Sheets, onde irá obter o ID da própria, para o lançamento de dados.
> Após a planilha ser criada, na barra de endereço do site terá algo parecido com:
"https://docs.google.com/spreadsheets/d/1Xy5TjHoid=0"

> O ID da planilha é o código localizado após '/d/' e antes de '/edit'
> O código do exemplo será "1Xy5Tjh********************************nnbVc"

4 - Após obtido  o ID da planilha, próximo passo será inserir esse ID no aplicativo.
> Navegue até a pasta "Client".
> Entrar na pasta "Assets".
> Havéra um arquivo chamado "IDPLANILHA", abra-o com qualquer editor de texto.
> Cole o código de sua planilha no local especificado.
> O VALOR SEMPRE DEVERÁ ESTAR ENTRE "".

5 - Após tudo configurado, execute o arquivo "server.py" na pasta principal.
> Agora vá para um navegador de sua escolhar
> Digite na barra de endereço "localhost:8000"

6 - No primeiro envio, irá pedir para logar em uma conta da Google, e autorizar acesso a planilha. 
> Logue com a conta no qual foi criada a planilha no passo 3
> Autorize, e logo após uma janela de loading irá aparecer, isso significa que seus dados estão sendo enviados.

OBS: Caso dê algum erro de autorização, tente compartilhar a planilha com a opção "para qualquer um que tiver o link".