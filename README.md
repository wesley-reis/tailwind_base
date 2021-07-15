# PROJETO COM TAILWINDCSS
Iniciando projeto com

` npm init -y`

Instalar o tailwindcss

`npm install -D tailwindcss@latest postcss@latest autoprefixer@latest`

Criar arquivo de configuração do tailwindcss

`npx tailwindcss init `

Criar arquivo css base

`
@tailwind base;

@tailwind components;

@tailwind utilities;

`

Fazer a instalação sem uso de ferramentas de terceiros
` npx tailwindcss -o ./src/assets/css/tailwind.css`