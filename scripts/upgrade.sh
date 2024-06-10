#!/usr/bin/env sh
#!/usr/bin/env zsh
#!/usr/bin/env bash

# Add runtime dependencies
pnpm add dotenv fastify

# Add development dependencies
pnpm add -D @types/node @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint nodemon prettier ts-node typescript

echo ""
echo "\033[0;32mAll set, you're good to go!\033[0m"
