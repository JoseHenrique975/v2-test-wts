![Banner image](https://user-images.githubusercontent.com/10284570/173569848-c624317f-42b1-45a6-ab09-f0ea3c247648.png)

# n8n-nodes-wts
Este é um nó Wts Chat, que permite que você use o Wts Chat em seus fluxos de trabalho no n8n.
Vai facilitar suas automações com a plataforma Wts Chat, de forma rápida, prática e eficiente.
Permitindo que os usuários criem contatos, notas em um cartão, enviem mensagens de texto, modelos e muito mais.

# Release Notes
📌Release Notes - Versão 2.0.1 n8n-node-wts - 14/03/2025📌

A versão 2.0.1 do nó do Wts Chat traz uma série de melhorias e ajustes em módulos existentes. Confira abaixo as mudanças importantes desta atualização:

Módulo Atualizar Card
Novidade: O campo Metadata agora é uma opção editável. Você pode optar por alterar somente este campo, se necessário, sem a necessidade de modificar outros dados do card.
 Se o Custom Field for campo de multiseleção, é possível selecionar mais de uma opção. As opções selecionadas devem ser separadas por vírgulas, como 1, 2, 3, permitindo uma maior flexibilidade na escolha de múltiplos valores.

Módulo Atualizar Conversa
Novidade: Agora é possível passar um valor vazio com a opção 'Empty'. Com essa mudança, você pode alterar individualmente:
- Usuário: Passando 'Empty', o campo do usuário pode ser atualizado separadamente.
- Departamento: Também é possível modificar o departamento sem alterar o usuário.
- Usuário e Departamento: Agora você pode modificar ambos simultaneamente.
- Remoção: O campo 'CompanyId' foi excluído da atualização de conversa.

Módulo Transferir Conversa Para Usuário
- Alteração de nome: O nome do módulo foi atualizado de 'Assign user to session' para 'Transfer session to user' para refletir melhor a ação realizada.

Módulo Concluir Conversa
- Alteração de nome: O nome do módulo foi alterado de 'Conclude session' para 'Complete session'.

Módulo Listar Anotações
- Alteração de nome: O nome do módulo foi alterado de 'List notes' para 'List annotations'.

<h1></h1>
<h3>📌 Recurso: Contato</h3>

<details>
  <summary>✅ <b> Criar Contato</b></summary>
</details>

<details>
  <summary>✅ <b> Atualizar Contato</b></summary>
</details> 

<details>
  <summary>✅ <b> Buscar Contato por ID</b></summary>
</details>

<details>
  <summary>✅ <b> Buscar Contato por Telefone</b></summary>
</details>

<details>
  <summary>✅ <b> Listar Contatos</b></summary>
</details>

<h1></h1>
<h3>📌 Recurso: Mensagem</h3>

<details>
  <summary>✅ <b> Enviar Texto</b></summary>
</details>

<details>
  <summary>✅ <b> Enviar Arquivo</b></summary>
</details>

<details>
  <summary>✅ <b> Enviar Modelo de Mensagem</b></summary>
</details>


<details>
  <summary>✅ <b> Buscar Mensagem por ID</b></summary>
</details>

<h1></h1>
<h3>📌 Recurso: Conversa</h3>
<details>
<summary>✅ <b> Listar Conversas</b></summary>
</details>
<details>
<summary>✅ <b> Atualizar Transferência</b></summary>
</details>
<details>
<summary>✅ <b> Atualizar Status da Conversa</b></summary>
</details>
<details>
<summary>✅ <b> Buscar Conversa por ID</b></summary>
</details>
<details>
<summary>✅ <b> Atribuir Usuário à Conversa</b></summary>
</details> 
<details>
<summary>✅ <b> Concluir Conversa</b></summary>
</details>
<details>
<summary>✅ <b> Atualizar Conversa</b></summary>
</details>
<details>
<summary>✅ <b> Enviar Mensagem de Texto</b></summary>
</details>
<details>
<summary>✅ <b> Enviar Mensagem com Arquivo</b></summary>
</details>
<details>
<summary>✅ <b> Enviar Modelo de Mensagem</b></summary>
</details>

<h1></h1>
<h3>📌 Recurso: Painel</h3>
<details>
<summary>✅ <b> Listar Anotações</b></summary>
</details>
<details>
<summary>✅ <b> Listar Cards</b></summary>
</details>
<details>
<summary>✅ <b> Listar Painéis</b></summary>
</details>
<details>
<summary>✅ <b> Buscar Card por ID</b></summary>
</details>
<details>
<summary>✅ <b> Buscar Painel por ID</b></summary>
</details>
<details>
<summary>✅ <b> Criar Card</b></summary>
</details>
<details>
<summary>✅ <b> Criar Anotação de Texto</b></summary>
</details>
<details>
<summary>✅ <b> Criar Anotação de Arquivo</b></summary>
</details>
<details>
<summary>✅ <b> Deletar Anotação de Card</b></summary>
</details>
<details>
<summary>✅ <b> Duplicação de Card</b></summary>
</details>
<details>
<summary>✅ <b> Atualização de Card</b></summary>
</details>

<h1></h1>
<h3>📌 Recurso: Chatbot</h3>
<details>
<summary>✅ <b> Enviar Chatbot</b></summary>
</details>

<h1></h1>
<h3>📌 Recurso: Sequência</h3>
<details>
<summary>✅ <b> Adicionar Contato à sequência</b></summary>
</details>
<details>
<summary>✅ <b> Adicionar Contatos à sequência</b></summary>
</details>
<details>
<summary>✅ <b> Remover Contato de uma sequência</b></summary>
</details>
<details>
<summary>✅ <b> Remover Contatos de uma sequência</b></summary>
</details>
<details>
<summary>✅ <b> Listar Sequências</b></summary>
</details>
<details>
<summary>✅ <b> Listar Contatos de uma Sequência</b></summary>
</details>

<h1></h1>

# Instalação

#### Siga o guia de instalação nos nós da comunidade n8n.

 - Vá para Configurações > Nós da comunidade.

- Selecione Instalar.

- Digite o nome do pacote: **n8n-nodes-wts**

- Depois de instalado, você pode criar um fluxo de trabalho e no painel de nós, pesquisar por: **WTS Chat**

- Com isso você poderá visualizar as ações disponíveis com o nó.