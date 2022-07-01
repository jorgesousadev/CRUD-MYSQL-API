# CRUD-MYSQL-API
 Criação e Consumo de API no Node.js com MySQL

# Responsáveis por esse projeto

###### Jorge Sousa
[<img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" />](https://github.com/jorgesousadev) [<img src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" />](https://www.linkedin.com/in/jorgesousag/)

###### Jefferson Despezzio

[<img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" />](https://github.com/Jefferson1202) [<img src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" />](https://www.linkedin.com/in/jefferson-despezzio-2b893a206/)

###### Matheus Machado 
[<img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" />](https://github.com/mathxusohai) [<img src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" />](https://www.linkedin.com/in/matheus-machado-769949200/)

###### Larissa Almeida

[<img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" />](https://github.com/larizwn) [<img src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" />](https://www.linkedin.com/in/larizwn/)


### Wireframe

![](/Screenshot/wireframe.png)
![](/Screenshot/wireframe2.png)

##### É um aplicativo CRUD que vem incluso upload de imagens, no caso podemos inserir foto do produto que vai ser adicionado no crud. Ele tem produtos e você pode adicionar, atualizar ou excluir produtos.

###### Rodando o projeto no Azure
![](/Screenshot/print4.png)
![](/Screenshot/print5.png)
###### Rodando o projeto localmente
![](/Screenshot/print.png)
![](/Screenshot/print2.png)

## As versões de pacote que utiliza esse projeto

```
{
    "body-parser": "^1.19.0",
    "bootstrap": "^5.0.1",
    "bootstrap-icons": "^1.5.0",
    "cors": "^2.8.5",
    "ejs": "^3.1.6",
    "express": "^4.17.1",
    "multer": "^1.4.2",
    "mysql": "^2.18.1",
    "mysql2": "^2.2.5"
}
```    
## Como testar esse projeto

**1ª Instale no seu computador o [Node.JS](https://nodejs.org/en/download/) | [Como instalar o Node.js, NPM e o React no Windows](https://www.devmedia.com.br/como-instalar-o-node-js-npm-e-o-react-no-windows/40329)**

**2ª Instale no seu computador o [XAMPP](https://www.apachefriends.org/pt_br/download.html) | [Como instalar o XAMPP](https://terminaldeinformacao.com/2017/06/07/como-instalar-xampp/) | [Aprendendo a trabalhar com MySQL](https://www.devmedia.com.br/primeiros-passos-no-mysql/28438)**

**3ª Baixe os arquivos desse repositório e abra em uma IDE de sua preferência**

**4ª Digite ***npm install*** e dê enter no terminal da IDE ou pelo CMD como preferir, isso irá baixar a pasta node_modules no diretório do projeto.**

**5ª Crie um banco de dados no XAMPP chamado ***senai115*** e em seguida crie a seguinte tabela:.**

```
{
   CREATE TABLE `produtos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `produto` varchar(150) NOT NULL,
  `imagem` varchar(500) DEFAULT NULL,
  `preco` decimal(5,2) NOT NULL,
   PRIMARY KEY (`id`)
)  ENGINE=InnoDB DEFAULT CHARSET=utf8;
}
```    

**6ª Dentro do diretorio do projeto, digite ***node index.js*** e dê enter no terminal para iniciar a API.**

**Obs: Não esqueça de mudar a senha no arquivo ***index.js*** em ***password***, se quiser pode também excluir esse codigo ***password:'jorge7',*** se no caso você não tenha criado uma senha para o seu banco de dados.**
```
{
function execSQLQuery(sqlqry, res){
    const connection = mysql.createConnection({
        host                 : 'localhost',
        port                 : 3306,
        user                 : 'root',
        password             : 'jorge7',  
        database             : 'senai115'
    });
}
```  
**7ª Para visualizar o crud e adicionar dados , abra o arquivo index.html que tem no diretório do projeto.**

![](/Screenshot/print3.png)







