import supabase from "../db/supabase.js";

export async function insert(message) {
  const { data, error } = await supabase.from("messages").insert(message);
  if (error) throw error;
  return true;
}
