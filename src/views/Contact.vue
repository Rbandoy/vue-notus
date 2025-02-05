<template>
  <div class="container mx-auto px-4">
    <div class="flex flex-wrap justify-center lg:-mt-64 -mt-48">
      <div class="w-full lg:w-6/12 px-4">
        <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
          <div class="flex-auto p-5 lg:p-10">
            <h4 class="text-2xl font-semibold">Ready to Partner with Us?</h4>
            <p class="leading-relaxed mt-1 mb-4 text-blueGray-500">
              Fill out the form, and our team will reach out to you within 24 hours to discuss how we can help you succeed.
            </p>

            <form @submit.prevent="sendEmail">
              <div class="relative w-full mb-3 mt-8">
                <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2">Full Name</label>
                <input v-model="formData.name" type="text" required
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Full Name"
                />
              </div>

              <div class="relative w-full mb-3">
                <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2">Email</label>
                <input v-model="formData.email" type="email" required
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Email"
                />
              </div>

              <div class="relative w-full mb-3">
                <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2">Message</label>
                <textarea v-model="formData.message" rows="4" required
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                  placeholder="Type a message..."
                ></textarea>
              </div>

              <div class="text-center mt-6">
                <button type="submit"
                  class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                >
                  Send Message
                </button>
              </div>
            </form>

            <p v-if="successMessage" class="text-green-500 mt-4 text-center">{{ successMessage }}</p>
            <p v-if="errorMessage" class="text-red-500 mt-4 text-center">{{ errorMessage }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import emailjs from "@emailjs/browser";

export default {
  data() {
    return {
      formData: {
        name: "",
        email: "",
        message: "",
      },
      successMessage: "",
      errorMessage: "",
    };
  },
  methods: {
    sendEmail() {
      const templateParams = {
        from_name: this.formData.name,
        from_email: this.formData.email,
        message: this.formData.message,
      };

      emailjs
        .send("onefilesolutions", "template_gal92lf", templateParams, "A393kpI6fAN-9v3kk")
        .then(
          (response) => {
            console.log(response)
            this.successMessage = "Message sent successfully!";
            this.errorMessage = "";
            this.formData.name = "";
            this.formData.email = "";
            this.formData.message = "";
          },
          (error) => {
            console.log(error)
            this.errorMessage = "Failed to send message. Please try again.";
            this.successMessage = "";
          }
        );
    },
  },
};
</script>
