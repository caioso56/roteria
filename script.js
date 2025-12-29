// Estruturas de copy com suas descrições (traduzidas para português)
const estruturas = {
    'AIDA': {
        nome: 'AIDA',
        descricao: 'Atenção (gancho) → Interesse (contexto/dor) → Desejo (benefícios/prova) → Ação (CTA)',
        etapas: ['Atenção (Gancho)', 'Interesse (Contexto/Dor)', 'Desejo (Benefícios/Prova)', 'Ação (CTA)']
    },
    'PAS': {
        nome: 'PAS',
        descricao: 'Problema → Agitação (consequências, custo de não agir) → Solução (mecanismo + CTA)',
        etapas: ['Problema', 'Agitação (Consequências)', 'Solução (Mecanismo + CTA)']
    },
    'BAB': {
        nome: 'BAB',
        descricao: 'Antes (situação atual) → Depois (vida com a solução) → Ponte (como chega lá + CTA)',
        etapas: ['Antes (Situação Atual)', 'Depois (Vida com a Solução)', 'Ponte (Como Chega Lá + CTA)']
    },
    'QUEST': {
        nome: 'QUEST',
        descricao: 'Qualificar (pra quem é) → Entender (dor) → Educar (insight) → Estimular (benefícios/prova) → Transicionar (CTA)',
        etapas: ['Qualificar (Pra Quem É)', 'Entender (Dor)', 'Educar (Insight)', 'Estimular (Benefícios/Prova)', 'Transicionar (CTA)']
    },
    'FAB': {
        nome: 'FAB',
        descricao: 'Funcionalidade (o que tem) → Vantagem (por que isso importa) → Benefício (o que muda na vida do cliente)',
        etapas: ['Funcionalidade (O Que Tem)', 'Vantagem (Por Que Isso Importa)', 'Benefício (O Que Muda na Vida do Cliente)']
    },
    '4Ps': {
        nome: '4Ps',
        descricao: 'Promessa → Imagem (visualizar o resultado) → Prova → Impulso (CTA/urgência)',
        etapas: ['Promessa', 'Imagem (Visualizar o Resultado)', 'Prova', 'Impulso (CTA/Urgência)']
    },
    'PPP': {
        nome: 'PPP',
        descricao: 'Prévia (o que vai aprender/ver) → Prova (por que acreditar) → Proposta (oferta + CTA)',
        etapas: ['Prévia (O Que Vai Aprender/Ver)', 'Prova (Por Que Acreditar)', 'Proposta (Oferta + CTA)']
    },
    'StorySelling': {
        nome: 'Venda por História',
        descricao: 'Contexto → Conflito → Virada/Insight → Resultado → Moral → CTA',
        etapas: ['Contexto', 'Conflito', 'Virada/Insight', 'Resultado', 'Moral', 'CTA']
    },
    'Problem-Mechanism-Solution': {
        nome: 'Problema–Mecanismo–Solução',
        descricao: 'Dor → Por que não funcionou antes (erro comum) → Novo mecanismo → Como aplicar → CTA',
        etapas: ['Dor', 'Por Que Não Funcionou Antes (Erro Comum)', 'Novo Mecanismo', 'Como Aplicar', 'CTA']
    },
    'SPIN': {
        nome: 'SPIN',
        descricao: 'Situação → Problema → Implicação → Necessidade-Pagamento (ganho) → CTA',
        etapas: ['Situação', 'Problema', 'Implicação', 'Necessidade-Pagamento (Ganho)', 'CTA']
    },
    'ACCA': {
        nome: 'ACCA',
        descricao: 'Conscientização → Compreensão → Convencimento → Ação (CTA)',
        etapas: ['Conscientização', 'Compreensão', 'Convencimento', 'Ação (CTA)']
    },
    'Hook-Value-CTA': {
        nome: 'Gancho–Valor–CTA',
        descricao: 'Gancho forte → 1 a 3 pontos de valor (rápidos) → CTA direto (com próximo passo)',
        etapas: ['Gancho Forte', 'Pontos de Valor (1-3)', 'CTA Direto']
    }
};

// Função para calcular tempo por etapa baseado na duração total
function calcularTempoPorEtapa(tempoTotal, numEtapas) {
    // Reserva 10% do tempo para transições e respiração
    const tempoUtil = tempoTotal * 0.9;
    const tempoPorEtapa = Math.floor(tempoUtil / numEtapas);
    return tempoPorEtapa;
}

// Função para gerar o roteiro (fallback local)
function gerarRoteiro(tema, tempo, gancho, estrutura, cta) {
    const estruturaInfo = estruturas[estrutura];
    const numEtapas = estruturaInfo.etapas.length;
    const tempoPorEtapa = calcularTempoPorEtapa(tempo, numEtapas);
    
    // Mapear valor do gancho para texto legível
    const ganchosTexto = {
        'declaracao-polemica': 'Declaração polêmica ou contrária ao senso comum',
        'verdade-dura': 'Verdade dura',
        'erro-comum': 'Erro comum',
        'promessa-direta': 'Promessa direta (resultado específico)',
        'curiosidade-aberta': 'Curiosidade aberta (loop)',
        'pergunta-prende': 'Pergunta que "prende" (sim/não)',
        'identificacao-instantanea': 'Identificação instantânea (chamada do público)',
        'alerta-urgencia': 'Alerta/urgência',
        'quebra-expectativa': 'Quebra de expectativa',
        'numeros-contraste': 'Números e contraste',
        'confissao-vulnerabilidade': 'Confissão / vulnerabilidade',
        'prova-rapida': 'Prova rápida (resultado na cara)',
        'o-que-ninguem-conta': '"O que ninguém te conta"',
        'mini-historia': 'Mini-história em 1 frase',
        'desafio-direto': 'Desafio direto',
        'mandato-comando': 'Mandato / comando',
        'mito-vs-realidade': 'Mito vs realidade',
        'analogia-forte': 'Analogia forte',
        'lista-rapida': 'Lista rápida',
        'diagnostico-teste': 'Diagnóstico / teste'
    };
    
    const ganchoTexto = ganchosTexto[gancho] || gancho;
    
    let roteiro = `📝 ROTEIRO DE VÍDEO\n`;
    roteiro += `═══════════════════════════════════════\n\n`;
    roteiro += `Tema: ${tema}\n`;
    roteiro += `Duração: ${tempo} segundos\n`;
    roteiro += `Gancho: ${ganchoTexto}\n`;
    roteiro += `Estrutura: ${estruturaInfo.nome} - ${estruturaInfo.descricao}\n\n`;
    roteiro += `═══════════════════════════════════════\n\n`;
    
    estruturaInfo.etapas.forEach((etapa, index) => {
        roteiro += `[${tempoPorEtapa}s] ${etapa}\n`;
        roteiro += `\n`;
        roteiro += `→ Desenvolva aqui o conteúdo desta etapa relacionado ao tema "${tema}"\n`;
        roteiro += `\n`;
        
        // Adiciona exemplo específico para a última etapa (CTA)
        if (index === estruturaInfo.etapas.length - 1) {
            roteiro += `💡 CTA: ${cta}\n`;
            roteiro += `\n`;
        }
        
        if (index < estruturaInfo.etapas.length - 1) {
            roteiro += `---\n\n`;
        }
    });
    
    roteiro += `═══════════════════════════════════════\n\n`;
    roteiro += `📊 RESUMO\n`;
    roteiro += `Total de etapas: ${numEtapas}\n`;
    roteiro += `Tempo por etapa: ~${tempoPorEtapa}s\n`;
    roteiro += `Tempo total: ${tempo}s\n`;
    
    return roteiro;
}

// Manipular o formulário
document.getElementById('roteiroForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const tema = document.getElementById('tema').value.trim();
    const tempo = parseInt(document.querySelector('input[name="tempo"]:checked').value);
    const ganchoSelect = document.getElementById('gancho');
    const ganchoValue = ganchoSelect.value;
    const ganchoTexto = ganchoSelect.options[ganchoSelect.selectedIndex].text;
    const estruturaSelect = document.getElementById('estrutura');
    const estruturaValue = estruturaSelect.value;
    const estruturaInfo = estruturas[estruturaValue];
    const estruturaTexto = estruturaSelect.options[estruturaSelect.selectedIndex].text;
    const estruturaCompleta = estruturaInfo ? `${estruturaInfo.nome} - ${estruturaInfo.descricao}` : estruturaTexto;
    const produto = document.getElementById('produto').value.trim();
    const cta = document.getElementById('cta').value.trim();
    const melhorarRoteiro = document.getElementById('melhorarRoteiro').value.trim();
    
    if (!tema || !tempo || !ganchoValue || !estruturaValue || !produto || !cta) {
        alert('Por favor, preencha todos os campos obrigatórios!');
        return;
    }
    
    // Elementos do resultado
    const resultadoDiv = document.getElementById('resultado');
    const roteiroContent = document.getElementById('roteiroContent');
    const btnSubmit = document.querySelector('#roteiroForm button[type="submit"]');
    
    // Mostrar loading
    const textoOriginalBtn = btnSubmit.textContent;
    btnSubmit.textContent = 'Gerando...';
    btnSubmit.disabled = true;
    roteiroContent.value = 'Gerando seu roteiro, aguarde...';
    roteiroContent.disabled = true;
    resultadoDiv.style.display = 'block';
    
    try {
        // Preparar dados para envio (incluindo tipo e exemplo do gancho, e estrutura com descrição)
        const dadosRoteiro = {
            tema: tema,
            tempo: tempo,
            gancho: ganchoValue,
            gancho_exemplo: ganchoTexto,
            estrutura: estruturaCompleta,
            produto: produto,
            cta: cta,
            melhorar_roteiro: melhorarRoteiro
        };
        
        // Fazer requisição POST para o endpoint
        const response = await fetch('https://webhook.kaijor.com.br/webhook/roteiros', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dadosRoteiro)
        });
        
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Exibir resultado da API
        // A API retorna: [{ "output": "roteiro..." }]
        let roteiroTexto = '';
        
        if (Array.isArray(data) && data.length > 0 && data[0].output) {
            // Formato esperado: array com objeto contendo "output"
            roteiroTexto = data[0].output;
        } else if (data.roteiro) {
            roteiroTexto = data.roteiro;
        } else if (data.text) {
            roteiroTexto = data.text;
        } else if (data.output) {
            roteiroTexto = data.output;
        } else if (typeof data === 'string') {
            roteiroTexto = data;
        } else {
            // Fallback: usar função local se API não retornar formato esperado
            roteiroTexto = gerarRoteiro(tema, tempo, ganchoValue, estruturaValue, cta);
        }
        
        roteiroContent.value = roteiroTexto;
        roteiroContent.disabled = false;
        
    } catch (error) {
        console.error('Erro ao gerar roteiro:', error);
        alert('Erro ao gerar roteiro. Tente novamente.');
        // Fallback: usar função local em caso de erro
        roteiroContent.value = gerarRoteiro(tema, tempo, ganchoValue, estruturaValue, cta);
        roteiroContent.disabled = false;
    } finally {
        // Restaurar botão
        btnSubmit.textContent = textoOriginalBtn;
        btnSubmit.disabled = false;
        
        // Scroll suave para o resultado
        resultadoDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
});

// Função para copiar o roteiro
const copiarBtn = document.getElementById('copiarBtn');
if (copiarBtn) {
    copiarBtn.addEventListener('click', function() {
        const roteiroContent = document.getElementById('roteiroContent');
        const textoParaCopiar = roteiroContent.value || roteiroContent.textContent;
        
        navigator.clipboard.writeText(textoParaCopiar).then(function() {
            const btn = document.getElementById('copiarBtn');
            const textoOriginal = btn.textContent;
            btn.textContent = '✓ Copiado!';
            btn.style.background = '#4caf50';
            btn.style.borderColor = '#4caf50';
            btn.style.color = 'white';
            
            setTimeout(function() {
                btn.textContent = textoOriginal;
                btn.style.background = 'white';
                btn.style.borderColor = '#667eea';
                btn.style.color = '#667eea';
            }, 2000);
        }).catch(function(err) {
            alert('Erro ao copiar. Por favor, selecione e copie manualmente.');
        });
    });
}

// Menu Lateral
const sidebar = document.getElementById('sidebar');
const menuToggle = document.getElementById('menuToggle');
const closeSidebar = document.getElementById('closeSidebar');
const overlay = document.getElementById('overlay');
const navItems = document.querySelectorAll('.nav-item');
const contentSections = document.querySelectorAll('.content-section');

// Inicializar menu lateral no desktop
function initSidebar() {
    if (window.innerWidth > 768) {
        sidebar.classList.add('active');
    }
}

// Abrir/fechar menu lateral
function toggleSidebar() {
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
}

// Inicializar ao carregar
initSidebar();

// Atualizar ao redimensionar
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        sidebar.classList.add('active');
        overlay.classList.remove('active');
    } else {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
    }
});

if (menuToggle) {
    menuToggle.addEventListener('click', toggleSidebar);
}

if (closeSidebar) {
    closeSidebar.addEventListener('click', toggleSidebar);
}

if (overlay) {
    overlay.addEventListener('click', toggleSidebar);
}

// Navegação entre seções
navItems.forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        const targetSection = this.getAttribute('data-section');
        
        // Atualizar menu ativo
        navItems.forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');
        
        // Mostrar seção correspondente
        contentSections.forEach(section => section.classList.remove('active'));
        document.getElementById(targetSection).classList.add('active');
        
        // Fechar menu no mobile
        if (window.innerWidth <= 768) {
            toggleSidebar();
        }
    });
});

// Sistema de Tags
const tagsContainer = document.getElementById('tagsContainer');
const areaAtuacaoInput = document.getElementById('areaAtuacao');
let tags = [];

function criarTag(texto) {
    const tag = document.createElement('div');
    tag.className = 'tag';
    const textoEscapado = texto.replace(/'/g, "\\'");
    tag.innerHTML = `
        <span>${texto}</span>
        <button type="button" class="tag-remove" data-tag="${textoEscapado}">×</button>
    `;
    
    // Adicionar evento de clique no botão de remover
    const removeBtn = tag.querySelector('.tag-remove');
    removeBtn.addEventListener('click', function() {
        removerTag(texto);
    });
    
    return tag;
}

function adicionarTag(texto) {
    texto = texto.trim();
    if (texto && !tags.includes(texto)) {
        tags.push(texto);
        const tagElement = criarTag(texto);
        tagsContainer.appendChild(tagElement);
        areaAtuacaoInput.value = '';
    }
}

function removerTag(texto) {
    tags = tags.filter(tag => tag !== texto);
    atualizarTags();
}

function atualizarTags() {
    tagsContainer.innerHTML = '';
    tags.forEach(tag => {
        const tagElement = criarTag(tag);
        tagsContainer.appendChild(tagElement);
    });
}

if (areaAtuacaoInput) {
    areaAtuacaoInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            adicionarTag(this.value);
        }
    });
}

// Pesquisa de Temas
const pesquisarTemasBtn = document.getElementById('pesquisarTemas');
const resultadoTemas = document.getElementById('resultadoTemas');
const temasList = document.getElementById('temasList');

async function pesquisarTemas() {
    if (tags.length === 0) {
        alert('Por favor, adicione pelo menos uma área de atuação!');
        return;
    }
    
    // Mostrar loading
    const textoOriginalBtn = pesquisarTemasBtn.textContent;
    pesquisarTemasBtn.textContent = 'Pesquisando...';
    pesquisarTemasBtn.disabled = true;
    
    temasList.innerHTML = '<p style="text-align: center; color: #666;">Carregando temas...</p>';
    resultadoTemas.style.display = 'block';
    
    try {
        // Preparar dados para envio
        const dadosPesquisa = {
            temas: tags
        };
        
        // Fazer requisição POST para o endpoint
        const response = await fetch('https://webhook.kaijor.com.br/webhook/pesquisa', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dadosPesquisa)
        });
        
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Limpar loading
        temasList.innerHTML = '';
        
        // Processar resposta da API
        // A API retorna: [{ "output": "texto formatado..." }]
        let textoFormatado = '';
        
        if (Array.isArray(data) && data.length > 0 && data[0].output) {
            // Formato esperado: array com objeto contendo "output"
            textoFormatado = data[0].output;
        } else if (data.output) {
            textoFormatado = data.output;
        } else if (Array.isArray(data) && data.length > 0) {
            // Se for array direto, tentar extrair output do primeiro elemento
            textoFormatado = data[0].output || JSON.stringify(data[0], null, 2);
        } else if (typeof data === 'string') {
            textoFormatado = data;
        } else {
            // Fallback: converter objeto para string formatada
            textoFormatado = JSON.stringify(data, null, 2);
        }
        
        // Converter \n em quebras de linha HTML
        let textoFormatadoHTML = textoFormatado.replace(/\n/g, '<br>');
        
        // Converter **texto** em negrito HTML
        textoFormatadoHTML = textoFormatadoHTML.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        
        // Converter links Markdown [texto](url) em links HTML clicáveis
        textoFormatadoHTML = textoFormatadoHTML.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" style="color: #667eea; text-decoration: underline;">$1</a>');
        
        // Exibir resultado formatado
        if (!textoFormatado || textoFormatado.trim() === '') {
            temasList.innerHTML = '<p style="text-align: center; color: #666; padding: 20px;">Nenhum tema encontrado. Tente outras áreas de atuação.</p>';
        } else {
            const resultadoCard = document.createElement('div');
            resultadoCard.className = 'tema-card';
            resultadoCard.style.whiteSpace = 'pre-wrap';
            resultadoCard.innerHTML = `<div style="line-height: 1.8; color: #444;">${textoFormatadoHTML}</div>`;
            temasList.appendChild(resultadoCard);
        }
        
    } catch (error) {
        console.error('Erro ao pesquisar temas:', error);
        temasList.innerHTML = '<p style="text-align: center; color: #e74c3c; padding: 20px;">Erro ao pesquisar temas. Tente novamente.</p>';
        alert('Erro ao pesquisar temas. Verifique sua conexão e tente novamente.');
    } finally {
        // Restaurar botão
        pesquisarTemasBtn.textContent = textoOriginalBtn;
        pesquisarTemasBtn.disabled = false;
        
        // Scroll suave para o resultado
        resultadoTemas.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

if (pesquisarTemasBtn) {
    pesquisarTemasBtn.addEventListener('click', pesquisarTemas);
}

