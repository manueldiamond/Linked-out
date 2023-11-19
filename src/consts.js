import { BusinessCenter, Chat, Home, Notifications, SupervisorAccount } from "@mui/icons-material"

const headerOptions=[
    headerOption(Home,"Home"),
    headerOption(SupervisorAccount,"My Network"),
    headerOption(BusinessCenter,"Jobs"),
    headerOption(Chat,"Messages"),
    headerOption(Notifications,"Notifications"),
    {
        avatar:"src/assets/man_2202112.png",
        title:"Me" 
    }
]

export {
    headerOptions,
    
}

function headerOption(Icon,title) {
    return {Icon,title}
}