export const getTokenByQuery = async (q: string) => {
  try {
    const res = await fetch(`/api/dexscreener/search?q=${q}`);

    if (!res.ok) {
      throw new Error("Failed to fetch token data");
    }

    return await res.json();
  } catch (error) {
    console.log(error);
  }
};
