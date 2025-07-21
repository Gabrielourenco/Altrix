# Sistema de Landing Page para Consultoria

## Overview

Este projeto é uma aplicação web moderna desenvolvida como uma landing page para a Altrix Consultoria, uma empresa especializada em automação de processos para PMEs. A aplicação utiliza uma arquitetura full-stack com React no frontend e Express no backend, implementando um sistema de captura de leads através de um formulário de contato.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 com TypeScript
- **Build Tool**: Vite com hot reload e error overlay
- **UI Framework**: shadcn/ui baseado em Radix UI
- **Styling**: TailwindCSS com tema customizado
- **Estado**: React Query para gerenciamento de estado servidor
- **Formulários**: React Hook Form com validação Zod
- **Roteamento**: Wouter (alternativa leve ao React Router)

### Backend Architecture
- **Runtime**: Node.js com TypeScript
- **Framework**: Express.js
- **Validação**: Zod schemas compartilhados entre frontend e backend
- **Database ORM**: Drizzle ORM configurado para PostgreSQL
- **Armazenamento**: Implementação em memória para desenvolvimento, pronto para PostgreSQL

### Data Flow
1. Usuario preenche formulário de contato na landing page
2. Frontend valida dados usando React Hook Form + Zod
3. Dados são enviados via API POST para `/api/contact`
4. Backend valida novamente com Zod schemas
5. Lead é armazenado no banco de dados
6. Resposta de sucesso/erro é retornada ao frontend
7. Toast notification informa o status ao usuário

## Key Components

### Seções da Landing Page
- **Navigation**: Menu fixo com scroll suave para seções
- **Hero**: Seção principal com CTAs para diagnóstico e serviços
- **Pain Points**: Identificação de problemas comuns das PMEs
- **Services**: Apresentação dos serviços de automação oferecidos
- **Process**: Metodologia de trabalho em 4 etapas
- **Testimonials**: Depoimentos de clientes com estatísticas
- **Diagnosis**: CTA principal para diagnóstico gratuito
- **Contact**: Formulário de captura de leads
- **Footer**: Informações da empresa e links
- **WhatsApp Button**: Botão flutuante para contato direto

### API Endpoints
- `POST /api/contact`: Criação de novos leads
- `GET /api/leads`: Listagem de leads (funcionalidade administrativa)

### Database Schema
```typescript
// Tabela de leads para captura de contatos
leads: {
  id: serial primary key
  name: text not null
  email: text not null  
  company: text not null
  challenges: text (opcional)
  createdAt: timestamp default now
}

// Tabela de usuários (preparada para futuras funcionalidades)
users: {
  id: serial primary key
  username: text unique not null
  password: text not null
}
```

## Data Storage Solutions

### Development Storage
- **MemStorage**: Implementação em memória para desenvolvimento
- Simula operações de banco de dados sem dependências externas
- Dados são perdidos ao reiniciar a aplicação

### Production Storage  
- **PostgreSQL**: Configurado via Drizzle ORM
- **Neon Database**: Provedor serverless configurado
- **Migrations**: Gerenciadas via drizzle-kit

### Rationale
A escolha de usar MemStorage em desenvolvimento permite desenvolvimento rápido sem configuração de banco, enquanto o Drizzle ORM oferece type-safety e facilita a migração para PostgreSQL em produção.

## External Dependencies

### UI Components
- **Radix UI**: Primitivos acessíveis para componentes complexos
- **shadcn/ui**: Biblioteca de componentes pré-construídos
- **Lucide React**: Ícones consistentes e otimizados

### Styling & Layout
- **TailwindCSS**: Utility-first CSS framework
- **class-variance-authority**: Variantes condicionais de estilos
- **clsx & tailwind-merge**: Combinação inteligente de classes CSS

### Form Handling
- **React Hook Form**: Performance otimizada para formulários
- **Zod**: Validação de schemas TypeScript-first
- **@hookform/resolvers**: Integração entre RHF e Zod

### Data Fetching
- **TanStack Query**: Cache inteligente e sincronização de estado servidor
- **Fetch API**: Requisições HTTP nativas

### Development Tools
- **Vite**: Build tool rápido com HMR
- **TypeScript**: Type safety em todo o projeto
- **ESBuild**: Bundling otimizado para produção

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite compila React/TypeScript para assets estáticos
2. **Backend Build**: ESBuild bundle do servidor Express
3. **Output**: Diretório `dist/` com aplicação completa

### Environment Configuration
- **Development**: Vite dev server com proxy para API Express
- **Production**: Servidor Express serve assets estáticos + API

### Database Setup
- **Development**: MemStorage (sem configuração necessária)
- **Production**: PostgreSQL via DATABASE_URL environment variable
- **Migrations**: `npm run db:push` aplica schema via Drizzle

### Hosting Requirements
- Node.js runtime para servidor Express
- PostgreSQL database (recomendado: Neon, Supabase, ou similar)
- Variáveis de ambiente: DATABASE_URL, NODE_ENV

### Scalability Considerations
A arquitetura atual suporta facilmente adição de funcionalidades como:
- Sistema de autenticação (schemas já preparados)
- Dashboard administrativo para gestão de leads
- Integração com CRM externo
- Email marketing automation
- Analytics e tracking de conversões