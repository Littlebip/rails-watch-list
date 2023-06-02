import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="fixed-navbar"
export default class extends Controller {
  connect() {
    console.log('navbar controller pluggedin')
  }

  updateNavbar(event) {
    if (window.scrollY >= window.innerHeight) {
      this.element.classList.add("navbar-lewagon-white")
    } else {
      this.element.classList.remove("navbar-lewagon-white")
    }
  }
}
