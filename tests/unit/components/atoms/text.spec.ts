import { shallowMount } from "@vue/test-utils";
import Text from "@/components/atoms/Text/index.vue";

describe("Text.vue", () => {
  it("Render text with passed content", () => {
    const wrapper = shallowMount(Text, {
      slots: {
        default: "Main Title",
      },
    });
    expect(wrapper.html()).toContain("Main Title");
  });
  it("Render text with right tag and style can be custom", () => {
    const wrapper = shallowMount(Text, {
      slots: {
        default: "Main Title",
      },
      props: {
        type: "h1",
        styles: {
          fontSize: "1rem",
        },
      },
    });
    expect(wrapper.find("h1").exists()).toBe(true);
    expect(wrapper.find("#container-text").attributes().style).toBe(
      "font-size: 1rem;"
    );
  });
});
