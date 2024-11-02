import twoUsers from '../assets/Lendsqr/two users.svg';
import threeUsers from '../assets/Lendsqr/three users.svg';
import fileSave from '../assets/Lendsqr/file save.svg';
import moneySave from '../assets/Lendsqr/money save.svg';
import filterIcon from '../assets/Lendsqr/filter-results-button.svg';
import portfolio from '../assets/Lendsqr/portfolio.svg';
import briefcase from '../assets/Lendsqr/briefcase.svg';
import userFriends from '../assets/Lendsqr/user-friends.svg';
import guarrantor from '../assets/Lendsqr/guarrantor.svg';
import home from '../assets/Lendsqr/home.svg';
import handshake from '../assets/Lendsqr/handshake.svg';
import moneyBag from '../assets/Lendsqr/money-bag.svg';
import piggyBank from '../assets/Lendsqr/piggy-bank.svg';
import savings from '../assets/Lendsqr/savings.svg';
import userCog from '../assets/Lendsqr/userCog.svg';
import userTimes from '../assets/Lendsqr/user-times.svg';
import bank from '../assets/Lendsqr/bank.svg';
import coins from '../assets/Lendsqr/coins.svg';
import paper from '../assets/Lendsqr/paper nav.svg';
import galaxy from '../assets/Lendsqr/galaxy.svg';
import chartBar from '../assets/Lendsqr/chart-bar.svg';
import scroll from '../assets/Lendsqr/scroll.svg';
import clipboard from '../assets/Lendsqr/clipboard-list 1.svg';
import bagde from '../assets/Lendsqr/badge.svg';
import sliders from '../assets/Lendsqr/sliders.svg';
import blankavatar from '../assets/Lendsqr/blank-avatar.svg';
import backArrow from '../assets/Lendsqr/back arrow.svg';
import star from '../assets/Lendsqr/np_star.svg';
import hollowStar from '../assets/Lendsqr/hollow-star.svg';



export const images = {
    twoUsers,
    threeUsers,
    fileSave,
    moneySave,
    filterIcon,
    home,
    briefcase,
    userFriends,
    guarrantor,
    moneyBag,
    handshake,
    piggyBank,
    savings,
    userCog,
    userTimes,
    bank,
    coins,
    paper,
    galaxy,
    chartBar,
    scroll,
    clipboard,
    bagde,
    sliders,
    portfolio,
    blankavatar,
    backArrow,
    star,
    hollowStar


} 

export const sidebarItems = [
    { name: 'Dashboard', icon: images.home },
    { name: 'Users', icon: images.userFriends },
    { name: 'Guarantors', icon: images.guarrantor },
    { name: 'Loans', icon: images.moneyBag },
    { name: 'Decision Models', icon: images.handshake },
    { name: 'Savings', icon: images.piggyBank },
    { name: 'Loan Requests', icon: images.coins },
    { name: 'Whitelist', icon: images.userCog },
    { name: 'Karma', icon: images.userTimes },
  ];
  export const sidebarBusiness = [
    { name: 'Organization', icon: images.briefcase },
    { name: 'Loan Products', icon: images.savings },
    { name: 'Saving Products', icon: images.bank },
    { name: 'Fees and Charges', icon: images.coins },
    { name: 'Transactions', icon: images.paper },
    { name: 'Services', icon: images.galaxy },
    { name: 'Service Account', icon: images.userCog },
    { name: 'Settlements', icon: images.scroll },
    { name: 'Reports', icon: images.chartBar },
  ]
  export  const sidebarSettings = [
    { name: 'Preferences', icon: images.sliders },
    { name: 'Fees and Pricing', icon: images.bagde },
    { name: 'Audit Logs', icon: images.clipboard },
  
  ]
  
  export const userStats = [
    { title: 'USERS', value: '2,453', icon: images.twoUsers },
    { title: 'ACTIVE USERS', value: '2,453', icon: images.threeUsers },
    { title: 'USERS WITH LOANS', value: '12,453', icon: images.fileSave },
    { title: 'USERS WITH SAVINGS', value: '102,453', icon: images.twoUsers },
  ];
  
  interface User {
    id: number;
    organization: string;
    username: string;
    email: string;
    phoneNumber: string;
    dateJoined: string;
    status: string;
  }
  export const userTableData: User[] = [
    { id: 1, organization: 'Lendsqr', username: 'Adedeji', email: 'adedeji@lendsqr.com', phoneNumber: '08078903721', dateJoined: 'May 15, 2020 10:00 AM', status: 'Inactive' },
    { id: 2, organization: 'Irorun', username: 'Debby Ogana', email: 'debby2@irorun.com', phoneNumber: '08160780928', dateJoined: 'Apr 30, 2020 10:00 AM', status: 'Pending' },
    { id: 3, organization: 'Lendstar', username: 'Grace Effiom', email: 'grace@lendstar.com', phoneNumber: '07060780922', dateJoined: 'Apr 30, 2020 10:00 AM', status: 'Blacklisted' },
    { id: 4, organization: 'Lendsqr', username: 'Tosin Dokunmu', email: 'tosin@lendsqr.com', phoneNumber: '07003309226', dateJoined: 'Apr 10, 2020 10:00 AM', status: 'Pending' },
    { id: 5, organization: 'Lendsqr', username: 'Grace Effiom', email: 'grace@lendsqr.com', phoneNumber: '07060780922', dateJoined: 'Apr 30, 2020 10:00 AM', status: 'Active' },
    { id: 6, organization: 'Lendsqr', username: 'Tosin Dokunmu', email: 'tosin@lendsqr.com', phoneNumber: '07003309226', dateJoined: 'Apr 10, 2020 10:00 AM', status: 'Pending' },
    { id: 7, organization: 'Lendsqr', username: 'Grace Effiom', email: 'grace@lendsqr.com', phoneNumber: '07060780922', dateJoined: 'Apr 30, 2020 10:00 AM', status: 'Active' },
    { id: 8, organization: 'Lendsqr', username: 'Tosin Dokunmu', email: 'tosin@lendsqr.com', phoneNumber: '07003309226', dateJoined: 'Apr 10, 2020 10:00 AM', status: 'Inactive' },
    { id: 9, organization: 'Lendsqr', username: 'Grace Effiom', email: 'grace@lendsqr.com', phoneNumber: '07060780922', dateJoined: 'Apr 30, 2020 10:00 AM', status: 'Inactive' },
  ];
  
  