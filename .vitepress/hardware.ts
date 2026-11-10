// Single switch for design-file links.
//
// hardware `main` is Revision 2. The current design is the `rev3`
// branch. Set hardwareBranch to 'main' when rev3 is merged, and the
// nav, the footer, and every __HW_TREE__ / __HW_BRANCH__ token in
// the markdown follow.

export const hardwareBranch = 'rev3'

export const hardwareRepo = 'https://github.com/256foundation/libreboard'

export const hardwareTree =
  hardwareBranch === 'main'
    ? hardwareRepo
    : `${hardwareRepo}/tree/${hardwareBranch}`
