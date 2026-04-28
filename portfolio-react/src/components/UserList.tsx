import type { User } from "@/types/entities";

const UserList = ({ users }: { users: User[] }) => {
  if (!users.length) return <p>No users</p>;

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <a href={`/users/${user.id}`}>{user.name}</a>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
