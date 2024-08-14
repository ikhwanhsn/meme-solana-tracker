export const getTokenByAddress = async (address: string) => {
  try {
    const res = await fetch(`/api/dexscreener/pair?address=${address}`);

    if (!res.ok) {
      throw new Error("Failed to fetch token data");
    }

    return await res.json();
  } catch (error) {
    console.log(error);
  }
};
