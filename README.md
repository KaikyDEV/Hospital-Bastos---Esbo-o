# 🏥 Hospital de Bastos - Site Institucional

Este repositório contém o código-fonte do site institucional do **Hospital de Bastos**, desenvolvido com foco em clareza, acessibilidade e experiência do usuário.

## ✨ Funcionalidades

- **Seções informativas**: História, Missão, Visão, Serviços, Diretoria, Doações, Contato, Horários e Transparência.
- **Formulário de contato** com feedback de envio.
- **Sistema de doações via PIX (simulado)**:
  - Botões com valores rápidos.
  - Campo de valor personalizado.
- **Design responsivo e moderno** com base nas cores:
  - Verde principal: `#00923a`
  - Verde claro: `#a6d2ae`
  - Branco: `#ffffff`
- **Scroll suave** entre seções.
- **Animações leves** e responsividade mobile.

## 🗂 Estrutura de Arquivos

hospital-de-bastos/
├── index.html # Estrutura principal do site
├── style.css # Estilos visuais
├── main.js # Scripts JS para interatividade
└── README.md # Documentação do projeto


## 🚀 Como usar

1. Clone este repositório:

```bash
git clone https://github.com/seunome/hospital-de-bastos.git

    Abra o arquivo index.html em um navegador de sua preferência.

    💡 Não há dependências externas nem necessidade de build – é um projeto estático puro.

🎨 Personalização

    Cores e fontes: edite as variáveis no :root do style.css.

    Valores de doação: modifique os botões no HTML e os eventos no main.js.

    Formulário: atualmente envia apenas uma simulação. Para envio real, integre com um backend ou use serviços como Formspree ou EmailJS.

🧩 Dica extra: transformar em tema WordPress

Caso deseje implementar como um tema WordPress:

    Divida o HTML em header.php, footer.php, index.php.

    Registre os arquivos com wp_enqueue_script e wp_enqueue_style.

    Use ACF para campos dinâmicos como horário, serviços e diretoria.

👨‍💻 Desenvolvedor

Desenvolvido por Kaiky
📧 Email: [seuemail@dominio.com]
🔗 LinkedIn: linkedin.com/in/seuperfil