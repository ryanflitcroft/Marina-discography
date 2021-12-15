const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTUyNjM5MywiZXhwIjoxOTU1MTAyMzkzfQ.zUGoCjOsJapPHhBNJkiG9UVQZjeKsKura8dMj0L1SNE';

const SUPABASE_URL = 'https://hibmuluxbfmohghrxvae.supabase.co';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getDiscography() {
    const response = await client
        .from('Marina')
        .select();
    // console.log(response.data);
    return response.data;
}

export async function getDisc(id) {
    const response = await client
        .from('Marina')
        .select()
        .match({ id: id })
        .single();

    return response.data;
}