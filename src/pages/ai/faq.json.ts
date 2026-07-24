import type { APIRoute } from 'astro';
import { faqs } from '../../data/site';

export const GET: APIRoute = () => {
  return new Response(JSON.stringify({ faqs }, null, 2), {
    headers: { 'Content-Type': 'application/json' },
  });
};
