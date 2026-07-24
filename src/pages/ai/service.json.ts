import type { APIRoute } from 'astro';
import { siteInfo, services } from '../../data/site';

export const GET: APIRoute = () => {
  const body = {
    provider: siteInfo.name,
    areaServed: siteInfo.areaServed,
    services,
  };

  return new Response(JSON.stringify(body, null, 2), {
    headers: { 'Content-Type': 'application/json' },
  });
};
