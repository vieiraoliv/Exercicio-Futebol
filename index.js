var _a, _b, _c;
// ----- CAMPEONATO -----
(_a = document.getElementById('form-campeonato')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (e) {
    e.preventDefault();
    var nome = document.getElementById('nome').value;
    var categoria = document.getElementById('categoria').value;
    var tipo = document.getElementById('tipo').value;
    var dataInicio = document.getElementById('inicio').value;
    var dataFim = document.getElementById('fim').value;
    var novo = { nome: nome, categoria: categoria, tipo: tipo, dataInicio: dataInicio, dataFim: dataFim };
    var campeonatos = JSON.parse(localStorage.getItem('campeonatos') || '[]');
    campeonatos.push(novo);
    localStorage.setItem('campeonatos', JSON.stringify(campeonatos));
    alert('Campeonato cadastrado com sucesso!');
    document.getElementById('form-campeonato').reset();
    atualizarSelectCampeonatos();
});
// ----- PARTIDA -----
(_b = document.getElementById('form-partida')) === null || _b === void 0 ? void 0 : _b.addEventListener('submit', function (e) {
    e.preventDefault();
    var mandante = document.getElementById('mandante').value;
    var visitante = document.getElementById('visitante').value;
    var campeonatoId = parseInt(document.getElementById('campeonato').value);
    var nova = { mandante: mandante, visitante: visitante, campeonatoId: campeonatoId };
    var partidas = JSON.parse(localStorage.getItem('partidas') || '[]');
    partidas.push(nova);
    localStorage.setItem('partidas', JSON.stringify(partidas));
    alert('Partida cadastrada com sucesso!');
    document.getElementById('form-partida').reset();
});
// ----- TIME -----
(_c = document.getElementById('form-time')) === null || _c === void 0 ? void 0 : _c.addEventListener('submit', function (e) {
    e.preventDefault();
    var nome = document.getElementById('nome-time').value;
    var sigla = document.getElementById('sigla').value.toUpperCase();
    var novoTime = { nome: nome, sigla: sigla };
    var times = JSON.parse(localStorage.getItem('times') || '[]');
    times.push(novoTime);
    localStorage.setItem('times', JSON.stringify(times));
    alert('Time cadastrado com sucesso!');
    document.getElementById('form-time').reset();
});
// ----- ATUALIZA SELECT DE CAMPEONATO -----
function atualizarSelectCampeonatos() {
    var select = document.getElementById('campeonato');
    select.innerHTML = '<option value="">Selecione o campeonato</option>';
    var campeonatos = JSON.parse(localStorage.getItem('campeonatos') || '[]');
    campeonatos.forEach(function (c, i) {
        var opt = document.createElement('option');
        opt.value = i.toString();
        opt.text = "".concat(c.nome, " (").concat(c.categoria, ")");
        select.appendChild(opt);
    });
}
document.addEventListener('DOMContentLoaded', atualizarSelectCampeonatos);
