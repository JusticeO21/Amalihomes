import type { ContentfulClientApi, CreateClientParams, Entry, EntryCollection, EntrySkeletonType } from "contentful";
import { createClient } from "contentful";

// Function to get client configuration options based on preview mode
function getClientOptions(preview: boolean = false): CreateClientParams {
  return {
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: preview ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN : process.env.CONTENTFUL_ACCESS_TOKEN,
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
  options: Record<string, unknown> = {},
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
  options: Record<string, unknown> = {},
  preview: boolean = false,
): Promise<EntryCollection<T>> {
  const client = getContentfulClient(preview);

  const entries = (await client.getEntries({
    content_type: contentType,
    ...options,
  })) as EntryCollection<T>;

  return entries;
}
