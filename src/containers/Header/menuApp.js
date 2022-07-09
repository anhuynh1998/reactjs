export const adminMenu = [
    { //hệ thống
       name: 'menu.admin.user-manage', 
        menus: [
        {
                name: 'menu.admin.crud',link: '/system/user-manage'
                
            },
               {
                name: 'menu.admin.crud-redux',link: '/system/user-redux'
                
            },
            
            {
                name: 'menu.admin.manage-doctor',link: '/system/manager-doctor'
                
            },
             {
                name: 'menu.admin.manage-admin',link: '/system/user-admin'
                
            }
              
            // { name: 'menu.system.system-parameter.header', link: '/system/system-parameter' },
        ],
        
    },
    { //hệ thống
        name: 'menu.admin.clinic', 
        menus: [
        {
                name: 'menu.admin.manage-clinic',link: '/system/manage-clinic'
                
            },
               
              
            // { name: 'menu.system.system-parameter.header', link: '/system/system-parameter' },
        ],
        
    },
    { //hệ thống
        name: 'menu.admin.specialty', 
        menus: [
        {
                name: 'menu.admin.manage-specialty',link: '/system/manage-specialty'
                
            },
               
              
            // { name: 'menu.system.system-parameter.header', link: '/system/system-parameter' },
        ],
        
    },
    { //hệ thống
        name: 'menu.admin.handbook', 
        menus: [
        {
                name: 'menu.admin.manage-handbook',link: '/system/manage-handbook'
                
            },
               
              
            // { name: 'menu.system.system-parameter.header', link: '/system/system-parameter' },
        ],
        
    },
];