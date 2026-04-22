import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'

export const SUPABASE_URL = 'https://vizbdtclikqsoyamjpmk.supabase.co'
export const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZpemJkdGNsaWtxc295YW1qcG1rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY4NTcwMDQsImV4cCI6MjA5MjQzMzAwNH0.MU1CF66aim87dn9OTKUYOUej82ICn_bV2d8EE5qSzSM'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON)
