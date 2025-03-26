interface Campeonato {
    nome: string;
    categoria: 'amador' | 'profissional';
    tipo: 'mata-mata' | 'pontos-corridos';
    dataInicio: string;
    dataFim: string;
  }
  
  document.getElementById('form-campeonato')?.addEventListener('submit', (event) => {
    event.preventDefault();
  
    const nome = (document.getElementById('nome') as HTMLInputElement).value;
    const categoria = (document.getElementById('categoria') as HTMLSelectElement).value as 'amador' | 'profissional';
    const tipo = (document.getElementById('tipo') as HTMLSelectElement).value as 'mata-mata' | 'pontos-corridos';
    const dataInicio = (document.getElementById('inicio') as HTMLInputElement).value;
    const dataFim = (document.getElementById('fim') as HTMLInputElement).value;
  
    const novoCampeonato: Campeonato = { nome, categoria, tipo, dataInicio, dataFim };
  
    const campeonatos = JSON.parse(localStorage.getItem('campeonatos') || '[]');
    campeonatos.push(novoCampeonato);
    localStorage.setItem('campeonatos', JSON.stringify(campeonatos));
  
    alert('Campeonato cadastrado com sucesso!');
  });
  