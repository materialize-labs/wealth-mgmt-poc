/**
 * Overview component that displays the welcome message and suggested prompts
 *
 * Changes:
 * - Modified to show different welcome messages based on app mode
 * - Added REPE-specific welcome message and suggested prompts for the REPE mode
 * - Kept original content for wealth management mode
 */

import { motion } from 'framer-motion';
import Link from 'next/link';

import { MessageIcon } from './icons';
import { isWealthManagement } from '@/config/app-config';

export const Overview = () => {
  if (isWealthManagement) {
    // Wealth Management mode content
    return (
      <motion.div
        key="overview"
        className="max-w-3xl mx-auto md:mt-20"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.98 }}
        transition={{ delay: 0.5 }}
      >
        <div className="rounded-xl p-6 flex flex-col gap-8 leading-relaxed text-center max-w-xl">
          <p className="flex flex-row justify-center gap-4 items-center">
            <MessageIcon size={32} />
          </p>
          <p>
            Welcome to WealthAdvisor, your unified wealth management assistant.
            You are currently connected to <strong>Outlook</strong>,{' '}
            <strong>Addepar</strong>, and <strong>Salesforce</strong>. To add
            more data sources, click the Data Sources button in the header.
          </p>
          <p>Try asking questions like:</p>
          <ul className="text-left mx-auto">
            <li>• "Show me Sarah Johnson's portfolio"</li>
            <li>
              • "What emails have I exchanged with David Thompson recently?"
            </li>
            <li>• "Tell me about Robert Williams"</li>
            <li>• "Any important client dates in the next month?"</li>
          </ul>
        </div>
      </motion.div>
    );
  } else {
    // REPE mode content
    return (
      <motion.div
        key="overview"
        className="max-w-3xl mx-auto md:mt-20"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.98 }}
        transition={{ delay: 0.5 }}
      >
        <div className="rounded-xl p-6 flex flex-col gap-8 leading-relaxed text-center max-w-xl">
          <p className="flex flex-row justify-center gap-4 items-center">
            <MessageIcon size={32} />
          </p>
          <p>
            Welcome to REPEAdvisor, your real estate private equity assistant.
            You are currently connected to <strong>Yardi</strong>,{' '}
            <strong>Argus</strong>, <strong>Gmail</strong>,{' '}
            <strong>Excel</strong>, and <strong>Google Sheets</strong>. To add
            more data sources, click the Data Sources button in the header.
          </p>
          <p>Try asking questions like:</p>
          <ul className="text-left mx-auto">
            <li>• "Show me Riverfront Tower's performance metrics for Q2"</li>
            <li>• "What leases are expiring in the next 6 months?"</li>
            <li>• "Tell me about Westfield Plaza"</li>
            <li>• "How is the Chicago office market performing?"</li>
          </ul>
        </div>
      </motion.div>
    );
  }
};
