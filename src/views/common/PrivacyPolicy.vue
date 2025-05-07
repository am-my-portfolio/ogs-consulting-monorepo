<template>
  <PageLayout>
    <template #pageTitle>Privacy Policy</template>
    <template #description> </template>

    <template #pageContent>
      <div class="flex-1 space-y-4 text-black">
        <ul class="list-decimal list-inside space-y-4">
          <li class="space-y-4">
            <strong>Introduction</strong>
            <p>
              At <strong>My Briefcase</strong> (“we”, “us”, “our”), we are committed to protecting your
              privacy and handling your personal information with transparency and care. This
              Privacy Policy outlines how we collect, use, store, and protect personal information
              when you visit our website.
            </p>
            <p>
              We follow global best practices for data privacy and protection, ensuring compliance
              with applicable data protection laws wherever our users are located.
            </p>
            <p>
              This policy applies to <strong>https://my-briefcase.pages.dev/</strong> and any subdomains or online
              services controlled by us.
            </p>
          </li>

          <li class="space-y-4">
            <strong>Information We Collect</strong>
            <p>We may collect and process the following types of information:</p>
            <ul class="ml-6 list-inside list-disc">
              <li>
                <strong>Personal Information:</strong> such as your name, email address, and country
                if you choose to provide them (e.g., via contact forms or waitlists).
              </li>
              <li>
                <strong>Technical Information:</strong> including IP address, browser type, device
                identifiers, operating system, and site usage data.
              </li>
              <li>
                <strong>Cookies and Analytics:</strong> We use cookies and similar technologies to
                understand user behavior, enhance functionality, and improve our services.
              </li>
            </ul>
          </li>

          <li class="space-y-4">
            <strong>How We Use Your Information</strong>
            <p>We use your information to:</p>
            <ul class="ml-6 list-inside list-disc">
              <li>Operate, maintain, and improve the website.</li>
              <li>Communicate with you when requested or required.</li>
              <li>Understand usage patterns and site performance.</li>
              <li>Ensure the website’s security and integrity.</li>
              <li>Comply with legal and regulatory obligations.</li>
            </ul>
          </li>

          <li class="space-y-4">
            <strong>Lawful Grounds for Processing</strong>
            <p>We process your data on one or more of the following legal grounds:</p>
            <ul class="ml-6 list-inside list-disc">
              <li>Your consent.</li>
              <li>To fulfill a request or contract with you.</li>
              <li>To pursue our legitimate interests (e.g., website optimization, security).</li>
              <li>To comply with legal obligations.</li>
            </ul>
          </li>

          <li class="space-y-4">
            <strong>Data Sharing and Transfers</strong>
            <p>We do not sell your personal information. We may share data with:</p>
            <ul class="ml-6 list-inside list-disc">
              <li>
                Service providers who support website functionality, under strict confidentiality.
              </li>
              <li>Regulatory authorities or legal bodies where required by law.</li>
              <li>
                Where data is transferred internationally, we ensure appropriate safeguards such as
                encryption, contractual clauses, and secure processing environments.
              </li>
            </ul>
          </li>

          <li class="space-y-4">
            <strong>Data Retention</strong>
            <p>
              We retain personal data only as long as necessary for the purposes for which it was
              collected, or to comply with legal, regulatory, or operational requirements.
            </p>
          </li>

          <li class="space-y-4">
            <strong>Your Rights</strong>
            <p>Depending on your location, you may have rights to:</p>
            <ul class="ml-6 list-inside list-disc">
              <li>Access, correct, or delete your personal information.</li>
              <li>Object to or restrict processing.</li>
              <li>Withdraw consent at any time.</li>
              <li>Lodge a complaint with a supervisory authority.</li>
            </ul>
            <p>
              To exercise these rights, contact us at
              <a href="mailto:privacy@example.co">privacy@example.co</a>.
            </p>
          </li>

          <li class="space-y-4">
            <strong>Data Security</strong>
            <p>
              We implement appropriate technical and organizational measures to protect your
              information, including encryption, access controls, and secure storage. We regularly
              review our systems to ensure they meet evolving security standards.
            </p>
          </li>

          <li class="space-y-4">
            <strong>Updates to this Policy</strong>
            <p>
              We may revise this Privacy Policy periodically. Any changes will be posted with an
              updated effective date. Continued use of the website after changes constitutes
              acceptance of the updated terms.
            </p>
          </li>
        </ul>
      </div>
    </template>
  </PageLayout>
</template>

<script setup lang="ts">
import { PageLayout } from '@am-ogs/vue-ui';
</script>
