import { XFollowCard } from "./components/XFollowCard";
import "./App.css";

const users = [
  {
    userName: "Elon Musk",
    user: "elonMusk",
    initialIsFollowing: false,
  },
  {
    userName: "Cristiano Ronaldo",
    user: "cr7Ronaldo",
    initialIsFollowing: true,
  },
  {
    userName: "Gabriel Gonzales",
    user: "gabo1997",
    initialIsFollowing: false,
  },
  {
    userName: "Paul Pogba",
    user: "pulpoPol",
    initialIsFollowing: false,
  },
];

export function App() {
  return (
    <section className="follow-article">
      {users.map(user => {
        const { name, userName, initialIsFollowing } = user;

        return (
          <XFollowCard
            userName={name}
            user={userName}
            initialIsFollowing={initialIsFollowing}
            key={userName}
          />
        );
      })}
    </section>
  );
}
