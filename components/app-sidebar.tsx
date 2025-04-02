'use client';

import type { User } from 'next-auth';
import { useRouter } from 'next/navigation';

import { PlusIcon } from '@/components/icons';
import { SidebarHistory } from '@/components/sidebar-history';
import { SidebarUserNav } from '@/components/sidebar-user-nav';
import { Button } from '@/components/ui/button';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  useSidebar,
} from '@/components/ui/sidebar';
import Link from 'next/link';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';

// IEQ Logo component
const IEQLogo = () => (
  <svg
    viewBox="-1 0 87 82"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    className="w-16 h-16 mb-1"
    focusable="false"
    tabIndex={-1}
  >
    <title>IEQ Logo</title>
    <defs>
      <filter id="filter-1">
        <feColorMatrix
          in="SourceGraphic"
          type="matrix"
          values="0 0 0 0 0.913725 0 0 0 0 0.933333 0 0 0 0 0.956863 0 0 0 1.000000 0"
        ></feColorMatrix>
      </filter>
    </defs>
    <g
      className="ieq-logo__bg"
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
      focusable="false"
      tabIndex={-1}
    >
      <g
        className="ieq-logo"
        transform="translate(-118.000000, -113.000000)"
        focusable="false"
        tabIndex={-1}
      >
        <g
          id="Group-23"
          transform="translate(118.000000, 114.000000)"
          tabIndex={-1}
        >
          <path
            className="ieq-logo__border"
            d="M1.73417469,78.3678345 L83.2660211,78.3678345 L83.2660211,1.63198123 L1.73417469,1.63198123 L1.73417469,78.3678345 Z M1.25,78.8235294 L83.75,78.8235294 L83.75,1.17647059 L1.25,1.17647059 L1.25,78.8235294 Z"
            fill="currentColor"
            tabIndex={-1}
          ></path>
          <g filter="url(/#filter-1)" tabIndex={-1}>
            <g
              transform="translate(10.000000, 18.823529)"
              className="ieq-logo__letters"
              tabIndex={-1}
            >
              <path
                d="M7.32833218,38.6121373 C6.76166551,38.2862113 6.13223264,38.0936187 4.99909606,38.0936187 C3.18910764,38.0936187 1.89856366,38.7751002 1.89856366,40.3376928 C1.89856366,41.8113965 3.13421181,42.5817669 5.02270718,42.5817669 C5.88038079,42.5817669 6.7380544,42.4632484 7.19453588,42.2780632 L8.17813542,41.1080632 L8.38276505,41.1376928 L8.08369097,42.5595447 C7.46999884,42.892878 6.21073958,43.0556558 5.01483681,43.0556558 C2.52012616,43.0556558 0.741815972,42.1373224 0.741815972,40.3376928 C0.741815972,38.5454706 2.45735995,37.6197298 4.99909606,37.6197298 C6.15584375,37.6197298 6.83249884,37.8197298 7.49360995,38.1084336 L7.88712847,37.7454706 L8.09943171,37.7232484 L8.26470949,39.700841 L8.06007986,39.7156558 L7.32833218,38.6121373 Z"
                id="Fill-3"
                fill="currentColor"
                tabIndex={-1}
              ></path>
              <path
                d="M13.373485,40.9821187 L16.5367836,40.9821187 L14.9552326,38.4860076 L13.373485,40.9821187 Z M15.6082766,37.7530447 L18.5120498,42.3298965 L19.7632419,42.7521187 L19.7632419,42.9373039 L16.253647,42.9373039 L16.253647,42.7521187 L17.4025243,42.3447113 L16.8439248,41.4710076 L13.0665405,41.4710076 L12.5236817,42.3224891 L13.8299664,42.7521187 L13.8299664,42.9373039 L10.4933229,42.9373039 L10.4933229,42.7521187 L11.7525822,42.3298965 L14.4279178,38.308415 L13.2792373,37.9306373 L13.2792373,37.7530447 L15.6082766,37.7530447 Z"
                id="Fill-5"
                fill="currentColor"
                tabIndex={-1}
              ></path>
              <path
                d="M24.0849606,38.2269336 L24.0849606,40.4265632 L26.0600301,40.4265632 C27.4056667,40.4265632 27.7755741,39.9080447 27.7755741,39.3230447 C27.7755741,38.7380447 27.4056667,38.2269336 26.0600301,38.2269336 L24.0849606,38.2269336 Z M21.7950764,42.7521187 L23.0856204,42.3150817 L23.0856204,38.3602669 L21.7950764,37.9306373 L21.7950764,37.7528595 L26.0051343,37.7528595 C28.0116852,37.7528595 28.8300069,38.3306373 28.8300069,39.3230447 C28.8300069,40.3006373 28.0116852,40.9006373 26.0051343,40.9006373 L24.0849606,40.9006373 L24.0849606,42.3150817 L25.3755046,42.7521187 L25.3755046,42.9373039 L21.7950764,42.9373039 L21.7950764,42.7521187 Z"
                id="Fill-7"
                fill="currentColor"
                tabIndex={-1}
              ></path>
              <polygon
                id="Fill-9"
                fill="currentColor"
                points="31.2240162 42.7520447 32.5145602 42.3151928 32.5145602 38.3676002 31.2240162 37.9307484 31.2240162 37.7529706 34.8042477 37.7529706 34.8042477 37.9381558 33.5139005 38.3676002 33.5139005 42.3151928 34.8042477 42.7520447 34.8042477 42.9372298 31.2240162 42.9372298"
                tabIndex={-1}
              ></polygon>
              <polygon
                id="Fill-11"
                fill="currentColor"
                points="39.0544248 42.7520447 40.2583947 42.4335261 40.2583947 38.2268595 38.2754549 38.2268595 37.6145405 39.5007484 37.4099109 39.5007484 37.4650035 37.6714891 37.6930475 37.6714891 38.3698993 37.7529706 43.1385567 37.7529706 43.8230822 37.6714891 44.0513229 37.6714891 44.0985451 39.5007484 43.8705012 39.5007484 43.2406748 38.2268595 41.257735 38.2268595 41.257735 42.4335261 42.4538345 42.7520447 42.4538345 42.9372298 39.0544248 42.9372298"
                tabIndex={-1}
              ></polygon>
              <path
                d="M48.3415012,40.9821187 L51.5047998,40.9821187 L49.9232488,38.4860076 L48.3415012,40.9821187 Z M50.5762928,37.7530447 L53.480066,42.3298965 L54.7312581,42.7521187 L54.7312581,42.9373039 L51.2216632,42.9373039 L51.2216632,42.7521187 L52.3705405,42.3447113 L51.811941,41.4710076 L48.0345567,41.4710076 L47.4916979,42.3224891 L48.7979826,42.7521187 L48.7979826,42.9373039 L45.4613391,42.9373039 L45.4613391,42.7521187 L46.7205984,42.3298965 L49.395934,38.308415 L48.2472535,37.9306373 L48.2472535,37.7530447 L50.5762928,37.7530447 Z"
                id="Fill-13"
                fill="currentColor"
                tabIndex={-1}
              ></path>
              <polygon
                id="Fill-15"
                fill="currentColor"
                points="56.7631319 42.7520447 58.0536759 42.3151928 58.0536759 38.3676002 56.7631319 37.9307484 56.7631319 37.7529706 60.3433634 37.7529706 60.3433634 37.9381558 59.0530162 38.3676002 59.0530162 42.4557484 62.2241852 42.4557484 63.3100995 41.1005632 63.5225995 41.152415 63.0818588 42.9372298 58.6673681 42.9298224 58.6673681 42.9372298 56.7631319 42.9372298"
                tabIndex={-1}
              ></polygon>
              <polygon
                id="Fill-17"
                fill="currentColor"
                points="4.94878472 26.2233224 7.56292824 26.2233224 7.56292824 0.873877996 4.94878472 0.873877996"
                tabIndex={-1}
              ></polygon>
              <polygon
                id="Fill-19"
                fill="currentColor"
                points="52.5441412 24.1729336 54.6783889 22.7518224 61.2111898 31.4427484 58.0087361 31.4427484"
                tabIndex={-1}
              ></polygon>
              <polygon
                id="Fill-20"
                fill="currentColor"
                points="14.6122616 0.873877996 30.851787 0.873877996 30.851787 3.03591503 17.1868565 3.03591503 17.1868565 15.710915 29.3863241 15.710915 29.3863241 17.8357298 17.1868565 17.8357298 17.1868565 24.0612854 31.4064514 24.0612854 31.4064514 26.2233224 14.6122616 26.2233224"
                tabIndex={-1}
              ></polygon>
              <path
                d="M58.8546632,13.5485817 C58.8546632,7.39747059 54.1410984,2.77506318 47.7247789,2.77506318 C41.308066,2.77506318 36.5946979,7.39747059 36.5946979,13.5485817 C36.5946979,19.6995076 41.308066,24.3221002 47.7247789,24.3221002 C54.1410984,24.3221002 58.8546632,19.6995076 58.8546632,13.5485817 M33.9012604,13.5485817 C33.9012604,6.05561874 40.0800914,0.575433551 47.7247789,0.575433551 C55.3690729,0.575433551 61.5481007,6.05561874 61.5481007,13.5485817 C61.5481007,21.0415447 55.3690729,26.5215447 47.7247789,26.5215447 C40.0800914,26.5215447 33.9012604,21.0415447 33.9012604,13.5485817"
                id="Fill-21"
                fill="currentColor"
                tabIndex={-1}
              ></path>
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
);

export function AppSidebar({ user }: { user: User | undefined }) {
  const router = useRouter();
  const { setOpenMobile } = useSidebar();

  return (
    <Sidebar className="group-data-[side=left]:border-r-0">
      <SidebarHeader>
        <SidebarMenu>
          <div className="flex flex-row justify-between items-start">
            <Link
              href="/"
              onClick={() => {
                setOpenMobile(false);
              }}
              className="flex flex-col items-start pl-2 pt-2"
            >
              <IEQLogo />
              <span className="text-lg font-semibold hover:bg-muted rounded-md cursor-pointer">
                WealthAdvisor
              </span>
            </Link>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  type="button"
                  className="p-2 h-fit"
                  onClick={() => {
                    setOpenMobile(false);
                    router.push('/');
                    router.refresh();
                  }}
                >
                  <PlusIcon />
                </Button>
              </TooltipTrigger>
              <TooltipContent align="end">New Chat</TooltipContent>
            </Tooltip>
          </div>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarHistory user={user} />
      </SidebarContent>
      <SidebarFooter>{user && <SidebarUserNav user={user} />}</SidebarFooter>
    </Sidebar>
  );
}
