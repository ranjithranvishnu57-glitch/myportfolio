/**
 * Smoothly scrolls to a section by its DOM id and updates the URL hash.
 * Safe to call even if the target section has not been added yet.
 */
export function scrollToSection(sectionId) {
  const target = document.getElementById(sectionId)

  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    window.history.replaceState(null, '', `#${sectionId}`)
    return true
  }

  window.history.replaceState(null, '', `#${sectionId}`)
  return false
}

