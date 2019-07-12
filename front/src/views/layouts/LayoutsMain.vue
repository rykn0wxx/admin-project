<template>
  <v-app class="layouts-main">
    <v-content>
      <v-container>
        <v-layout row wrap>
          <v-flex xs3 class="tw-relative tw-w-full tw-px-3">
            <nav class="sidebar lg:tw-mr-10 tw-block">
              <div class="sidebar__brand tw-relative tw-pb-5">
                <button class="brand_btn md:tw-hidden" type="button">
                  <svg class="brand-text tw-fill-current tw-h-5 tw-w-auto" viewBox="0 0 20 20">
                    <path d="M16.4 9H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1h12.8c.552 0 .6-.447.6-1s-.048-1-.6-1zm0 4H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1h12.8c.552 0 .6-.447.6-1s-.048-1-.6-1zM3.6 7h12.8c.552 0 .6-.447.6-1s-.048-1-.6-1H3.6c-.552 0-.6.447-.6 1s.048 1 .6 1z"/>
                  </svg>
                </button>
              </div>
            </nav>
          </v-flex>
          <v-flex xs9>
            content
            <div class="et brf">
              <div class="bqn">
                <div class="bqo">
                  <h6 class="bqq">Dashboards</h6>
                  <h2 class="bqp">Overview</h2>
                </div>

                <div class="on bqr">
                  <div class="axm bpy">
                    <input type="text" value="01/01/15 - 01/08/15" class="form-control" data-provide="datepicker">
                    <span class="bv bbc"></span>
                  </div>
                </div>
              </div>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'LayoutsMain',
  data () {
    return {}
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
