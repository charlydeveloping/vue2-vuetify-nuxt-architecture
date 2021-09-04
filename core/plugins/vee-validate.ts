import Vue from 'vue';

import { extend, configure, setInteractionMode } from 'vee-validate'

import {
  min,
  max,
  ext,
  size,
  email,
  image,
  required,
  min_value,
  max_value,
  confirmed,
  alpha_spaces,
} from 'vee-validate/dist/rules'

import { ValidationProvider, ValidationObserver } from 'vee-validate'


extend('min', min)
extend('max', max)
extend('ext', ext)
extend('size', size)
extend('email', email)
extend('image', image)
extend('required', required)
extend('min_value', min_value)
extend('max_value', max_value)
extend('confirmed', confirmed)
extend('alpha_spaces', alpha_spaces)


Vue.component('validation-provider', ValidationProvider)
Vue.component('validation-observer', ValidationObserver)