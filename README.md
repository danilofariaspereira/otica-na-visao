# Ótica Na Visão - Site Institucional

Site completo multi-página para uma ótica, desenvolvido com HTML, CSS e JavaScript puro (sem frameworks ou bibliotecas externas).

## 📁 Estrutura do Projeto

```
na-visao/
├── index.html          # Página inicial
├── sobre.html          # Sobre a empresa
├── armacoes.html       # Catálogo de armações
├── servicos.html       # Serviços e ferramentas
├── css/
│   └── style.css       # Estilos principais
├── js/
│   ├── main.js         # JavaScript principal
│   └── frames.js       # JavaScript para página de armações
├── img/                # Imagens placeholder
│   ├── placeholder-frame.jpg
│   ├── placeholder-store.jpg
│   ├── placeholder-team.jpg
│   └── placeholder-map.jpg
└── README.md           # Este arquivo
```

## 🚀 Como Abrir o Projeto

### Opção 1: Abrir diretamente no navegador

1. Navegue até a pasta do projeto
2. Clique duas vezes no arquivo `index.html`
3. O site abrirá no seu navegador padrão

### Opção 2: Usar um servidor local (recomendado)

#### Com Python:

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Depois acesse: `http://localhost:8000`

#### Com Node.js (http-server):

```bash
# Instalar globalmente
npm install -g http-server

# Executar
http-server
```

#### Com PHP:

```bash
php -S localhost:8000
```

Depois acesse: `http://localhost:8000`

## ✨ Funcionalidades

### Menu Responsivo
- Menu fixo no topo com efeito de transparência
- Menu hamburger no mobile
- Scroll suave para o footer ao clicar em "Contato"

### Páginas

#### Home (index.html)
- Hero section com call-to-action
- Seção "O que fazemos" com cards
- Grid de armações em destaque
- Depoimentos de clientes

#### Sobre (sobre.html)
- História da empresa
- Missão, visão e valores
- Galeria de fotos da loja
- Apresentação da equipe
- Diferenciais

#### Armações (armacoes.html)
- Grid com 14+ armações
- Filtros por categoria (grau, sol, infantil, gênero)
- Modal com detalhes completos de cada armação
- Informações: material, medidas, preço

#### Serviços (servicos.html)
- Serviços oferecidos (exame, ajustes, consultoria, manutenção)
- Equipamentos (foróptero, topógrafo, lensômetro, laboratório)
- Tipos de lentes (monofocal, multifocal, antirreflexo, fotossensível)

### Footer (em todas as páginas)
- Informações de contato
- Horário de funcionamento
- Mapa (placeholder)
- Formulário de contato com validação JavaScript

## 🎨 Design

- **Paleta de cores**: Azul primário (#2563eb) com tons neutros
- **Tipografia**: Fontes nativas do sistema (sans-serif)
- **Layout**: 100% responsivo
- **Efeitos**: Transições suaves, sombras, hover effects

## 📱 Responsividade

O site é totalmente responsivo e funciona perfeitamente em:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (até 767px)

## 🔧 Tecnologias Utilizadas

- HTML5
- CSS3 (Grid, Flexbox, Custom Properties)
- JavaScript (ES6+)
- Sem dependências externas

## 📝 Notas

- As imagens são placeholders SVG convertidos para JPG
- O formulário de contato faz validação front-end apenas (não envia dados)
- Todos os links de telefone e WhatsApp são clicáveis
- O menu mobile abre/fecha com animação suave

## 🎯 Próximos Passos (Opcional)

Para produção, você pode:
1. Substituir as imagens placeholder por fotos reais
2. Integrar o formulário com um backend
3. Adicionar mais armações ao catálogo
4. Implementar busca de armações
5. Adicionar integração com Google Maps

## 📄 Licença

Este projeto foi desenvolvido como exemplo de site institucional.

---

Desenvolvido com ❤️ usando apenas HTML, CSS e JavaScript puro.

