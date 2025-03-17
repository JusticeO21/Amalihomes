import type { ContentfulClientApi, CreateClientParams, Entry, EntryCollection, EntrySkeletonType } from "contentful";
import { createClient } from "contentful";

/**
 * Contentful Configuration
 *
 * This file sets up the Contentful client for fetching content from Contentful CMS.
 *
 * To use Contentful:
 * 1. Create a Contentful account at https://www.contentful.com/
 * 2. Create a new space in Contentful
 * 3. Create content models/types in your space
 * 4. Add the following environment variables to your .env.local file:
 *    - CONTENTFUL_SPACE_ID: Your space ID (found in Settings > API keys)
 *    - CONTENTFUL_ACCESS_TOKEN: Content Delivery API access token (found in Settings > API keys)
 *    - CONTENTFUL_PREVIEW_ACCESS_TOKEN: Content Preview API token (for draft content)
 *    - CONTENTFUL_PREVIEW_SECRET: A secret you define for enabling preview mode
 *    - CONTENTFUL_ENVIRONMENT: Usually 'master' unless you've created custom environments
 */

// Function to get client configuration options based on preview mode
function getClientOptions(preview: boolean = false): CreateClientParams {
  return {
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: preview ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN! : process.env.CONTENTFUL_ACCESS_TOKEN!,
    environment: process.env.CONTENTFUL_ENVIRONMENT ?? "master",
    ...(preview && { host: "preview.contentful.com" }),
  };
}

// Create a typed client for better type inference
let contentfulClient: ContentfulClientApi<undefined> | null = null;
let previewContentfulClient: ContentfulClientApi<undefined> | null = null;

/**
 * Get a typed Contentful client
 * @param preview Whether to use the preview client
 * @returns A typed Contentful client
 */
export function getContentfulClient(preview: boolean = false): ContentfulClientApi<undefined> {
  if (preview) {
    if (!previewContentfulClient) {
      previewContentfulClient = createClient(getClientOptions(true));
    }
    return previewContentfulClient;
  }

  if (!contentfulClient) {
    contentfulClient = createClient(getClientOptions());
  }
  return contentfulClient;
}

/**
 * Type-safe wrapper for fetching a single entry
 * @param contentType The content type ID
 * @param options Additional query options
 * @param preview Whether to fetch draft content
 */
export async function getEntry<T extends EntrySkeletonType>(
  contentType: string,
  options: Record<string, any> = {},
  preview: boolean = false,
): Promise<Entry<T>> {
  const client = getContentfulClient(preview);

  const entries = await client.getEntries({
    content_type: contentType,
    limit: 1,
    ...options,
  });

  if (!entries.items.length) {
    throw new Error(`No entry found for content type "${contentType}"`);
  }

  return entries.items[0] as Entry<T>;
}

/**
 * Type-safe wrapper for fetching multiple entries
 * @param contentType The content type ID
 * @param options Additional query options
 * @param preview Whether to fetch draft content
 */
export async function getEntries<T extends EntrySkeletonType>(
  contentType: string,
  options: Record<string, any> = {},
  preview: boolean = false,
): Promise<EntryCollection<T>> {
  const client = getContentfulClient(preview);

  const entries = (await client.getEntries({
    content_type: contentType,
    ...options,
  })) as EntryCollection<T>;

  return entries;
}
