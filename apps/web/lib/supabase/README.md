# Supabase Integration Documentation

This document outlines the Supabase integration setup and usage in the Amali Homes project.

## Overview

We use Supabase as our backend-as-a-service (BaaS) solution for:

- Database storage
- Authentication
- Real-time capabilities
- Type-safe API access

## Configuration

### Environment Variables

Required environment variables in `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=your_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

### Client Initialization

The Supabase client is initialized in `supabase.ts`:

```typescript
import { createServerClient } from "@supabase/ssr";

const supabase = createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
```

## Type Safety

Type definitions are located in `database.types.ts` and provide:

### Helper Types

```typescript
// Get the row type for a table
type TableRow<T extends keyof Tables> = Tables[T]["Row"];

// Get the insert type for a table
type TableInsert<T extends keyof Tables> = Tables[T]["Insert"];

// Get the update type for a table
type TableUpdate<T extends keyof Tables> = Tables[T]["Update"];
```

### Usage Example

```typescript
import type { TableRow, TableInsert } from "./database.types";

// Type-safe property operations
type Property = TableRow<"properties">;
type NewProperty = TableInsert<"properties">;

// Type-safe profile operations
type Profile = TableRow<"profiles">;
type NewProfile = TableInsert<"profiles">;
```

## Generating TypeScript Types

To keep your TypeScript types in sync with your Supabase database schema, follow these steps:

1. Install the Supabase CLI globally:

   ```bash
   npm install -g supabase
   ```

2. Login to Supabase CLI:

   ```bash
   supabase login
   ```

3. Generate types for your project:
   ```bash
   supabase gen types typescript --project-id your-project-id --schema public > database.types.ts
   ```

Alternatively, you can use the direct database URL method:

```bash
supabase gen types typescript --db-url "postgresql://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT-REF].supabase.co:5432/postgres" > database.types.ts
```

### Best Practices for Type Generation

1. **Regular Updates**: Generate types after any database schema changes
2. **Version Control**: Commit the generated types to your repository

### Troubleshooting Type Generation

If you encounter issues:

1. Ensure you're logged in to Supabase CLI
2. Verify your project ID is correct
3. Check that your database connection is accessible
4. Make sure you have the latest Supabase CLI version

## Common Operations

### Querying Data

```typescript
// Fetch properties
const { data: properties, error } = await supabase.from("properties").select("*");

// Fetch profile by ID
const { data: profile, error } = await supabase.from("profiles").select("*").eq("id", userId).single();
```

### Inserting Data

```typescript
// Insert a new property
const { data, error } = await supabase.from("properties").insert({
  title: "New Property",
  description: "Property description",
  price: 250000,
  owner_id: userId,
  status: "available",
});
```

### Updating Data

```typescript
// Update property status
const { data, error } = await supabase.from("properties").update({ status: "sold" }).eq("id", propertyId);
```

## Best Practices

1. Always use TypeScript types for type safety
2. Handle errors appropriately for all database operations
3. Use RLS policies for data security
4. Keep sensitive operations server-side
5. Use appropriate property status enums

## Development Setup

1. Create a Supabase project at [https://supabase.com](https://supabase.com)
2. Get your project URL and anon key from the project settings
3. Add the environment variables to `.env.local`
4. Use the Supabase Dashboard for database management and monitoring

## Resources

- [Supabase Documentation](https://supabase.com/docs)
- [Supabase Dashboard](https://app.supabase.com)
- [Row Level Security Guide](https://supabase.com/docs/guides/auth/row-level-security)
- [TypeScript Support](https://supabase.com/docs/reference/typescript-support)
