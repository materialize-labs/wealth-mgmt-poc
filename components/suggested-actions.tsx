/**
 * SuggestedActions component that shows clickable prompt suggestions
 * when starting a new chat
 *
 * Changes:
 * - Modified to show different suggestions based on app mode
 * - Added REPE-specific suggestions for the REPE mode
 * - Kept original suggestions for wealth management mode
 */

'use client';

import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { memo } from 'react';
import { UseChatHelpers } from '@ai-sdk/react';
import { isWealthManagement } from '@/config/app-config';

interface SuggestedActionsProps {
  chatId: string;
  append: UseChatHelpers['append'];
}

function PureSuggestedActions({ chatId, append }: SuggestedActionsProps) {
  // Wealth Management suggested actions
  const wealthManagementSuggestions = [
    {
      title: 'Show me',
      label: "Sarah Johnson's portfolio",
      action: "Show me Sarah Johnson's portfolio",
    },
    {
      title: 'What emails',
      label: 'have I exchanged with David Thompson recently?',
      action: 'What emails have I exchanged with David Thompson recently?',
    },
    {
      title: 'Tell me about',
      label: 'Robert Williams',
      action: 'Tell me about Robert Williams',
    },
    {
      title: 'Any important',
      label: 'client dates in the next month?',
      action: 'Any important client dates in the next month?',
    },
    {
      title: 'Compare the performance',
      label: "of Sarah Johnson and David Thompson's portfolios",
      action:
        "Compare the performance of Sarah Johnson and David Thompson's portfolios",
    },
    {
      title: 'What recent market insights',
      label: "might be relevant to Sarah Johnson's portfolio?",
      action:
        "What recent market insights might be relevant to Sarah Johnson's portfolio?",
    },
  ];

  // REPE (Real Estate Private Equity) suggested actions
  const repeSuggestions = [
    {
      title: 'Show me',
      label: "Riverfront Tower's performance metrics for Q2",
      action: "Show me Riverfront Tower's performance metrics for Q2",
    },
    {
      title: 'What leases',
      label: 'are expiring in the next 6 months?',
      action: 'What leases are expiring in the next 6 months?',
    },
    {
      title: 'Tell me about',
      label: 'Westfield Plaza',
      action: 'Tell me about Westfield Plaza',
    },
    {
      title: 'How is',
      label: 'the Chicago office market performing?',
      action: 'How is the Chicago office market performing?',
    },
    {
      title: 'What are the 5-year projections',
      label: 'for Riverfront Tower?',
      action: 'What are the 5-year projections for Riverfront Tower?',
    },
    {
      title: 'Who are our top tenants',
      label: 'by square footage?',
      action: 'Who are our top tenants by square footage?',
    },
  ];

  // Select the appropriate suggestions based on app mode
  const suggestedActions = isWealthManagement
    ? wealthManagementSuggestions
    : repeSuggestions;

  return (
    <div
      data-testid="suggested-actions"
      className="grid sm:grid-cols-2 md:grid-cols-3 gap-2 w-full"
    >
      {suggestedActions.map((suggestedAction, index) => (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.05 * index }}
          key={`suggested-action-${suggestedAction.title}-${index}`}
          className={
            index > 3
              ? 'hidden md:block'
              : index > 1
                ? 'hidden sm:block'
                : 'block'
          }
        >
          <Button
            variant="ghost"
            onClick={async () => {
              window.history.replaceState({}, '', `/chat/${chatId}`);

              append({
                role: 'user',
                content: suggestedAction.action,
              });
            }}
            className="text-left border rounded-xl px-4 py-3.5 text-sm flex-1 gap-1 sm:flex-col w-full h-auto justify-start items-start"
          >
            <span className="font-medium">{suggestedAction.title}</span>
            <span className="text-muted-foreground">
              {suggestedAction.label}
            </span>
          </Button>
        </motion.div>
      ))}
    </div>
  );
}

export const SuggestedActions = memo(PureSuggestedActions, () => true);
