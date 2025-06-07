import { type UserProps } from '@/interfaces';

export default function UserCard({ name, email, address }: UserProps) {
  return (
    <div className="border rounded-md p-4 shadow-md bg-white">
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-gray-700">{email}</p>
      <p className="text-sm text-gray-600">{address.street}, {address.city}</p>
    </div>
  );
}
