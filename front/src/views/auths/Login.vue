<template>
  <div class="auth-login auth-wrapper layout-row align-start justify-center">
    <div class="auth-page">
      <div class="auth-content tw-relative">
        <v-container class="auth-container tw-container">
          <v-layout justify-center fill-height>
            <v-flex lg4 md6 sm8>
              <v-form @submit.prevent="submitForm" ref="form" v-model="form.valid" name="user" class="auth-form" novalidate>
                <v-card flat class="card-login tw-mb-4 elevation-5">
                  <v-card-title class="layout-row layout-align-start-center">
                    <router-link to="/" class="auth-form__link tw-inline-block tw-text-center tw--ml-4 tw-mr-5">
                      <GAppBrand svgClass="tw-block tw-align-middle tw-h-10 tw-w-auto primary--text tw-fill-current" />
                    </router-link>
                    <h2 class="md-headline font-weight-medium tw-tracking-wide auth-form__headline">
                      <span class="text-uppercase tw-block tw-leading-none auth-form__title">Login</span>
                      <small class="caption tw-font-light tw-leading-none auth-form__caption">Sign in to start your session</small>
                    </h2>
                  </v-card-title>
                  <v-card-text class="tw-px-0 tw-pb-0">
                    <v-layout column>
                      <v-flex>
                        <v-text-field
                          :rules="rules.auth.login"
                          ref="auth.login"
                          v-model="auth.login"
                          dark box clearable required
                          label="Login"
                          height="46"
                          browser-autocomplete="off"
                          validate-on-blur
                          color="primary-light">
                        </v-text-field>
                      </v-flex>
                      <v-flex>
                        <v-text-field
                          :rules="rules.auth.password"
                          ref="auth.password"
                          v-model="auth.password"
                          dark box clearable required
                          label="Password"
                          type="password"
                          height="46"
                          browser-autocomplete="off"
                          validate-on-blur
                          color="primary-light">
                        </v-text-field>
                      </v-flex>
                    </v-layout>
                  </v-card-text>
                  <v-card-actions class="tw-px-0">
                    <v-spacer></v-spacer>
                    <v-btn :disabled="!form.valid" type="submit" flat class="auth-btn">
                      Submit
                    </v-btn>
                  </v-card-actions>
                  <v-card-text class="tw-pt-0 tw-px-0">
                    <p class="login__form--footer tw-m-0">Not yet a memeber?
                      <router-link to="/authentication/register" tabindex="-1">Register</router-link>
                    </p>
                  </v-card-text>
                </v-card>
              </v-form>
            </v-flex>
          </v-layout>
        </v-container>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthsLogin',
  data () {
    return {
      form: {
        valid: false,
        sending: false
      },
      auth: {
        login: '',
        password: ''
      },
      rules: {
        auth: {
          login: [
            v => !!v || `This field is required`,
            v => (v || '').length >= 2 || `Invalid character length, minimum required 2`
          ],
          password: [
            v => !!v || `This field is required`,
            v => (v || '').length >= 2 || `Invalid character length, minimum required 2`
          ]
        }
      }
    }
  },
  computed: {}
}
</script>

<style lang="scss" scoped>
.auth {
  &-wrapper.wrgr {
    min-height: 100vh;
    height: auto;
    position: relative;
    z-index: 4;
    &::before, &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 100vh;
      width: 100%;
    }
    &::before {
      background: url('../../assets/img/bg003.jpg') no-repeat center center fixed;
      background-size: cover;
      filter: blur(3px);
    }
    &::after {
      background-color: rgba(0,0,0,0.3);
      z-index: 0;
    }
  }
  &-page {
    position: relative;
    min-height: 100%;
    max-height: 100%;
    height: 100%;
    width: 100%;
    padding-top: 50px;
    z-index: 5;
  }
  &-page__background {
  }
  &-content {
  }
  &-container {
  }
  &-form {
    &__headline {
      line-height: 1;
    }
    &__caption {
      letter-spacing: .02em;
    }
  }
}
.card-login {
  padding: 20px;
  background-color: rgba(#343538, 0.2);
  &:hover {
    background-color: rgba(#18191c, 0.5);
  }
}
</style>
