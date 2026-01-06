import { AddRoleForm } from '@/app/Components/dispatchers/AddRoleForm';

export default function CreateRolePage() {
  return (
    <div className="min-h-screen dark:bg-[#161c24] bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <AddRoleForm />
      </div>
    </div>
  );
}