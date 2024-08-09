import express from 'express';


console.clear();

const servidor = express();
const PORT = 157;
servidor.use(express.json());

servidor.post('/treino/leituraLivro', (req, res) => {
    const livro = req.body.livro;
    const paginas = req.body.paginas;
    const tempoPorpagina = req.body.tempoPorpagina;


    const tempoTotalSegundos = paginas * tempoPorpagina;
    const tempoTotalHoras = tempoTotalSegundos / 3600;

    res.json({
        tempoTotalHoras: tempoTotalHoras.toFixed(2)
    });
});

servidor.post('/treino/cinema/validacao', (req, res) => {
    const { idadePessoa1, idadePessoa2, Classificacao } = req.body;

    const classificacao = parseInt(Classificacao, 10);

    if (![0, 12, 14, 16, 18].includes(classificacao)) {
        return res.status(400).json({ error: "Classificação inválida. Deve ser um dos valores: 0, 12, 14, 16, 18." });
    }

    const podeAssistir = idadePessoa1 >= classificacao && idadePessoa2 >= classificacao;


    res.json({ podeAssistir });
});

servidor.get('/treino/tabuada/:numero', (req, res) => {
    const numero = parseInt(req.params.numero, 10);

    // Função para calcular a tabuada
    function calcularTabuada(numero) {
        let tabuada = [];
        for (let i = 1; i <= 10; i++) {
            tabuada.push(numero * i);
        }
        return tabuada;
    }

    if (isNaN(numero)) {
        return res.status(400).json({ error: 'Número inválido. Ex: 1 - 2 - 3 -  4 - 5 - 6' });
    }

    const resultado = calcularTabuada(numero);
    res.json({ tabuada: resultado });
});


servidor.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
