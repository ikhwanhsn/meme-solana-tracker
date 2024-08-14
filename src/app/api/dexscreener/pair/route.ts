export const GET = async (req: any) => {
  try {
    const address = req.nextUrl.searchParams.get("address");

    if (!address) throw new Error("Please enter token address");
    if (address.length < 30)
      throw new Error("Please enter valid token address");

    const res = await fetch(
      `https://api.dexscreener.com/latest/dex/tokens/${address}`
    );
    if (!res.ok) throw new Error("Something went wrong");
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
