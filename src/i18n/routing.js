import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';
import { routingConfig } from './routing-config.mjs';

export const routing = defineRouting(routingConfig);

export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);
