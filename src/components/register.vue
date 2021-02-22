<template>
  <div style="width: 100%; height: 100vh;">
      <section class="row items-center flex-center flex full-height full-width row">
          <q-card flat tile bordered class="bg-accent col-md-5 q-px-xl q-py-lg">
            <q-card-section>
                <div>
                    <form>
                        <div class="text-h4 text-primary text-center text-bold">Create an account</div>
                        <q-input class="q-mt-sm" placeholder="Full Name" v-model="text" :readonly="readonly" :disable="disable">
                            <template v-slot:prepend>
                            <q-icon name="person" />
                            </template>
                        </q-input>
                        <q-input class="q-mt-sm" placeholder="Email" v-model="text" :readonly="readonly" :disable="disable">
                            <template v-slot:prepend>
                            <q-icon name="lock" />
                            </template>
                        </q-input>
                        <q-input class="q-mt-sm" placeholder="Phone Number" v-model="text" :readonly="readonly" :disable="disable">
                            <template v-slot:prepend>
                            <q-icon name="lock" />
                            </template>
                        </q-input>
                        <q-input class="q-mt-sm" placeholder="City" v-model="text" :readonly="readonly" :disable="disable">
                            <template v-slot:prepend>
                            <q-icon name="lock" />
                            </template>
                        </q-input>
                        <q-select class="q-mt-sm" v-model="model" :options="options" label="Label">
                            <template v-slot:prepend>
                            <q-icon name="event" />
                            </template>
                        </q-select>
                        <div class="q-mt-sm">
                            <div>
                                <q-btn label="Register" no-caps class="q-px-lg" unelevated type="submit" color="primary"/>
                            </div>
                            <div class="text-body1 q-mt-sm"><small>Have an account? <span class="text-primary text-bold">Login</span></small></div>
                        </div>
                        
                    </form>
                </div>
            </q-card-section>
            </q-card>
      </section>
  </div>
</template>

<script>
export default {
    data () {
        return {
            accept: false,
            model: '',
            options: [
                'Basic', 'Standard', 'Premium'
            ]
        }
    }
}
</script>

<style>

</style>