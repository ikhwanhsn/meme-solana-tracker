export const GET = async (req: any) => {
  try {
    const query = req.nextUrl.searchParams.get("q");

    if (!query) throw new Error("Please enter search query");

    const res = await fetch(
      `https://api.dexscreener.com/latest/dex/search?q=${query}`
    );
    const data = await res.json();

    return new Response(
      JSON.stringify({
        success: true,
        data,
      }),
      {
        headers: {
          "content-type": "application/json",
        },
      }
    );
  } catch (error: any) {
    console.log(error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message,
      }),
      {
        headers: {
          "content-type": "application/json",
        },
      }
    );
  }
};
