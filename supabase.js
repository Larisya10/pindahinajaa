import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const SUPABASE_URL = 'https://xthkkjcmfvgsnqphetlw.supabase.co';

const SUPABASE_KEY = 'sb_publishable_tGQfODY-xYsFhf8nTFFodQ_IYbulK8g';

export const supabase = createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

window.supabase = supabase;

