import sanityClient from "@sanity/client"

export default sanityClient({
    projectId: 'kdo26y46',
    dataset: 'production',
    useCdn: true
})