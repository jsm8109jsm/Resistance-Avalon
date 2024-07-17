import { mockedAxios } from "@/utils/mockedAxios";
import axios from "axios";

jest.mock("axios");

describe("Regular Expression Matching", () => {
  it("should match the regex for a 6 character alphanumeric string", async () => {
    const regex = /^[A-Za-z0-9]{6}$/;

    const mockResponse = { data: { code: "ABC123" }, status: 200 };
    mockedAxios.get.mockResolvedValue(mockResponse);

    const response = await axios.get("/api/game/code");

    expect(response.status).toBe(200);
    expect(response.data.code).toMatch(regex);
  });
});
