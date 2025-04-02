# Wealth Management Chatbot: Proof of Concept PRD

## 1. Product Overview

A streamlined proof of concept using the Vercel AI chatbot library to demonstrate how wealth managers could access information from siloed systems (Outlook, Addepar, and Salesforce) through a single conversational interface.

## 2. Goals

- Demonstrate the concept of unified data access through a chat interface
- Create a compelling demo to secure stakeholder interest
- Showcase simulated integration between systems without actual backend connections

## 3. User Experience

### 3.1 Core Features

- **Chatbot Interface**: Users ask natural language questions and receive simulated responses
- **System Integration Simulation**: Responses appear to pull data from Outlook, Addepar, and Salesforce
- **Client Profile Cards**: Minimal pop-ups showing upcoming client events when clicking a client name

### 3.2 App Screens

1. **Login Screen**
   - Simple username/password (any credentials work)
   - Minimal branding
   - Log in button

2. **Main Chat Interface**
   - Full-screen chat experience built with Vercel AI chatbot
   - Message input at bottom
   - Chat history in scrollable area
   - Small system icons indicating data sources in responses

3. **Client Profile Card**
   - Small pop-up triggered by clicking a client name
   - Shows 3-5 upcoming important dates
   - Basic client info
   - Quick dismiss option

## 4. Demo Scenarios

1. **Portfolio Info**: "Show me Sarah Johnson's portfolio"
2. **Email History**: "What emails have I exchanged with David Thompson recently?"
3. **Client Details**: "Tell me about Robert Williams"
4. **Cross-System Info**: "When did I last talk to Sarah Johnson and what about?"
5. **Upcoming Events**: "Any important client dates in the next month?"
6. **Performance Data**: "How is David Thompson's portfolio performing?"

## 5. Technical Implementation

- **Frontend**: Vercel AI chatbot library (React-based)
- **UI Framework**: Shadcn UI components with dark theme
- **LLM Integration**: OpenAI, Claude, or Gemini API
- **Backend**: Simulated responses only (no actual system integration)

## 6. Project Structure

- Set up the Vercel AI chatbot project
- Implement chat UI
- Create canned responses for demo scenarios
- Add minimal client profile card functionality
- Test and refine the experience
