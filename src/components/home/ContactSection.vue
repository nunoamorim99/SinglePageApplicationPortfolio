<script setup>
import { useI18n } from 'vue-i18n'
import { profile } from '@/data/profile'
import ProfileCard from '@/components/ProfileCard/ProfileCard.vue'

const { t } = useI18n()

const handleContact = () => {
  window.location.href = `mailto:${profile.email}`
}
</script>

<template>
  <section id="contact" class="py-24 lg:py-32 bg-cream-200 dark:bg-charcoal-800">
    <div class="section-container">
      <div class="text-center mb-16">
        <h2 class="section-title">{{ t('contact.title') }}</h2>
        <p class="section-subtitle mx-auto">{{ t('contact.subtitle') }}</p>
        <div class="accent-line mt-6 mx-auto" />
      </div>

      <div class="flex justify-center">
        <ProfileCard
          :avatar-url="profile.photo"
          :mini-avatar-url="profile.photo"
          :name="profile.name"
          :title="t('hero.role')"
          handle="nunoamorim99"
          :status="t('contact.status')"
          :contact-text="t('contact.button')"
          :show-user-info="true"
          :enable-tilt="true"
          @contact-click="handleContact"
        />
      </div>
    </div>
  </section>
</template>
