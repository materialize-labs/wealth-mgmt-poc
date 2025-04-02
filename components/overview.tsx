import { motion } from 'framer-motion';
import Link from 'next/link';

import { MessageIcon } from './icons';

export const Overview = () => {
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
          <strong>Addepar</strong>, and <strong>Salesforce</strong>. To add more
          data sources, click the Data Sources button in the header.
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
};
