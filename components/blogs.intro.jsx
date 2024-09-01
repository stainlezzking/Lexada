export default function BlogIntro({ title, children }) {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-extrabold text-main max-w-[770px] mx-auto text-center">{title}</h1>
      <h3 className="max-w-[800px] mx-auto text-lg text-center">{children}</h3>
    </div>
  );
}
