# DGA Imobiliária

Site institucional da DGA Imobiliária, desenvolvido com Next.js, TypeScript,
App Router, Tailwind CSS e ESLint.

## Desenvolvimento

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

No Windows, também é possível executar `INICIAR_DEV.bat`.

## Verificação

```bash
npm run lint
npm run build
```

O script `BUILD.bat` executa as duas verificações em sequência.

## Variáveis públicas

Copie `.env.example` para `.env.local` quando precisar configurar:

- `NEXT_PUBLIC_SITE_URL`: URL pública do site; em desenvolvimento usa
  `http://localhost:3000` como padrão.
- `NEXT_PUBLIC_WHATSAPP_NUMBER`: número internacional somente após confirmação.
  Quando vazio, o botão de WhatsApp não é exibido.

## Imóveis

O modelo está em `src/types/property.ts` e os dados em
`src/data/properties.ts`. O array começa vazio para evitar anúncios fictícios.
