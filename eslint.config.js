// Configuración de ESLint para el proyecto de React con Vite
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  // Ignoramos la carpeta de compilados de Vite
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      // Reglas recomendadas básicas de JavaScript
      js.configs.recommended,
      // Buenas prácticas específicas para hooks de React
      reactHooks.configs['recommended-latest'],
      // Reglas pensadas para desarrollo con Vite + React Refresh
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      // Permitimos variables en mayúsculas sin marcar como "no usadas" (por ejemplo, constantes)
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
])
