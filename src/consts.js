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
    headline:"React/Javascript Developer",
    email:"manueldiamondlistowell@gmail.com",
    connections:981, 
}

export {
    headerOptions,
    profile,
}

function headerOption(Icon,title) {
    return {Icon,title}
}