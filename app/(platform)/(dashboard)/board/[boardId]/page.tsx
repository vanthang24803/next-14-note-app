import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

interface BoardIdPageProps {
  params: {
    boardId: string;
  };
}

const BoardIdPage = async ({ params }: BoardIdPageProps) => {
  const { orgId } = auth();

  if (!orgId) {
    redirect("/select-org");
  }

  return (
    <div className="p-4 h-full overflow-x-auto">
      <span
        className="mt-20 text-white
    "
      >
        {params.boardId}
      </span>
    </div>
  );
};

export default BoardIdPage;
