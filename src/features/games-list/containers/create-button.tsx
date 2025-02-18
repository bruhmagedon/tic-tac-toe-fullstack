"use client";

import { Button } from "@/shared/ui/button";

import { startTransition } from "react";
import { createGameAction } from "../actions/create-game";
import { right, mapLeft } from "@/shared/lib/either";
import { useActionState } from "@/shared/lib/react";

export function CreateButton() {
  const [state, dispatch, isPending] = useActionState(
    createGameAction,
    right(undefined),
  );

  return (
    <Button
      disabled={isPending}
      onClick={() => startTransition(dispatch)}
      error={mapLeft(
        state,
        (e) =>
          ({
            ["can-create-only-one-game"]: "Вы можете создать только одну игру",
            ["user-not-found"]: "Пользователя нету",
          })[e],
      )}
    >
      Создать игру
    </Button>
  );
}