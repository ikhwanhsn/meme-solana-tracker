const InputToken = () => {
  return (
    <main className=" bg-background text-text mt-24 w-fit mx-auto">
      <section className="space-x-1 mb-5">
        <input
          type="text"
          placeholder="Paste your token address here..."
          className="input w-96 text-text input-bordered bg-white"
        />
        <button className="btn btn-primary text-white">Track</button>
        <button className="btn btn-error text-white">Clear</button>
      </section>
    </main>
  );
};

export default InputToken;
