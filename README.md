# 🧪 custom-errors (Proof of Concept)

> Um experimento em criar uma estrutura simples e reutilizável para erros personalizados em TypeScript/JavaScript.

---

## 📌 Sobre

Este repositório é um **teste de conceito (PoC)** para explorar a criação, publicação e utilização de um pacote Node.js escrito em TypeScript. O pacote define uma classe `CustomError`, que estende a classe nativa `Error` com suporte para códigos de status e metadados adicionais.

Além da implementação principal, o projeto inclui:

- Transpilação com TypeScript
- Testes com Vitest
- Publicação local em um repositório Nexus
- Exemplo de consumo no diretório `example/`

---

## 🔧 Tecnologias e Ferramentas

- Node.js 20+
- TypeScript
- Vitest (para testes)
- Nexus Repository Manager (como registry local)
- npm (publicação e consumo)

---

## 🚀 Como usar localmente

### 1. Clonar e instalar dependências

```bash
git clone https://github.com/seu-usuario/custom-errors.git
cd custom-errors
npm install
```

### 2. Rodar os testes

```bash
npm run test
```

---

## 💡 Exemplo de uso

Dentro do diretório `example`, há um projeto que consome o pacote publicado no Nexus:

```ts
// example/src/index.ts
import { CustomError } from "custom-errors"

export function run() {
  throw new CustomError("Erro de exemplo", 418, { origin: "example" })
}
```

Para rodar:

```bash
cd example
npm install
npm start
```

---

## 🧪 Teste no Example

Você pode testar o comportamento do erro diretamente:

```ts
import { run } from "../src/index"

describe("Exemplo com CustomError", () => {
  it("deve lançar um CustomError", () => {
    expect(() => run()).toThrowError("Erro de exemplo")
  })
})
```

Rodar com:

```bash
npm run test
```

---

## ⚠️ Observações

- Este projeto **não é recomendado para produção**.
- A publicação está configurada para um **registry local Nexus**.
- Pode ser usado como base para outros experimentos com pacotes e distribuição privada.

---

## 📄 Licença

MIT License

---

## ✍️ Autor

Desenvolvido por [Seu Nome] – [@seu-usuario](https://github.com/seu-usuario)

Fique à vontade para explorar, modificar ou usar como referência.