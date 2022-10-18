import { mount } from "@vue/test-utils";
import HomeView from "@/views/HomeView.vue";
import store from "@/store";

describe("HomeView.vue", () => {
  it("Render HomeView with list data show", () => {
    const wrapper = mount(HomeView);
    expect(wrapper.find("#homepage").html()).toContain("Americano");
  });

  it("Render HomeView with right description ", () => {
    const descText =
      "Caffè Americano is a type of coffee drink prepared by diluting an espresso with hot water, giving it a similar strength to, but different flavor from, traditionally brewed coffee.";
    const wrapper = mount(HomeView);
    expect(wrapper.find("#homepage").html()).toContain(descText);
  });

  it("Render HomeView and click coffee with click list with id:tt0441772", async () => {
    const descText =
      "Caffè latte, often shortened to just latte in English, is a coffee beverage of Italian origin made with espresso and steamed milk.";
    const wrapper = mount(HomeView);
    const triggerButton = wrapper?.find("[data-testId='tt0441772']");
    await triggerButton.trigger("click");
    expect(wrapper.find("#homepage").html()).toContain(descText);
  });

  it("Render HomeView and click add to cart", async () => {
    const wrapperHome = mount(HomeView);
    const triggerButton = wrapperHome?.find("#button-container");
    await triggerButton.trigger("click");
    const result = store?.getters?.getCartCount();
    expect(result).toEqual(1);
  });
});
