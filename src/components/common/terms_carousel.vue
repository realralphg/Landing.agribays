<template>
  <div :class="sizes">
    <section>
        <q-card flat class="rounded-borders bg-primary text-white" style="border-radius: 30px;">
            <div class="row">
                <div class="col-md-7 q-mx-auto text-center col-sm-12 col-xs-12" :class="sizes">
                    <div :class="ratio" class="q-my-xl text-bold my-font">
                        Terms and Agreement
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
            details: `When you use our Services you agree to all of these terms. Your use of our Services is also subject to our Cookie Policy and our Privacy Policy, which covers how we collect, use, share, and store your personal information. <br><br> You agree that by clicking “Sign Up” or similar, registering, accessing or using our services (described below), <b>you are agreeing to enter into a legally binding contract with Agrobays</b> (even if you are using our Services on behalf of a company). If you do not agree to this contract (“Contract” or “User Agreement”), do not click “Sign Up” (or similar) and do not access or otherwise use any of our Services.
            <br><br>

            <b>This Contract</b><br>
            You are entering into this Contract with Agrobays (also referred to as “we” and “us”). And your personal data are controlled by Agrobays.<br><br>
            <b>Change</b><br>
            We may modify this Contract, our Privacy Policy and our Cookies Policies from time to time. If we make material changes to it, we will provide you notice through our Services, or by other means, to provide you the opportunity to review the changes before they become effective. If you object to any changes, you may close your account. Your continued use of our Services after we publish or send a notice about our changes to these terms means that you are consenting to the updated terms.<br><br>
             <b>User Obligation</b><br>
              <b>Eligibility Criteria</b><br><br>
              By consenting to this contract, you are making the following promises:<br>
              <ul>
              <li>You’re eligible to enter into this Contract, which means you are at least our “Minimum Age.” <b>-The Services are not for use by anyone under the age of 14</b>.</li>
              <li>Your Agrobays account must be in your real name; and </li>
              <li>You have not been banned by restriction from using the services.</li><br>
              </ul><br><br>
              <b>Your Account</b><br>
              <ul>
              <li>a)You will keep your password a secret.</b>.</li>
              <li>You will not share an account with anyone else. </li>
              <li>You will choose a strong and secure password.</li>
              <li>You are responsible for anything that happens through your account unless you close it or report misuse.</li>
              </ul><br><br>
              <b>Payment</b><br>
              <ul>
              <li>We don’t store your payment information.</b>.</li>
              <li>We don't guarantee refunds. </li>
              <li>You can view a history of your transactions under “Transactions”</li>
              </ul><br><br>
              <b>Service Availability</b><br><br>
              We may change, suspend or end any Service, or change and modify prices prospectively in our discretion. These changes may be effective upon notice provided to you.<br><br>
              <b>Disclaimer/No Warranty</b><br><br>
              WE CANNOT GUARANTY THAT OUR SERVICES WILL FUNCTION WITHOUT ERRORS. HOWEVER, WE SHALL PROVIDE QUALITY SERVICE TO THE BEST OF OUR ABILITY AND DO EVERYTHING IN THE SHORTEST POSSIBLE TIME TO RESPOND TO COMPLAINTS FROM USERS<br>
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