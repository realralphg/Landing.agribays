<template>
  <div class="q-pa-md my-font-nav">
    <div class="" style="width: 100%;">
      <q-chat-message
        name="me"
        avatar="https://cdn.quasar.dev/img/avatar3.jpg"
        :text="[
            'Wow...',
            'How does it work?',
        ]"
        stamp="10 minutes ago"
        sent
        bg-color="amber-7"
      />
      <q-chat-message
        name="Jane"
        avatar="https://cdn.quasar.dev/img/avatar5.jpg"
        :text="[
          'It’s simple.',
          'We help you save money in tiny bits for food.'
        ]"
        stamp="9 minutes ago"
        text-color="white"
        bg-color="primary"
      />
      <q-chat-message
        name="Jane"
        avatar="https://cdn.quasar.dev/img/avatar5.jpg"
        :text="[
          'Start by creating an account with us (Register)',
          'If you already have an account, (Sign in) and choose a Saving Plan.'
        ]"
        stamp="7 minutes ago"
        text-color="white"
        bg-color="primary"
      />
      <q-chat-message
        name="me"
        avatar="https://cdn.quasar.dev/img/avatar3.jpg"
        :text="[
            'Plan?',
            'What kind of plans are available?',
        ]"
        stamp="6 minutes ago"
        sent
        bg-color="amber-7"
      />
      <q-chat-message
        name="Jane"
        avatar="https://cdn.quasar.dev/img/avatar5.jpg"
        :text="[
          'There are 3 plans on Agrobays',
          '#300 Daily Saving Plan',
          '#500 Daily Saving Plan',
          '#1000 Daily Saving Plan',
        ]"
        stamp="5 minutes ago"
        text-color="white"
        bg-color="primary"
      />
      <q-chat-message
        name="Jane"
        avatar="https://cdn.quasar.dev/img/avatar5.jpg"
        :text="[
          'The above plans accrue to #9,000, #15,000 and #30,000 in 30days respectively.',
          'You can save for multiple days at once by selecting a range of dates on the Savings Calendar.',
        ]"
        stamp="3 minutes ago"
        text-color="white"
        bg-color="primary"
      />
      <q-chat-message
        name="Jane"
        avatar="https://cdn.quasar.dev/img/avatar5.jpg"
        :text="[
          'Before due date, you are expected to have completed savings and selected desired food bag which will either be delivered to registered home address or picked up from Agrobays office',
        ]"
        stamp="2 minutes ago"
        text-color="white"
        bg-color="primary"
      />
      <q-chat-message
        name="me"
        avatar="https://cdn.quasar.dev/img/avatar3.jpg"
        :text="[
            `What's your office address?`,
        ]"
        stamp="2 minutes ago"
        sent
        bg-color="amber-7"
      />
      <q-chat-message
        name="Jane"
        avatar="https://cdn.quasar.dev/img/avatar5.jpg"
        :text="[
          'F6, Y.A. Ahmed House, Ahmadu Bello Way, Kaduna',
          'Home delivery attracts extra charges',
        ]"
        stamp="1 minutes ago"
        text-color="white"
        bg-color="primary"
      />
      <q-chat-message
        name="me"
        avatar="https://cdn.quasar.dev/img/avatar3.jpg"
        :text="[
            `I think i would go for the home delivery`,
        ]"
        stamp="1 minutes ago"
        sent
        bg-color="amber-7"
      />
      <q-chat-message
        name="Jane"
        avatar="https://cdn.quasar.dev/img/avatar5.jpg"
        :text="[
          'Great choice',
          'On completion of a round of savings, you can start a new round of saving.',
        ]"
        stamp="45 seconds ago"
        text-color="white"
        bg-color="primary"
      />
      <q-chat-message
        name="me"
        avatar="https://cdn.quasar.dev/img/avatar3.jpg"
        :text="[
            `Can anyone save?`,
            `Because i want to tell my friends about Agrobays`,
        ]"
        stamp="30 seconds ago"
        sent
        bg-color="amber-7"
      />
      <q-chat-message
        name="Jane"
        avatar="https://cdn.quasar.dev/img/avatar5.jpg"
        :text="[
          'Anyone can save',
          'You can even save for your parents for regular delivery or your friends and relatives in need.',
        ]"
        stamp="20 seconds ago"
        text-color="white"
        bg-color="primary"
      />
      <q-chat-message
        name="me"
        avatar="https://cdn.quasar.dev/img/avatar3.jpg"
        :text="[
            `Oh great`,
            `Going to create my account now`,
        ]"
        stamp="10 seconds ago"
        sent
        bg-color="amber-7"
      />
      <q-chat-message
        name="Jane"
        avatar="https://cdn.quasar.dev/img/avatar5.jpg"
        :text="['Beautiful... ', 'Save like an ant and eat like an elephant.']"
        stamp="just now"
        text-color="white"
        bg-color="primary"
      />
    </div>
  </div>
</template>