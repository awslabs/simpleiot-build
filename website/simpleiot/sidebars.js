/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  theSidebar: [
    { type: 'doc', id: 'intro'},
      'concepts',
      {
          type: 'category',
          label: 'Installation',
          collapsed: true,
          items: [
              'install/intro',
              'install/roles',
              'install/account',
              'install/solo',
              'install/admin',
              'install/team-member'
          ]
      },
      {
        type: 'category',
        label: 'Workshops',
        collapsed: true,
        items: [
            'workshops/intro',
            'workshops/starter/concepts',
            'workshops/starter/unboxing',
            'workshops/starter/adminteam',
            'workshops/starter/team-member',
            'workshops/starter/hello-world',
            'workshops/starter/sensors',
            'workshops/starter/next'
        ]
    },       
      {
          type: 'category',
          label: 'Documentation',
          collapsed: true,
          items: [
              'documentation/intro',
              {
                  type: 'category',
                  label: 'CLI',
                  collapsed: true,
                  items: [
                      'documentation/cli/intro',
                      'documentation/cli/auth',
                      'documentation/cli/cloud',
                      'documentation/cli/data',
                      'documentation/cli/datatype',
                      'documentation/cli/device',
                      'documentation/cli/firmware',
                      // 'documentation/cli/location',
                      'documentation/cli/model',
                      'documentation/cli/project',
                      'documentation/cli/team',
                      // 'documentation/cli/template',
                      'documentation/cli/toolchain',
                      // 'documentation/cli/twin',
                      // 'documentation/cli/update',
                      // 'documentation/cli/settings',
                      // 'documentation/cli/generator'
                  ]
              },
              // {
              //     type: 'category',
              //     label: 'REST API',
              //     collapsed: true,
              //     items: [
              //         'documentation/api/intro',
              //         'documentation/api/auth',
              //         'documentation/api/project',
              //         'documentation/api/model',
              //         'documentation/api/datatype',
              //         'documentation/api/device',
              //         'documentation/api/data',
              //         'documentation/api/settings',
              //         'documentation/api/generator',
              //         'documentation/api/template',
              //         'documentation/api/firmware',
              //         'documentation/api/location',
              //         'documentation/api/update',
              //         'documentation/api/twin'
              //     ]
              // },
              {
                  type: 'category',
                  label: 'Client SDKs',
                  collapsed: true,
                  items: [
                      'documentation/sdk/intro',
                      {
                          type: 'category',
                          label: 'Arduino',
                          collapsed: true,
                          items: [
                              'documentation/sdk/arduino/intro',
                              // 'documentation/sdk/arduino/fwupdate',
                              'documentation/sdk/arduino/classref'
                          ]
                      },
                  ]
              },
              {
                  type: 'category',
                  label: 'Data',
                  collapsed: true,
                  items: [
                      'documentation/data/intro',
                      'documentation/data/flow',
                      'documentation/data/common',
                      'documentation/data/events',
                      'documentation/data/twin',
                      'documentation/data/mqtt',
                      'documentation/data/datalake',
                      'documentation/data/dbaccess',
                      'documentation/data/preload',
                      // 'documentation/data/aiml',
                      // 'documentation/data/saas'
                  ]
              },
              // 'documentation/security',
              // 'documentation/scaling',
              // 'documentation/services',
              // 'documentation/misc',
              // 'documentation/advanced'
          ]
    },
    // {
    //   type: 'category',
    //   label: 'Advanced Topics',
    //   collapsed: true,
    //   items: [
    //       'advanced/intro',
    //       {
    //           type: 'category',
    //           label: 'Backend/Cloud',
    //           collapsed: true,
    //           items: [
    //               'advanced/backend/architecture',
    //               'advanced/backend/data',
    //               'advanced/backend/cdk',
    //               'advanced/backend/database',
    //               'advanced/backend/security',
    //               'advanced/backend/mqtt',
    //               'advanced/backend/api',
    //               'advanced/backend/logging',
    //               'advanced/backend/location',
    //               {
    //                   type: 'category',
    //                   label: 'Lambdas',
    //                   collapsed: true,
    //                   items: [
    //                       'advanced/backend/lambdas/intro',
    //                       'advanced/backend/lambdas/api',
    //                       'advanced/backend/lambdas/uiapi'
    //                   ]
    //             },
    //           ]
    //     }
    //   ]
    // },
    'contributing',
    'legal',
    'roadmap'
  ]
};

module.exports = sidebars;
