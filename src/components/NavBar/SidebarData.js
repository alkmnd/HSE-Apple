import React from 'react'
import * as VscIcons from 'react-icons/vsc';

/**
 * Данные для отображения навигации.
 */
export const SidebarData = [
    {
        title: 'Профиль', 
        path: '/profile',
        icon: <VscIcons.VscAccount color={979797} />,
        cName: 'nav-text'
    }, 
    {
        title: 'Сообщения', 
        path: '/messages',
        icon: <VscIcons.VscCommentDiscussion color={979797} />,
        cName: 'nav-text'
    }, 

    {
        title: 'Задания', 
        path: '/assignments',
        icon: <VscIcons.VscChecklist color={979797} />,
        cName: 'nav-text'
    }, 
    {
        title: 'Объявления', 
        path: '/activities',
        icon: <VscIcons.VscBellDot color={979797} />,
        cName: 'nav-text'
    }
];