import swal from 'sweetalert'

import {User} from './user'

export async function userLogin() {
  if (!User) {
    await swal({
      title: "Login Required",
      text: "Please login to continue",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    window.location.href = '/signin'
  }
}