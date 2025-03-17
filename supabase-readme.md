# Supabase Setup Documentation

This document outlines the Supabase integration setup and usage in our project.

## Overview

We use Supabase as our backend-as-a-service (BaaS) solution, providing:
- Database hosting
- Authentication
- Real-time subscriptions
- Auto-generated type-safe APIs

## Environment Variables

The following environment variables are required for the Supabase integration:

```env
NEXT_PUBLIC_SUPABASE_URL=your_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

### Variable Descriptions:
- `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your project's anonymous key for public API access

## Database Schema

Our Supabase database includes the following tables:

### Profiles Table
```typescript
{
  id: string;
  created_at: string;
  first_name: string;
  last_name: string;
  avatar_url: string;
}
```

### Properties Table
```typescript
{
  id: string;
  created_at: string;
  title: string;
  description: string;
  price: number;
  owner_id: string;
  status: string;
}
```

### Todo Table
```typescript
{
  created_at: string;
  description: string | null;
  id: number;
  isCompleted: boolean | null;
  title: string | null;
}
```

### Enums

Property Status:
- available
- rented
- sold
- pending

### Composite Types

Address:
```typescript
{
  street: string;
  city: string;
  state: string;
  zip_code: string;
  country: string;
}
```

## Type Safety

The project includes automatically generated TypeScript types for the database schema. These types are located in `app/supabase/database.types.ts` and provide:

- Full type safety for table operations
- Type definitions for table rows, inserts, and updates
- Enum and composite type definitions
- Generic helper types for table operations

Example usage:
```typescript
import type { TableRow, TableInsert, TableUpdate } from './database.types';

// Type-safe row access
type Profile = TableRow<'profiles'>;

// Type-safe insert
type NewProperty = TableInsert<'properties'>;

// Type-safe update
type PropertyUpdate = TableUpdate<'properties'>;
```

## Setup Instructions

1. Create a Supabase account at https://supabase.com
2. Create a new project
3. Navigate to Project Settings > API to find your project URL and anon key
4. Add the environment variables to your `.env.local` file
5. Initialize the Supabase client in your application:
   ```typescript
   import { createBrowserClient } from "@supabase/ssr";
   
   const supabase = createBrowserClient(
     process.env.NEXT_PUBLIC_SUPABASE_URL,
     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
   );
   ```

## Best Practices

1. Always use type-safe queries with the provided TypeScript types
2. Keep sensitive operations server-side using Row Level Security (RLS)
3. Use environment variables for configuration
4. Implement proper error handling for database operations
5. Use the appropriate status enum values for properties

## Database Migrations

To make changes to the database schema:
1. Use the Supabase Dashboard or SQL editor
2. Update the TypeScript types to reflect schema changes
3. Test the changes in a development environment before deploying

## Support

For more information about Supabase features and API:
- [Supabase Documentation](https://supabase.com/docs)
- [Supabase JavaScript Client](https://supabase.com/docs/reference/javascript)
- [Supabase Dashboard](https://app.supabase.com)
- [Row Level Security](https://supabase.com/docs/guides/auth/row-level-security)

