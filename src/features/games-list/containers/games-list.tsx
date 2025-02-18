import { getIdleGames } from "@/entities/game/server";
import { Layout } from "../ui/layout";
import { CreateButton } from "./create-button";
import { GameCard } from "../ui/game-cart";

export async function GamesList() {
  const games = await getIdleGames();

  return (
    <Layout actions={<CreateButton />}>
      {games.map((game) => (
        <GameCard
          key={game.id}
          login={game.creator.login}
          rating={game.creator.rating}
        />
      ))}
    </Layout>
  );
}