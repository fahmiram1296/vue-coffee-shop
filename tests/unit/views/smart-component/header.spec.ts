import { mount } from "@vue/test-utils";
import Header from "@/views/smart-component/Header/index.vue";
import store from "@/store";

describe("Header.vue", () => {
  it("Render header with count", async () => {
    const cartData = {
      name: "Americano",
      price: "10000",
      id: "tt0441771",
      description:
        "Caffè Americano is a type of coffee drink prepared…fferent flavor from, traditionally brewed coffee.",
      poster:
        "https://www.starbucksathome.com/id/sites/default/f…s/2021-03/3-CaffeAmericano_LongShadow_Cream_1.png",
    };
    store?.dispatch("addToCart", cartData);
    const wrapperHome = mount(Header);
    expect(wrapperHome?.find("#image-count").text()).toBe("1");
  });
});
