import type { APIRoute } from 'astro';
import { siteInfo, services } from '../../data/site';

export const GET: APIRoute = () => {
  const body = {
    name: siteInfo.name,
    url: siteInfo.url,
    description: siteInfo.description,
    email: siteInfo.email,
    telephone: siteInfo.telephone,
    areaServed: siteInfo.areaServed,
    services: services.map((s) => s.name),
    sameAs: siteInfo.sameAs,
  };

  return new Response(JSON.stringify(body, null, 2), {
    headers: { 'Content-Type': 'application/json' },
  });
};
