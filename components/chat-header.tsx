'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useWindowSize } from 'usehooks-ts';
import { useState, useEffect } from 'react';

import { ModelSelector } from '@/components/model-selector';
import { SidebarToggle } from '@/components/sidebar-toggle';
import { Button } from '@/components/ui/button';
import { PlusIcon, GlobeIcon } from './icons';
import { useSidebar } from './ui/sidebar';
import { memo } from 'react';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';
import { VisibilitySelector } from './visibility-selector';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
} from '@/components/ui/alert-dialog';
import type { VisibilityType } from './visibility-selector';

function PureChatHeader({
  chatId,
  selectedModelId,
  selectedVisibilityType,
  isReadonly,
}: {
  chatId: string;
  selectedModelId: string;
  selectedVisibilityType: VisibilityType;
  isReadonly: boolean;
}) {
  const router = useRouter();
  const { open } = useSidebar();
  const [pluginDialogOpen, setPluginDialogOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const { width: windowWidth } = useWindowSize();

  // Fix hydration mismatch by waiting for client-side mount
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <header className="flex sticky top-0 bg-background py-1.5 items-center px-2 md:px-2 gap-2">
      <SidebarToggle />

      {/* Only render after mounting on client to prevent hydration mismatch */}
      {isMounted && (!open || windowWidth < 768) && (
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              className="order-2 md:order-1 md:px-2 px-2 md:h-fit ml-auto md:ml-0"
              onClick={() => {
                router.push('/');
                router.refresh();
              }}
            >
              <PlusIcon />
              <span className="md:sr-only">New Chat</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>New Chat</TooltipContent>
        </Tooltip>
      )}

      {!isReadonly && (
        <ModelSelector
          selectedModelId={selectedModelId}
          className="order-1 md:order-2"
        />
      )}

      {/* Visibility selector removed for wealth management POC
      {!isReadonly && (
        <VisibilitySelector
          chatId={chatId}
          selectedVisibilityType={selectedVisibilityType}
          className="order-1 md:order-3"
        />
      )}
      */}

      {/* Data Sources Button */}
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            className="order-3 md:order-4 md:px-2 px-2 md:h-fit md:ml-auto"
            onClick={() => setPluginDialogOpen(true)}
          >
            <GlobeIcon />
            <span className="ml-2 hidden md:inline">Data Sources</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>Connect Data Sources</TooltipContent>
      </Tooltip>

      {/* Data Sources Dialog */}
      <AlertDialog open={pluginDialogOpen} onOpenChange={setPluginDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Connected Data Sources</AlertDialogTitle>
            <AlertDialogDescription asChild>
              <div className="text-sm text-muted-foreground">
                <div className="py-4">
                  <div className="mb-4">Currently connected to:</div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 p-2 bg-muted/50 rounded-md">
                      <div className="h-3 w-3 bg-green-500 rounded-full" />
                      <span>Outlook (Email data)</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-muted/50 rounded-md">
                      <div className="h-3 w-3 bg-green-500 rounded-full" />
                      <span>Addepar (Portfolio data)</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-muted/50 rounded-md">
                      <div className="h-3 w-3 bg-green-500 rounded-full" />
                      <span>Salesforce (Client data)</span>
                    </div>
                  </div>
                  <div className="mt-6 mb-2">Additional plugins:</div>
                  <div className="text-center p-4 border border-dashed rounded-md">
                    <div className="text-muted-foreground mb-2">
                      More integrations coming soon
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Bloomberg, Factset, Morningstar, and more
                    </div>
                  </div>
                </div>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Close</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Deploy with Vercel button removed for wealth management POC
      <Button
        className="bg-zinc-900 dark:bg-zinc-100 hover:bg-zinc-800 dark:hover:bg-zinc-200 text-zinc-50 dark:text-zinc-900 hidden md:flex py-1.5 px-2 h-fit md:h-[34px] order-4 md:ml-auto"
        asChild
      >
        <Link
          href={`https://vercel.com/new/clone?repository-url=https://github.com/vercel/ai-chatbot&env=AUTH_SECRET&envDescription=Learn more about how to get the API Keys for the application&envLink=https://github.com/vercel/ai-chatbot/blob/main/.env.example&demo-title=AI Chatbot&demo-description=An Open-Source AI Chatbot Template Built With Next.js and the AI SDK by Vercel.&demo-url=https://chat.vercel.ai&products=[{"type":"integration","protocol":"ai","productSlug":"grok","integrationSlug":"xai"},{"type":"integration","protocol":"ai","productSlug":"api-key","integrationSlug":"groq"},{"type":"integration","protocol":"storage","productSlug":"neon","integrationSlug":"neon"},{"type":"blob"}]`}
          target="_noblank"
        >
          <VercelIcon size={16} />
          Deploy with Vercel
        </Link>
      </Button>
      */}
    </header>
  );
}

export const ChatHeader = memo(PureChatHeader, (prevProps, nextProps) => {
  return prevProps.selectedModelId === nextProps.selectedModelId;
});
