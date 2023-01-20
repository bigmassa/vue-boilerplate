import { beforeEach, describe, expect, it } from "vitest";
import { mount, RouterLinkStub } from "@vue/test-utils";
import NavBar from "@/components/NavBar.vue";

function mountComponent() {
  return mount(NavBar, {
    global: {
      stubs: {
        RouterLink: RouterLinkStub,
      },
    },
  });
}

let comp: ReturnType<typeof mountComponent>;

describe("NavBar", () => {
  beforeEach(() => {
    comp = mountComponent();
  });

  it("renders properly", () => {
    expect(comp).toBeDefined();
  });
});
