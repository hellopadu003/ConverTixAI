import { createClient } from '@supabase/supabase-js';

// Configuration
const supabaseUrl = 'https://ubwwrqpffufeppymmhqz.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVid3dycXBmZnVmZXBweW1taHF6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg1Mzk4MjUsImV4cCI6MjA4NDExNTgyNX0.GDMs9q0npPTq6oK-Tpwapv0gCppgkvAMG1tftb-HNuY';

export const supabase = createClient(supabaseUrl, supabaseKey);
