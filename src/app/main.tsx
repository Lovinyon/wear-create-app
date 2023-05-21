export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-8xl mx-auto container px-4 dark:bg-gray-800">
      {children}
    </div>
  );
}
