import { faHouse, faBell, faComments, faUser } from '@fortawesome/free-solid-svg-icons';

export const title = 'SocialSeedlings';
export const signature = 'SamriddhJain@2023';

export interface Page {
    name: string;
    route: string;
    icon: any;
}

const PAGES = [
    {
        name: 'NewsFeed',
        route: '/',
        icon: faHouse,
    },
    {
        name: 'Notifications',
        route: '/notifications',
        icon: faBell,
    },
    {
        name: 'Chats',
        route: '/chats',
        icon: faComments,
    },
    {
        name: 'Profile',
        route: '/user/me',
        icon: faUser,
    },
];

export { PAGES };