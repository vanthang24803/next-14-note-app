import { auth } from "@clerk/nextjs";

const OrganizationIdPage = async () => {
  const { userId, orgId } = auth();
  return (
    <div className="w-full mb-20">
      <span className="text-2xl font-medium">
        Hello World
      </span>
    </div>
  );
};

export default OrganizationIdPage;
