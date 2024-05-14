import AuthButton from "@/components/AuthButton";

// the point of this page is to help you out with level 3 of the workshop
export default async function Dashboard() {
  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
          <AuthButton />
        </div>
      </nav>
    </div>
  );
}
