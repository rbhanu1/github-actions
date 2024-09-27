import { app } from "./src/app";
import { describe, expect, it, vi } from "vitest";

it("should return json with id key", async () => {
  const data = await app();
  console.log(data);
  return expect(data.id).toBe(1);
});
