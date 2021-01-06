export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ff5e1e5d3e2e62cc276f4ea',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-test-studio-14kb1r93',
                  apiId: '776e14c7-e053-4842-a1e5-9d0ea920f065'
                },
                {
                  buildHookId: '5ff5e1e5a2d17a07c9623214',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-test-web-pfzeashh',
                  apiId: 'c2a15ad1-e10d-4521-8c66-cbaaed232ddf'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/joshuarule/sanity-gatsby-blog-test',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-test-web-pfzeashh.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
