"use client";

import { FC } from "react";

export const ItemCount: FC<{ count: number; name: string }> = function ({
  count,
  name,
}) {
  return (
    <div>
      {name} count: {count}
    </div>
  );
};
