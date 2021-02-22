<template>
  <div :class="sizes">
    <section>
        <q-card flat class="rounded-borders bg-primary text-white" style="border-radius: 30px;">
            <div class="row">
                <div class="col-md-7 q-mx-auto text-center col-sm-12 col-xs-12" :class="sizes">
                    <div :class="ratio" class="q-my-xl text-bold my-font">
                        Privacy policy
                    </div>
                </div>
            </div>
        </q-card>
    </section>
    <article :class="sizes">
        <div class="text-body1 q-mt-lg my-font-nav text-dark">
            <div v-html="details">
            </div>
        </div>
    </article>
  </div>
</template>

<script>
export default {
    data () {
        return {
            details: `We take matters relating to privacy seriously! We will be transparent with you about the data we collect about you and how it is used. At Agrobays, we respect the intellectual property rights of others and desire to offer a platform which contains no content that violates those rights. Our Terms and Agreement requires that information posted by users be accurate, lawful and not in violation of the rights of third parties. 
            <br><br>

            <b>Consent</b><br>
            If you use our Services, you consent to the collection and use of your personal data under this Privacy Policy (which includes our Cookie Policy and other documents referenced in this Privacy Policy) and agree to the Terms and Agreement. If you use our Services after an update to this Privacy Policy, you are assumed to have consented to the updated policy.<br><br>
            We may modify this Privacy Policy, and if we make material changes to it, we will provide notice through our Services, or by other means, to provide you the opportunity to review the changes before they become effective. If you object to any changes, you may close your account. Your continued use of our Services after we publish or send a notice about our changes to this Privacy Policy means that you are consenting to the updated Privacy Policy. <br><br>
            <b>Information We Collect</b><br>
            Below are the data we collect from users;<br><br>
            <b>On Registration & Profile Creation;</b><br>
            To create an account you provide data including your name, email address and/or mobile number, and a password. If you are paying for food items or delivery, we ask you for payment (e.g., credit card) and billing information.<br><br>

            <b>How We Use Your Data</b><br>
            We use your data to primarily improve your experience. We also use your data to develop our Services. Your settings both on our platform and the device you use determine how your data will be used or whether certain services can even be accessed.<br><br>

            <b>Service Development</b><br>
            We use data, including public feedback, to conduct research and development for the further development of our Services in order to provide you and others with a better, more intuitive and personalized experience, drive membership growth and engagement on our Services.<br><br>

            <b>Customer Support</b><br>
            We use data to help you and fix problems. <br>We use the data (which can include your communications) needed to investigate, respond to and resolve complaints and Service issues (e.g., bugs).<br><br>

            <b>Generalized Insights</b><br>
            We use data to generate general insights. <br>
            We use your information to produce aggregate insights that do not identify you. For example we may use your data to generate statistics about our users, their profession or industry, the number of impressions served or clicked on, or the demographic distribution of visitors to a site.<br><br>

            <b>Security and Investigations</b><br>
            We use data for security, fraud prevention and investigations. <br>
            We use your data (including your communications) if we think it’s necessary for security purposes or to investigate possible fraud or other violations of our Terms and Agreement or this Privacy Policy and/or attempts to harm our Mentors and/or Mentees.<br><br><br>

            <div class="text-center text-bold text-h6 my-font"><b>OUR COOKIE POLICY</b><br></div>
            This policy provides information about how and when we use cookies. This cookie policy applies to Agrobays and all its related services. <br><br>
            We use cookies and other technologies to ensure everyone who uses Agrobays has the best possible experience. Cookies also help us keep your account safe. By continuing to visit or use our services, you are agreeing to the use of cookies and similar technologies for the purposes we describe in this policy..<br><br>

            <b>What is a cookie?</b><br>
            A cookie is a small file placed onto your device that enables Agrobays’ features and functionalities. Cookies help us to identify your device, secure your access to Agrobays and our sites generally, and even help us know if someone attempts to access your account from a different device. Cookies also enable you to easily share content on Agrobays and help us serve relevant ads to you. We use persistent and session cookies.<br><br>
            Unless you clear these cookies from your browser, we may use this information to: <br><br>
            <ul>
            <li>detect and defend against fraud and other risks to protect users and partners;</li>
            <li>provide more relevant, interest-based advertising e.g. mentors who are sharing interests or contents you may be interested in;</li>
            <li>provide aggregate reports of ads activity to advertisers and websites hosting the ads;</li>
            <li>help website and apps understand how visitors engage with their sites or apps;</li>
            <li>improve our products</li>
            </ul><br><br>
            <b>Security</b><br>
            We monitor for and try to prevent security breaches.<br>
            We implement security safeguards designed to protect your data, such as HTTPS. We regularly monitor our systems for possible vulnerabilities and attacks. However, we cannot warrant the security of any information that you send us. There is no guarantee that data may not be accessed, disclosed, altered, or destroyed by breach of any of our physical, technical, or managerial safeguards. <br><br><br>
            
            `
            }
        },
    computed: {
    sizes () {
      let size = this.$q.screen.name
      if (size == 'md' || size == 'lg' || size == 'xl') {
        return 'q-pa-xl'
      } else return 'q-pa-md'
    },

    ratio () {
      let size = this.$q.screen.name
      if (size == 'md' || size == 'lg' || size == 'xl') {
        return 'text-h3'
      } else return 'text-h4'
    }
  }
}
</script>

<style>

</style>