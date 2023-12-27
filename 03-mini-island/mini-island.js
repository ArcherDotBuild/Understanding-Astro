// <mini-island>

/**
 * <mini-island>
 *  <template data-island>
 *  </template>
 *
 *  <template>
 *  </template>
 * </mini-island>
 */
class MiniIsland extends HTMLElement {
  static tagName = 'mini-island' // mini-island NOT miniIsland

  static attributes = {
    dataIsland: 'data-island',
  }
}

if ('customElements' in window) {
  window.customElements.define(MiniIsland.tagName, MiniIsland)
} else {
  console.error(
    'Island cannot be initiated because Window.customElements is unavailable'
  )
}
