<template>
  <div>
    <navbar />
    <main>
      <!-- home -->
      <div
        id="home"
        class="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75 h-screen bg-blue-200 snap-start fade-in"
      >
        <div
          class="absolute top-0 w-full h-full bg-center bg-cover"
          style="background-image: url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80');"
        >
          <span class="w-full h-full absolute opacity-75 bg-black"></span>
        </div>
        <div class="container relative mx-auto">
          <div class="items-center flex flex-wrap">
            <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div class="pr-12">
                <h1 class="text-white font-semibold text-5xl">
                  Your financial success starts with us.
                </h1>
                <p class="mt-4 text-lg text-blueGray-200">
                  Empowering you with the tools and guidance to achieve your financial goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="services" class="pb-20 bg-blueGray-200 -mt-24 section snap-start">
        <ServicesComponent />
      </section>

      <section id="about-us" class="relative py-20 section snap-start fade-in">
        <AboutUsComponent />
      </section>

      <section id="hero" class="pt-20 pb-48 section snap-start fade-in">
        <HeroComponent />
      </section>

      <section id="vision" class="pb-20 relative block bg-blueGray-800 section snap-start fade-in">
        <VisionComponent />
      </section>

      <section id="contact-us" class="relative block py-24 lg:pt-0 bg-blueGray-800 section snap-start fade-in">
        <ContactUsComponent />
      </section>
    </main>

    <footer-component />
  </div>
</template>

<script>
import Navbar from "@/components/Navbars/AuthNavbar.vue";
import FooterComponent from "@/components/Footers/Footer.vue";
import ServicesComponent from "./Services.vue";
import AboutUsComponent from "./AboutUs.vue";
import HeroComponent from "./Hero.vue";
import VisionComponent from "./Visions.vue";
import ContactUsComponent from "./Contact.vue";

export default {
  data() {
    return {
      showButton: true,
    };
  },
  components: {
    Navbar,
    FooterComponent,
    ServicesComponent,
    AboutUsComponent,
    HeroComponent,
    VisionComponent,
    ContactUsComponent,
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    handleScroll() {
      this.showButton = window.scrollY > 100;
    },
    observeSections() {
      const sections = document.querySelectorAll(".fade-in");
      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observer.unobserve(entry.target); // Stop observing once visible
            }
          });
        },
        { threshold: 0.2 }
      );

      sections.forEach((section) => {
        observer.observe(section);
      });
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.observeSections();
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style>
/* Ensures sections snap to viewport */
 

/* Scroll Animation */
.fade-in {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
