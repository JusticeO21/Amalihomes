# Contentful Setup Documentation

This document outlines the Contentful CMS integration setup and usage in our project.

## Overview

We use Contentful as our headless CMS solution to manage and deliver content to our application. The integration is set up with both regular delivery and preview capabilities.

## Environment Variables

The following environment variables are required for the Contentful integration:

```env
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_TOKEN=your_delivery_api_token
CONTENTFUL_PREVIEW_ACCESS_TOKEN=your_preview_api_token
CONTENTFUL_PREVIEW_SECRET=your_preview_secret
CONTENTFUL_ENVIRONMENT=master
```

### Variable Descriptions:

- `CONTENTFUL_SPACE_ID`: Your Contentful space identifier (found in Settings > API keys)
- `CONTENTFUL_ACCESS_TOKEN`: Content Delivery API access token for published content
- `CONTENTFUL_PREVIEW_ACCESS_TOKEN`: Content Preview API token for draft content
- `CONTENTFUL_PREVIEW_SECRET`: Custom secret for enabling preview mode
- `CONTENTFUL_ENVIRONMENT`: Contentful environment (defaults to 'master')

## Setup Instructions

1. Create a Contentful account at https://www.contentful.com/
2. Create a new space in Contentful
3. Create your content models/types in the space
4. Navigate to Settings > API keys to get your space ID and access tokens
5. Copy the provided environment variables to your `.env.local` file
6. Replace the placeholder values with your actual Contentful credentials

## Utility Functions

The integration provides several utility functions for fetching content:

### `getContentfulClient(preview?: boolean)`

Creates and returns a typed Contentful client instance. Set `preview` to `true` to access draft content.

```typescript
const client = getContentfulClient();
const previewClient = getContentfulClient(true);
```

### `getEntry<T>(contentType: string, options?: Record<string, any>, preview?: boolean)`

Fetches a single entry of the specified content type with type safety.

```typescript
const entry = await getEntry<BlogPost>("blogPost", { "fields.slug": "my-post" });
```

### `getEntries<T>(contentType: string, options?: Record<string, any>, preview?: boolean)`

Fetches multiple entries of the specified content type with type safety.

```typescript
const entries = await getEntries<BlogPost>("blogPost", { limit: 10 });
```

## Type Safety

The integration is fully typed using TypeScript. To ensure type safety when fetching content:

1. Define your content type interfaces
2. Use the generic type parameters with the utility functions
3. TypeScript will provide autocomplete and type checking for your content

## Best Practices

1. Always use the utility functions instead of creating new client instances
2. Implement proper error handling when fetching content
3. Use preview mode during development to access draft content
4. Cache responses when appropriate to minimize API calls

## Support

For more information about Contentful's features and API:

- [Contentful Documentation](https://www.contentful.com/developers/docs/)
- [Content Delivery API](https://www.contentful.com/developers/docs/references/content-delivery-api/)
- [Content Preview API](https://www.contentful.com/developers/docs/references/content-preview-api/)
