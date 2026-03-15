import { describe, test, expect } from "vitest";
import { getAPIKey } from "../api/auth.js";
import { IncomingHttpHeaders } from "http";

describe("getAPIKey", () => {
  test("returns null if no Authorization header", () => {
    const headers: IncomingHttpHeaders = {};
    expect(getAPIKey(headers)).toBeNull();
  });

  test("returns null if Authorization header is malformed", () => {
    const headers: IncomingHttpHeaders = {
      authorization: "Bearer abc123",
    };
    expect(getAPIKey(headers)).toBeNull();
  });

  test("returns API key if header is correct", () => {
    const headers: IncomingHttpHeaders = {
      authorization: "ApiKey my-secret-key",
    };
    expect(getAPIKey(headers)).toBe("my-secret-key");
  });

  test("returns null if header has only 'ApiKey' without key", () => {
    const headers: IncomingHttpHeaders = {
      authorization: "ApiKey",
    };
    expect(getAPIKey(headers)).toBeNull();
  });
});
