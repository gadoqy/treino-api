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
        return res.status(400).json({ error: 'Número inválido.' });
    }

    const resultado = calcularTabuada(numero);
    res.json({ tabuada: resultado });
});

servidor.post('/treino/ordenacao', (req, res) => {
    const { numeros } = req.body;

    function verificarOrdem(numeros) {
        let crescente = true;
        let decrescente = true;
    
        for (let i = 0; i < numeros.length - 1; i++) {
            if (numeros[i] > numeros[i + 1]) {
                crescente = false;
            }
            if (numeros[i] < numeros[i + 1]) {
                decrescente = false;
            }
        }
    
        if (crescente) {
            return "crescente";
        } else if (decrescente) {
            return "decrescente";
        } else {
            return "desordenados";
        }
    }

    if (!Array.isArray(numeros)) {
        return res.status(400).json({ error: "O campo 'numeros' deve ser um vetor." });
    }

    const ordem = verificarOrdem(numeros);
    return res.status(200).json({ ordem: ordem });
});

servidor.post('/treino/analiseNotas', (req, res) => {
    const { notas } = req.body;

    function calcularEstatisticas(notas) {
        let soma = 0;
        let maiorNota = notas[0];
        let menorNota = notas[0];
    
        for (let i = 0; i < notas.length; i++) {
            soma += notas[i];
    
            if (notas[i] > maiorNota) {
                maiorNota = notas[i];
            }
    
            if (notas[i] < menorNota) {
                menorNota = notas[i];
            }
        }
    
        const media = soma / notas.length;
    
        return {
            media: media,
            maiorNota: maiorNota,
            menorNota: menorNota
        };
    }

    if (notas.length === 0) {
        return res.status(400).json({ error: "O campo 'notas' deve conter pelo menos uma nota." });
    }

    const estatisticas = calcularEstatisticas(notas);
    return res.status(200).json(estatisticas);
});

servidor.get('/combinar-cores', (req, res) => {
    const { cor1, cor2 } = req.query;

    function combinarCores(cor1, cor2) {
        const combinacoes = {
            "vermelho": "roxo",
            "azul": "roxo",
            "vermelho_amarelo": "laranja",
            "amarelo_vermelho": "laranja",
            "azul_amarelo": "verde",
            "amarelo_azul": "verde"
        };
    
        const chave = `${cor1.toLowerCase()}_${cor2.toLowerCase()}`;
    
        return combinacoes[chave] || "Combinação inválida";
    }

    const coresValidas = ["vermelho", "azul", "amarelo"];
    if (!coresValidas.includes(cor1.toLowerCase()) || !coresValidas.includes(cor2.toLowerCase())) {
        return res.status(400).json({ error: "As cores devem ser 'vermelho', 'azul' ou 'amarelo'." });
    }

    const corResultante = combinarCores(cor1, cor2);
    return res.status(200).json({ corResultante: corResultante });
});

servidor.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
