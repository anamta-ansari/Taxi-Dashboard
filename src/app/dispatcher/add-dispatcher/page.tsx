import { AddUserForm } from '../../Components/dispatchers/AdddispatcherForm';

export default function AddUserPage() {
  return (
    <div className="min-h-screen dark:bg-[#161c24] bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <AddUserForm />
      </div>
    </div>
  );
}