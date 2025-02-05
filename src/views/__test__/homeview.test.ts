import { beforeEach, describe, expect, it } from "vitest";
import { mount, RouterLinkStub } from "@vue/test-utils";
import HomeView from "@/views/HomeView.vue";

function mountComponent() {
  return mount(HomeView, {
    global: {
      stubs: {
        FooterItem: {
          template: "<footer></footer>",
        },
        NavBar: {
          template: "<nav></nav>",
        },
        RouterLink: RouterLinkStub,
      },
    },
  });
}

let comp: ReturnType<typeof mountComponent>;

describe("HomeView", () => {
  beforeEach(() => {
    comp = mountComponent();
  });

  it("renders properly", () => {
    expect(comp).toBeDefined();
  });
});
