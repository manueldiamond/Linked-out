import { BusinessCenter, Chat, Home, Notifications, SupervisorAccount } from "@mui/icons-material"

const headerOptions=[
    headerOption(Home,"Home"),
    headerOption(SupervisorAccount,"My Network"),
    headerOption(BusinessCenter,"Jobs"),
    headerOption(Chat,"Messages"),
    headerOption(Notifications,"Notifications")
]
const profile={
    firstName:"Manuel",
    additionalName:"Kwarteng",
    lastName:"Ashong",
    profilePhoto:"",
    email:"manueldiamondlistowell@gmail.com",
    connections:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
    stats:{
        "Connections": 1281,
        "Profile Views": 2545,
        "Views on post": 2444,
        
    }
}
export {
    headerOptions,
    profile,
}

function headerOption(Icon,title) {
    return {Icon,title}
}