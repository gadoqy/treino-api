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


servidor.listen(PORT, () => {
    console.log(`API subiu na porta ${PORT}`);
});
