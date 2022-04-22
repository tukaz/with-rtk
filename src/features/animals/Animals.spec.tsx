import { rest } from "msw";
import { render, screen, waitFor } from "@testing-library/react";
import { data } from "./test.utils";
import { setupServer } from "msw/node";
import reducer, { fetchAnimalsAsync, AnimalT } from "./animalsSlice";
import Animals from "./Animals";
import { waitForElementToBeRemoved } from "@testing-library/react";

jest.mock("./animalsAPI", () => ({
  fetchAnimals: (amount: number) =>
    new Promise<{ data: Partial<AnimalT[]> }>((resolve) =>
      // @ts-ignore:next-line

      setTimeout(() => resolve(data), 500)
    ),
}));

describe("<Animals />", () => {
  it("renders the component", () => {
    render(<Animals />);

    expect(screen.getByText(/Loading/)).toBeInTheDocument();
  });

  it("should return the initial state", () => {
    expect(
      reducer(undefined, {
        type: undefined,
      })
    ).toEqual({
      animals: [],
      status: "idle",
    });
  });
});

describe("Async testing", () => {
  it("fetches & receives a user after clicking the fetch user button", async () => {
    render(<Animals />);

    // should show no user initially, and not be fetching a user
    const loadingSpan = screen.getByRole("contentinfo");
    expect(loadingSpan).toBeInTheDocument();
    await waitForElementToBeRemoved(loadingSpan);

    expect(screen.getByText(/Sumatran Orangutan/i)).toBeInTheDocument();
    // await waitFor(() => {
    //
    // });
    // expect(screen.queryByText(/no user/i)).not.toBeInTheDocument();
    // expect(screen.queryByText(/Fetching user\.\.\./i)).not.toBeInTheDocument();
  });
});
