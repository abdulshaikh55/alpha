import { supabase } from "@/lib/supabase";

export async function fetchMap() {
  const { data, error } = await supabase
  .from('map')
  .select('id, map_title');

  if (error) {
    console.error('Error fetching map', error);
    return [];
  }

  return data;
}
