# Real Estate Private Equity Adaptation Checklist

## Overview

This checklist outlines the necessary steps to adapt our WealthAdvisor chatbot for Real Estate Private Equity (REPE) firms. Each item includes context and background to ensure a comprehensive understanding of the task.

## 1. Environment Variable Configuration

- [x] **Create configuration file**
  * Background: We need a central configuration system to toggle between different industry modes
  * Create `config/app-config.ts` with the following:
    ```typescript
    export type AppMode = 'wealth-management' | 'repe';
    export const APP_MODE = (process.env.NEXT_PUBLIC_APP_MODE || 'wealth-management') as AppMode;
    export const isWealthManagement = APP_MODE === 'wealth-management';
    export const isREPE = APP_MODE === 'repe';
    ```

- [x] **Set up environment variable**
  * Background: Environment variables allow us to switch modes without code changes
  * Add `NEXT_PUBLIC_APP_MODE` to `.env.local` file
  * Update README with instructions on setting the variable
  * Test both `wealth-management` and `repe` values

## 2. REPE Data Sources

- [x] **Create Yardi icon and configuration**
  * Background: Yardi replaces Salesforce as the property management system
  * Context: Yardi is widely used in real estate for property management and accounting
  * Create SVG icon for Yardi
  * Add to data source configuration
  * Implement detection regex for Yardi references in text

- [x] **Create Argus icon and configuration**
  * Background: Argus replaces Addepar as the financial analysis tool
  * Context: Argus is an industry-standard tool for real estate financial modeling
  * Create SVG icon for Argus
  * Add to data source configuration
  * Implement detection regex for Argus references in text

- [x] **Create Gmail icon and configuration**
  * Background: Gmail replaces Outlook as the email system
  * Create SVG icon for Gmail
  * Add to data source configuration
  * Implement detection regex for Gmail references in text

- [x] **Create Excel icon and configuration**
  * Background: Excel is a new data source not in the wealth management version
  * Context: Real estate firms heavily rely on Excel for financial modeling
  * Create SVG icon for Excel
  * Add to data source configuration
  * Implement detection regex for Excel references in text

- [x] **Create Google Sheets icon and configuration**
  * Background: Google Sheets is a new data source for collaborative spreadsheets
  * Create SVG icon for Google Sheets
  * Add to data source configuration
  * Implement detection regex for Google Sheets references in text

- [x] **Update data source detection logic**
  * Background: We need to conditionally use different data sources based on app mode
  * Modify the `detectDataSourceInText` function to check app mode
  * Ensure the correct data sources are detected in each mode

## 3. System Prompt Modifications

- [x] **Create REPE system prompt**
  * Background: The AI needs different context to respond appropriately to REPE queries
  * Context: REPE firms focus on properties, tenants, and real estate metrics rather than clients and portfolios
  * Create new prompt in `lib/ai/prompts.ts`
  * Include mock REPE data structure with properties instead of clients

- [x] **Implement mock property data**
  * Background: We need realistic property data to simulate responses
  * Create 3-5 detailed property profiles with:
    * Property name, type, and location
    * Performance metrics (value, occupancy, NOI, cap rate)
    * Tenant information
    * Lease details
    * Recent transactions
    * Market analysis

- [x] **Implement conditional prompt selection**
  * Background: The system should load different prompts based on app mode
  * Update the prompt selection logic to check for app mode
  * Test that appropriate prompts are used in each mode

## 4. UI and Branding Changes

- [x] **Create configurable logo component**
  * Background: The IEQ Capital logo should be replaced with a generic or mode-specific logo
  * Create a conditional logo component that changes based on app mode
  * Provide a generic default logo for REPE mode

- [x] **Update title and description**
  * Background: Page metadata should reflect the current app mode
  * Modify `layout.tsx` to use conditional metadata based on app mode:
    ```typescript
    export const metadata: Metadata = {
      metadataBase: new URL('https://chat.vercel.ai'),
      title: isWealthManagement ? 'WealthAdvisor' : 'REPEAdvisor',
      description: isWealthManagement 
        ? 'Wealth management chatbot for accessing data from Salesforce, Addepar, and Outlook.' 
        : 'Real Estate Private Equity chatbot for accessing data from Yardi, Argus, Gmail, Excel, and Google Sheets.',
    };
    ```

- [x] **Update DataSourceHeader component**
  * Background: The component needs to display different data sources based on app mode
  * Modify the component to check app mode when rendering data source icons
  * Test that the correct icons appear in each mode
  
- [x] **Update Data Sources modal**
  * Background: The Data Sources modal should show different connected sources based on app mode
  * Modify the dialog in `chat-header.tsx` to conditionally display REPE or Wealth Management sources
  * Add descriptions for each REPE data source to clarify their purpose

## 5. REPE Demo Scenarios

- [ ] **Document property performance scenario**
  * Background: Users should be able to query performance metrics for properties
  * Example: "Show me Riverfront Tower's performance metrics for Q2"
  * Create sample AI responses with appropriate data source indicators

- [ ] **Document lease expiration scenario**
  * Background: Important REPE use case is tracking lease expirations
  * Example: "What leases are expiring in the next 6 months?"
  * Create sample AI responses showing data from Yardi

- [ ] **Document property details scenario**
  * Background: Users need quick access to property information
  * Example: "Tell me about Westfield Plaza"
  * Create sample AI responses combining data from multiple sources

- [ ] **Document market analysis scenario**
  * Background: REPE firms need market intelligence for investment decisions
  * Example: "How is the Chicago office market performing?"
  * Create sample AI responses with market data and trends

- [ ] **Document financial projections scenario**
  * Background: Financial modeling is central to REPE operations
  * Example: "What are the 5-year projections for Riverfront Tower?"
  * Create sample AI responses with Argus and Excel references

- [x] **Document tenant information scenario**
  * Background: Tenant relationships are key to property management
  * Example: "Who are our top tenants by square footage?"
  * Create sample AI responses showing tenant data from Yardi

- [x] **Add suggested prompts for REPE mode**
  * Background: Suggested prompts should match the current app mode
  * Create conditional logic for suggested prompts based on app mode
  * Test that appropriate suggestions appear in each mode

## 6. Testing and Documentation

- [ ] **Create automated tests**
  * Background: Ensure the app works correctly in both modes
  * Create tests for data source detection in both modes
  * Test conditional UI components and prompts

- [ ] **Document mode-switching process**
  * Background: Users need to know how to switch between modes
  * Update README with instructions for changing the environment variable
  * Document any server restart requirements

- [ ] **Update README to be app-specific**
  * Background: The current README is based on the generic Next.js AI Chatbot template
  * Replace generic content with specific information about the WealthAdvisor/REPEAdvisor application
  * Update features, description, and screenshots to reflect the actual application
  * Make the documentation more relevant to the specific use cases and implementation

- [ ] **Create mode-specific demo guides**
  * Background: Demos should highlight the strengths of each mode
  * Create separate demo guides for wealth management and REPE modes
  * Include suggested talking points and scenarios to showcase

- [ ] **Test both modes thoroughly**
  * Background: Ensure a seamless experience in both modes
  * Verify all conditional elements work correctly
  * Check for any "leakage" between modes (wealth management elements appearing in REPE mode)

## 7. Future Extensibility

- [ ] **Document extensibility approach**
  * Background: This system should support additional industry verticals
  * Outline the process for adding new app modes
  * Create a template for new industry configuration
  * Document the file locations that require modification for new verticals 