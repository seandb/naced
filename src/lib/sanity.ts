import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = import.meta.env.PUBLIC_SANITY_DATASET || 'production';

// The Sanity client validates that projectId looks like a real ID (no spaces,
// not the placeholder string).  If it isn't configured yet we still want the
// site to build, so we guard the client creation.
const isConfigured =
  typeof projectId === 'string' &&
  projectId.length > 0 &&
  projectId !== 'YOUR_PROJECT_ID' &&
  !/\s/.test(projectId);

export const client = isConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion: '2024-01-01',
      useCdn: true,
    })
  : null;

const builder = client ? imageUrlBuilder(client) : null;

export function urlFor(source: any) {
  if (!builder) return { url: () => '' };
  return builder.image(source);
}

/**
 * Fetch data from Sanity.  Returns null when:
 *  - the client is not configured (missing / placeholder project ID)
 *  - Sanity returns no result
 *  - a network / query error occurs
 */
export async function sanityFetch<T>(
  query: string,
  params?: Record<string, any>
): Promise<T | null> {
  if (!client) {
    // Not configured yet — fall through to per-page fallback content
    return null;
  }
  try {
    const result = await client.fetch<T>(query, params ?? {});
    return result ?? null;
  } catch (err) {
    console.warn('[Sanity] fetch error:', err);
    return null;
  }
}
