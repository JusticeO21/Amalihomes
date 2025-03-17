export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: PublicSchema
}

export interface PublicSchema {
  Tables: Tables
  Views: {
    [_ in never]: never
  }
  Functions: {
    [_ in never]: never
  }
  Enums: Enums
  CompositeTypes: CompositeTypes
}

export interface Tables {
  profiles: {
    Row: {
      id: string
      created_at: string
      first_name: string
      last_name: string
      avatar_url: string
    }
    Insert: {
      id: string
      created_at?: string
      first_name: string
      last_name: string
      avatar_url?: string
    }
    Update: {
      id?: string
      created_at?: string
      first_name?: string
      last_name?: string
      avatar_url?: string
    }
  }
  properties: {
    Row: {
      id: string
      created_at: string
      title: string
      description: string
      price: number
      owner_id: string
      status: string
    }
    Insert: {
      id?: string
      created_at?: string
      title: string
      description: string
      price: number
      owner_id: string
      status?: string
    }
    Update: {
      id?: string
      created_at?: string
      title?: string
      description?: string
      price?: number
      owner_id?: string
      status?: string
    }
  }
  todo: {
    Row: {
      created_at: string
      description: string | null
      id: number
      isCompleted: boolean | null
      title: string | null
    }
    Insert: {
      created_at?: string
      description?: string | null
      id?: number
      isCompleted?: boolean | null
      title?: string | null
    }
    Update: {
      created_at?: string
      description?: string | null
      id?: number
      isCompleted?: boolean | null
      title?: string | null
    }
    Relationships: []
  }
}

export interface TablesInsert {
  profiles: Tables["profiles"]["Insert"]
  properties: Tables["properties"]["Insert"]
  todo: Tables["todo"]["Insert"]
}

export interface TablesUpdate {
  profiles: Tables["profiles"]["Update"]
  properties: Tables["properties"]["Update"]
  todo: Tables["todo"]["Update"]
}

export interface Enums {
  property_status: "available" | "rented" | "sold" | "pending"
}

export interface CompositeTypes {
  address: {
    street: string
    city: string
    state: string
    zip_code: string
    country: string
  }
}

// Generic helper types for reusable table selection patterns
export type TableRow<T extends keyof Tables> = Tables[T]["Row"]
export type TableInsert<T extends keyof Tables> = Tables[T]["Insert"]
export type TableUpdate<T extends keyof Tables> = Tables[T]["Update"]
