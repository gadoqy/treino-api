Projeto: API de Treino com Express
Descrição
Este projeto é uma API simples desenvolvida com Express.js que fornece várias funcionalidades, como cálculo de tempo de leitura de livros, validação de idade para assistir a filmes, cálculo de tabuada, verificação da ordem de números, análise de notas e combinação de cores.

Tecnologias Usadas
Node.js
Express.js

                    Clone o repositório:
`git clone https://github.com/seu-usuario/nome-do-repositorio.git`

`Uso`
`1. Cálculo de Tempo de Leitura de Livro`
`Rota: POST /treino/leituraLivro`

`{
    "livro": "Dom Casmurro",
    "paginas": 200,
    "tempoPorpagina": 60
}`

2. Validação de Idade para Assistir Filme
Rota: `POST /treino/cinema/validacao`

Exemplo de Requisição:
`{
    "idadePessoa1": 16,
    "idadePessoa2": 14,
    "Classificacao": "14"
}`

3. Cálculo de Tabuada
Rota: `GET /treino/tabuada/:numero`

Exemplo de Requisição:
`GET /treino/tabuada/5`

4. Verificação de Ordem de Números
Rota: POST /treino/ordenacao

Exemplo de Requisição: 
`{
    "numeros": [1, 3, 5, 7, 9]
}`

5. Análise de Notas
Rota: `POST /treino/analiseNotas`

Exemplo de Requisição:
`{
    "notas": [8, 6, 9, 7, 10]
}`

6. Combinação de Cores
Rota: `GET /combinar-cores`

Exemplo de Requisição:
`GET /combinar-cores?cor1=vermelho&cor2=azul`
