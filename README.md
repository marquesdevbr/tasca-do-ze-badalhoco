# A Tasca do Zé Badalhoco

Site de fã, independente e não oficial, dedicado ao artista **Zé Badalhoco**.
Inspirado nas tascas, nos azulejos e nos arraiais portugueses.

> **Aviso:** este projeto não tem qualquer afiliação oficial com o artista, a sua equipa, editoras ou plataformas. Nomes, músicas e imagens pertencem aos respetivos titulares. O site não aloja músicas: usa apenas os leitores incorporados do Spotify.

## Sobre este projeto

Projeto pessoal de portefólio, feito para praticar **HTML, CSS e JavaScript** num caso concreto: layout responsivo, animações em CSS, componentes interativos, incorporação de conteúdo de terceiros e acessibilidade. O tema (um artista popular, com humor à portuguesa) serve de pretexto para trabalhar a identidade visual.

**Aviso de conteúdo:** algumas músicas do artista contêm linguagem explícita. O site apresenta um aviso na secção de música e não aloja nenhum áudio, que é reproduzido pelo Spotify.

## Funcionalidades

- Página inicial com identidade visual portuguesa (azulejo, bandeirinhas, vinil animado)
- Música: destaque para "Tu Me Traíste" e playlist com leitores do Spotify (sem reprodução automática)
- O Mestre: secção humorística, sem factos biográficos
- Medidor de badalhoquice interativo
- Livro de Reclamações com respostas humorísticas. Funciona só no navegador: nada é enviado nem guardado
- Responsivo, navegação por teclado, respeita a opção "reduzir movimento" do sistema

## Tecnologia

HTML, CSS e JavaScript puros, sem frameworks nem dependências.
As fontes (Alfa Slab One, Fraunces e Source Sans 3) são carregadas do Google Fonts, pelo que é preciso ligação à internet.

## Estrutura

```
index.html      estrutura da página
styles.css      estilos e animações
script.js       música, medidor, reclamações e retrato
img/            imagens (ze-badalhoco.jpg)
```

## Como executar

1. Abre a pasta do projeto no VS Code.
2. Abre o `index.html` no navegador, ou usa a extensão **Live Server** (botão direito no ficheiro → *Open with Live Server*).

## Como personalizar

**Músicas:** no início do `script.js`, edita o objeto `MUSICA`. Cada faixa aceita `youtube` e/ou `spotify` com o link oficial. Só são aceites links do YouTube e do Spotify.

**Retrato:** coloca a imagem em `img/ze-badalhoco.jpg`. Usa apenas imagens que tenhas autorização para publicar. Sem ficheiro, o site mostra um espaço reservado.

## Notas

- Ao usar os leitores do Spotify, a consola do navegador pode mostrar avisos e erros 404 de `spotify.com`. Vêm do próprio leitor e não afetam o site.
- Quem não tiver sessão iniciada no Spotify ouve apenas um excerto de cada faixa.

## Licença

O código (HTML, CSS e JavaScript) está sob a licença [MIT](LICENSE), © 2026 Gabriel Marques.
A licença não cobre músicas, nomes, marcas nem imagens de terceiros, que pertencem aos respetivos titulares.
