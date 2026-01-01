import supabase from "../db/supabase.js";

export async function insertMessage(message) {
  const { data, error } = await supabase.from("messages").insert(message);
  if (error) throw error;
  return data;
}

export async function getLast() {
  const { data, error } = await supabase.from("messages").select();
  if (error) throw error;
  return data[data.length - 1];
}

export async function findMessage(parametor,value) {
  const { data, error } = await supabase.from("messages").select().eq(parametor, value);
  console.log('res: ',data);
  
  if (error) throw error;
  return data[0];
}

export async function findMessages(parametor,value) {
  const { data, error } = await supabase.from("messages").select().eq(parametor, value);
  if (error) throw error;
  return data;
}
