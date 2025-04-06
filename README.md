/**
 * Updated README to focus on the project-specific features and capabilities
 * Highlighted dual-mode functionality (WealthAdvisor and REPEAdvisor)
 * Added information about industry-specific data sources and features
 * Maintained core technical information for developers
 */

<a href="https://chat.vercel.ai/">
  <img alt="Intelligent Industry AI Chatbot for Wealth Management and Real Estate." src="app/(chat)/opengraph-image.png">
  <h1 align="center">WealthAdvisor & REPEAdvisor</h1>
</a>

<p align="center">
  An industry-specific AI chatbot with dual modes for Wealth Management and Real Estate Private Equity.
</p>

<p align="center">
  <a href="#features"><strong>Features</strong></a> ·
  <a href="#industry-modes"><strong>Industry Modes</strong></a> ·
  <a href="#data-sources"><strong>Data Sources</strong></a> ·
  <a href="#deployment"><strong>Deployment</strong></a> ·
  <a href="#running-locally"><strong>Running Locally</strong></a>
</p>
<br/>

## Features

- **Dual Industry Modes**
  - Wealth Management (WealthAdvisor)
  - Real Estate Private Equity (REPEAdvisor)
- **Integrated Data Sources**
  - Mode-specific data source connectors
  - Visual indicators for data source attribution
  - Configurable data source dialog
- **Enhanced Chat Interface**
  - Industry-specific suggested prompts
  - Contextual AI responses based on mode
  - Data source attribution bubbles
- **Technical Foundation**
  - Built on Next.js App Router
  - AI SDK for seamless model integration
  - Responsive UI components with shadcn/ui

## Industry Modes

This application supports two distinct industry verticals through a simple configuration variable:

### WealthAdvisor (Default)
- **Focus**: Wealth management and financial advisory
- **Target Users**: Financial advisors managing client portfolios
- **Core Features**: Client portfolio analysis, market insights, client communication
- **Data Sources**: Salesforce (client data), Addepar (portfolio data), Outlook (email communication)

### REPEAdvisor
- **Focus**: Real Estate Private Equity investment and management
- **Target Users**: REPE analysts, property managers, investment teams
- **Core Features**: Property performance analysis, lease tracking, market research
- **Data Sources**: Yardi (property management), Argus (financial modeling), Gmail, Excel, Google Sheets

## Data Sources

The chatbot connects to industry-specific data sources that appear as visual indicators in the AI's responses:

### Wealth Management
- **Salesforce**: Client relationship data, account information, contact details
- **Addepar**: Portfolio performance, asset allocation, investment data
- **Outlook**: Client communications, meeting notes, follow-ups

### Real Estate Private Equity
- **Yardi**: Property management data, tenant information, lease details
- **Argus**: Financial models, valuation data, cash flow projections
- **Gmail**: Communications with tenants, investors, and partners
- **Excel**: Financial spreadsheets, investment models
- **Google Sheets**: Collaborative data tracking, shared property metrics

## Deployment

You can deploy your own version of this chatbot to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fai-chatbot&env=AUTH_SECRET,NEXT_PUBLIC_APP_MODE&envDescription=Required%20environment%20variables%20for%20the%20application&envLink=https%3A%2F%2Fgenerate-secret.vercel.app%2F32&project-name=industry-ai-chatbot&repository-name=industry-ai-chatbot&demo-title=Industry%20AI%20Chatbot&demo-description=AI%20Chatbot%20with%20modes%20for%20Wealth%20Management%20and%20Real%20Estate%20Private%20Equity&demo-url=https%3A%2F%2Fchat.vercel.ai)

## Running Locally

You will need to use the environment variables defined in `.env.example` to run the application locally. It's recommended you use [Vercel Environment Variables](https://vercel.com/docs/projects/environment-variables) for this, but a `.env` file is all that is necessary.

1. Install Vercel CLI: `npm i -g vercel`
2. Link local instance with Vercel and GitHub accounts (creates `.vercel` directory): `vercel link`
3. Download your environment variables: `vercel env pull`

```bash
pnpm install
pnpm dev
```

Your app should now be running on [localhost:3000](http://localhost:3000/).

## Switching App Modes

To switch between industry modes:

1. Open your `.env.local` file
2. Set `NEXT_PUBLIC_APP_MODE` to either:
   - `wealth-management` (default)
   - `repe` (Real Estate Private Equity)
3. Restart the development server with `pnpm dev`

The app will automatically adjust its data sources, system prompts, and UI elements to match the selected industry focus.

## Model Providers

This application uses the Vercel AI SDK and supports multiple model providers. The default is xAI's Grok, but you can easily switch to other providers like OpenAI, Anthropic, or Cohere by updating the model configuration.
