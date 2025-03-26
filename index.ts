interface Campeonato {
    nome: string;
    categoria: 'amador' | 'profissional';
    tipo: 'mata-mata' | 'pontos-corridos';
    dataInicio: string;
    dataFim: string;
  }
  
  interface Partida {
    mandante: string;
    visitante: string;
    campeonatoId: number;
  }
  
  interface Time {
    nome: string;
    sigla: string;
  }
  
  // ----- CAMPEONATO -----
  document.getElementById('form-campeonato')?.addEventListener('submit', (e) => {
    e.preventDefault();
  
    const nome = (document.getElementById('nome') as HTMLInputElement).value;
    const categoria = (document.getElementById('categoria') as HTMLSelectElement).value as 'amador' | 'profissional';
    const tipo = (document.getElementById('tipo') as HTMLSelectElement).value as 'mata-mata' | 'pontos-corridos';
    const dataInicio = (document.getElementById('inicio') as HTMLInputElement).value;
    const dataFim = (document.getElementById('fim') as HTMLInputElement).value;
  
    const novo: Campeonato = { nome, categoria, tipo, dataInicio, dataFim };
  
    const campeonatos: Campeonato[] = JSON.parse(localStorage.getItem('campeonatos') || '[]');
    campeonatos.push(novo);
    localStorage.setItem('campeonatos', JSON.stringify(campeonatos));
  
    alert('Campeonato cadastrado com sucesso!');
    (document.getElementById('form-campeonato') as HTMLFormElement).reset();
    atualizarSelectCampeonatos();
  });
  
  // ----- PARTIDA -----
  document.getElementById('form-partida')?.addEventListener('submit', (e) => {
    e.preventDefault();
  
    const mandante = (document.getElementById('mandante') as HTMLInputElement).value;
    const visitante = (document.getElementById('visitante') as HTMLInputElement).value;
    const campeonatoId = parseInt((document.getElementById('campeonato') as HTMLSelectElement).value);
  
    const nova: Partida = { mandante, visitante, campeonatoId };
  
    const partidas: Partida[] = JSON.parse(localStorage.getItem('partidas') || '[]');
    partidas.push(nova);
    localStorage.setItem('partidas', JSON.stringify(partidas));
  
    alert('Partida cadastrada com sucesso!');
    (document.getElementById('form-partida') as HTMLFormElement).reset();
  });
  
  // ----- TIME -----
  document.getElementById('form-time')?.addEventListener('submit', (e) => {
    e.preventDefault();
  
    const nome = (document.getElementById('nome-time') as HTMLInputElement).value;
    const sigla = (document.getElementById('sigla') as HTMLInputElement).value.toUpperCase();
  
    const novoTime: Time = { nome, sigla };
  
    const times: Time[] = JSON.parse(localStorage.getItem('times') || '[]');
    times.push(novoTime);
    localStorage.setItem('times', JSON.stringify(times));
  
    alert('Time cadastrado com sucesso!');
    (document.getElementById('form-time') as HTMLFormElement).reset();
  });
  
  // ----- ATUALIZA SELECT DE CAMPEONATO -----
  function atualizarSelectCampeonatos() {
    const select = document.getElementById('campeonato') as HTMLSelectElement;
    select.innerHTML = '<option value="">Selecione o campeonato</option>';
  
    const campeonatos: Campeonato[] = JSON.parse(localStorage.getItem('campeonatos') || '[]');
  
    campeonatos.forEach((c, i) => {
      const opt = document.createElement('option');
      opt.value = i.toString();
      opt.text = `${c.nome} (${c.categoria})`;
      select.appendChild(opt);
    });
  }
  
  document.addEventListener('DOMContentLoaded', atualizarSelectCampeonatos);

  