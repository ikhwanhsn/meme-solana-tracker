import Navbar from "./Navbar";

const AppShell = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen bg-background text-text">
      <Navbar />
      <section className="w-full h-16"></section>
      {children}
    </main>
  );
};

export default AppShell;
