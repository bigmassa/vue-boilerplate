import { beforeEach, describe, expect, it } from "vitest";
import { mount, RouterLinkStub } from "@vue/test-utils";
import FooterItem from "@/components/FooterItem.vue";

function mountComponent() {
  return mount(FooterItem, {
    global: {
      stubs: {
        RouterLink: RouterLinkStub,
      },
    },
  });
}

let comp: ReturnType<typeof mountComponent>;

describe("FooterItem", () => {
  beforeEach(() => {
    comp = mountComponent();
  });

  it("renders properly", () => {
    expect(comp).toBeDefined();
  });
});
