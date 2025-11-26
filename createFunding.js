// createFunding.js
const SUPABASE_URL = "https://ovvvwbtexnbxzacizokr.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im92dnZ3YnRleG5ieHphY2l6b2tyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM1ODQ5OTEsImV4cCI6MjA3OTE2MDk5MX0.Ii21cw1Iyops8Zo784P-25NKz2m-TCyJ2zWwI4V1kcE";

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export async function createFunding(fundingData) {
  try {
    const { data, error } = await supabase
      .from("funding")
      .insert([fundingData])
      .select();

    if (error) {
      return { success: false, error };
    }

    return { success: true, data };
  } catch (err) {
    return { success: false, error: err };
  }
}
