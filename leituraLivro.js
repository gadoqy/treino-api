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

servidor.listen(PORT, () => {
    console.log(`API subiu na porta ${PORT}`);
});
