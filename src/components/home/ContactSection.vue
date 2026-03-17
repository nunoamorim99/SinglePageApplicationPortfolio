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
  <section id="contact" class="py-20 bg-teal-100 dark:bg-neutral-900/50">
    <div class="section-container">
      <div class="text-center">
        <h2 class="section-title">{{ t('contact.title') }}</h2>
        <p class="section-subtitle">{{ t('contact.subtitle') }}</p>
      </div>

      <div class="mx-auto mt-12 flex justify-center">
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
