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

  async connectedCallback() {
    await this.hydrate()
  }

  async hydrate() {
    // deal with this
    const relevantChildTemplates = this.getTemplates()
    this.replaceTemplates(relevantChildTemplates)
  }

  replaceTemplates(templates) {
    // iterate over all nodes

    for (const node of templates) {
      console.log('THE NODE VALUE IS ', node)
      console.log('THE NODE CONTENT IS ', node.content)
      node.replaceWith(node.content)
    }
  }

  getTemplates() {
    return this.querySelectorAll(
      `template[${MiniIsland.attributes.dataIsland}]`
    )
  }
}

if ('customElements' in window) {
  window.customElements.define(MiniIsland.tagName, MiniIsland)
} else {
  console.error(
    'Island cannot be initiated because Window.customElements is unavailable'
  )
}
