import { mount } from "@vue/test-utils";
import Button from "@/components/atoms/Button/index.vue";

describe("Button.vue", () => {
  it("Render button with right button text", () => {
    const textButton = "submit";
    const wrapper = mount(Button, {
      props: {
        text: textButton,
        handleClick: jest.fn,
      },
    });
    expect(wrapper.find("#button-container").text()).toEqual(textButton);
  });
  it("Trigger Button", async () => {
    const textButton = "submit";
    const wrapper = mount(Button, {
      props: {
        text: textButton,
        handleClick: jest.fn,
      },
    });
    await wrapper.find("#button-container").trigger("click");
  });
});
