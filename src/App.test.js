import{render, screen, waitFor} from "@testing-library/react";
import user from "@testing-library/user-event";
import App from "./App";

test("show 6 products by default", async () =>{
  render(<App />);
  const titles = await screen.findAllByRole("heading");
  expect(titles).toHaveLength(6);
});

test("clicking on the button loads 6 more products"), async() => {
  render(<App />);

  const button = await screen.findByRole("button",{
    name: /load more/i
  });
  await user.click(button);

  // allow a little pause to wait for the products to be loaded
  await waitFor(async () => {
    const titles = await screen.findAllByRole('heading');
    expect(titles).toHaveLength(12);
  });
}