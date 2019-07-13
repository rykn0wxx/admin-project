<template>
  <v-app dark class="layouts-main tw-relative tw-h-full tw-min-w-full">
    <g-app-content>
      <v-container class="layouts-container">
        <v-layout row wrap class="tw-mx">
          <v-flex class="md:tw-max-w-1/4">
            <app-sidebar :appColors="adminColors">
              <AppSidebarHeader linkPath="/app" svgClass="tw-text-white tw-fill-current" />
              <app-sidebar-menu />
            </app-sidebar>
          </v-flex>
        </v-layout>
      </v-container>
    </g-app-content>
  </v-app>
</template>

<script>
export default {
  name: 'LayoutsMain',
  data () {
    return {
      adminColors: {
        'bg': '#252830',
        'text-color': '#cfd2da',
        'bg-lighter': '#434857',
        'bg-lightest': '#51586a',
        'neutral': '#999',
        'blue': '#007bff',
        'indigo': '#6610f2',
        'purple': '#6f42c1',
        'pink': '#e83e8c',
        'red': '#dc3545',
        'orange': '#fd7e14',
        'yellow': '#ffc107',
        'green': '#28a745',
        'teal': '#20c997',
        'cyan': '#17a2b8',
        'white': '#fff',
        'gray': '#6c757d',
        'gray-dark': '#343a40',
        'primary': '#1997c6',
        'secondary': '#6c757d',
        'success': '#1BC98E',
        'info': '#9F86FF',
        'warning': '#E4D836',
        'danger': '#E64759',
        'light': '#f8f9fa',
        'dark': '#1a1c22'
      }
    }
  },
  computed: {}
}
</script>

<style lang="scss" scoped>
$bg: #252830;
$text-color: #cfd2da;
$bg-lighter: #434857;
$bg-lightest: #51586a;
$neutral: #999;
$blue: #007bff;
$indigo: #6610f2;
$purple: #6f42c1;
$pink: #e83e8c;
$red: #dc3545;
$orange: #fd7e14;
$yellow: #ffc107;
$green: #28a745;
$teal: #20c997;
$cyan: #17a2b8;
$white: #fff;
$gray: #6c757d;
$gray-dark: #343a40;
$primary: #1997c6;
$secondary: #6c757d;
$success: #1BC98E;
$info: #9F86FF;
$warning: #E4D836;
$danger: #E64759;
$light: #f8f9fa;
$dark: #1a1c22;

.layouts-main {
  background-color: #252830;
  color: #cfd2da;
  .brand-text {
    color: $text-color;
  }
}
</style>
